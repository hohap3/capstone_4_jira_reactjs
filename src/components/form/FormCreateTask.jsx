import { useForm } from "react-hook-form";
import React, { useState } from "react";
import SelectAdminField from "./form-control/admin/SelectAdminField";
import EditorAdminField from "./form-control/admin/EditorAdminField";
import { Button, FormControl, FormHelperText, Input } from "@mui/material";
import { useSelector } from "react-redux";
import SelectField from "./form-control/SelectField";
import SelectSpecialField from "./form-control/SelectSpecialField";

import InputAdminField from "./form-control/admin/InputAdminField";
import SliderTimeField from "./form-control/SliderTimeField";
import LoadingCircle from "components/loadingCircle/LoadingCircle";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTaskSchema } from "schemas";

function FormCreateTask({ onSubmit, onClose }) {
  const taskList = useSelector((state) => state.task.taskList);
  const priorityList = useSelector((state) => state.priority.priorityList);
  const statusList = useSelector((state) => state.status.statusList);
  const projectList = useSelector((state) => state.project.projectList);
  const isLoadingTask = useSelector((state) => state.task.isLoading);
  const isLoadingPriority = useSelector((state) => state.priority.isLoading);
  const isLoadingStatus = useSelector((state) => state.status.isLoading);
  const [timeTracking, setTimeTracking] = useState({
    timeTrackingSpent: 0,
    timeTrackingRemaining: 0,
  });

  function handleChangeTime(e) {
    const { name, value } = e.target;
    setTimeTracking((prevState) => ({ ...prevState, [name]: value }));
    setValue(name, +value);
  }

  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      listUserAsign: [],
      taskName: "",
      description: "",
      statusId: "0",
      originalEstimate: 0,
      timeTrackingSpent: 0,
      timeTrackingRemaining: 0,
      projectId: 0,
      typeId: 0,
      priorityId: 0,
    },

    resolver: yupResolver(createTaskSchema),
  });

  function handleSubmitForm(values) {
    if (onSubmit) onSubmit(values);
    reset();
  }

  return (
    <form
      className="form__create"
      onSubmit={handleSubmit(handleSubmitForm, (error) => console.log(error))}
    >
      <InputAdminField
        name="taskName"
        label="Task Name"
        control={control}
        variant="outlined"
        placeholder="Task name..."
      />

      <SelectField
        name="projectId"
        label="Project"
        defaultValues="Select one of projects"
        control={control}
        data={projectList}
        type="project"
      />

      <div className="flex gap-4 items-center">
        <div className="flex-1">
          {isLoadingTask && <LoadingCircle />}
          {!isLoadingTask && (
            <SelectField
              name="typeId"
              label="Task type"
              control={control}
              defaultValues="Select one of task type"
              data={taskList}
            />
          )}
        </div>
        <div className="flex-1">
          {isLoadingPriority && <LoadingCircle />}
          {!isLoadingPriority && (
            <SelectField
              name="priorityId"
              label="Priority"
              control={control}
              defaultValues="Select one of Priority"
              data={priorityList}
            />
          )}
        </div>
      </div>

      <InputAdminField
        name="originalEstimate"
        label="Original Estimate (HOURS)"
        control={control}
        variant="outlined"
        type="number"
        min="0"
      />

      <div className="">
        <SliderTimeField
          label="Time Tracking"
          timeSpent={timeTracking.timeTrackingSpent}
          timeRemaining={timeTracking.timeTrackingRemaining}
        />

        <div className="my-4 flex justify-between gap-8">
          <div className="flex-1 flex flex-col ">
            <label className="mb-4 text-sm text-gray-600 font-medium">Time spent (hours)</label>
            <FormControl error={errors["timeTrackingSpent"]?.message}>
              <Input
                name="timeTrackingSpent"
                className="px-2"
                value={timeTracking.timeTrackingSpent}
                min="0"
                type="number"
                onChange={handleChangeTime}
              />
              {errors["timeTrackingSpent"]?.message && (
                <FormHelperText>{errors["timeTrackingSpent"]?.message}</FormHelperText>
              )}
            </FormControl>
          </div>

          <div className="flex-1 flex flex-col ">
            <label className="mb-4 text-sm text-gray-600 font-medium">Time remaining (hours)</label>
            <FormControl error={errors["timeTrackingRemaining"]?.message}>
              <Input
                name="timeTrackingRemaining"
                className="px-2"
                value={timeTracking.timeTrackingRemaining}
                min="0"
                type="number"
                onChange={handleChangeTime}
              />
              {errors["timeTrackingRemaining"]?.message && (
                <FormHelperText>{errors["timeTrackingRemaining"]?.message}</FormHelperText>
              )}
            </FormControl>
          </div>
        </div>
      </div>

      <SelectSpecialField
        name="listUserAsign"
        label="Assign members"
        placeholder="Select one of member below"
        control={control}
      />

      <div>
        {isLoadingStatus && <LoadingCircle />}

        {!isLoadingStatus && (
          <SelectField
            name="statusId"
            label="Status"
            control={control}
            data={statusList}
            defaultValues="Select one of status below"
          />
        )}
      </div>

      <EditorAdminField name="description" label="Description" control={control} />

      <div className="flex justify-end items-center mt-6 gap-4">
        <Button variant="text" onClick={onClose} type="button">
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default FormCreateTask;
