import { useForm } from "react-hook-form";
import React from "react";
import SelectAdminField from "./form-control/admin/SelectAdminField";
import EditorAdminField from "./form-control/admin/EditorAdminField";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import SelectField from "./form-control/SelectField";

function FormCreateTask({ onSubmit }) {
  const taskList = useSelector((state) => state.task.taskList);
  const priorityList = useSelector((state) => state.priority.priorityList);
  const isLoadingTask = useSelector((state) => state.task.isLoading);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      taskName: "",
      description: "",
      statusId: "",
      originalEstimate: 0,
      timeTrackingSpent: 0,
      timeTrackingRemaining: 0,
      projectId: 0,
      typeId: 0,
      priorityId: 0,
    },
    mode: "all",
  });

  function handleSubmitForm(values) {
    if (onSubmit) onSubmit(values);
  }

  return (
    <form
      className="form__create"
      onSubmit={handleSubmit(handleSubmitForm, (error) => console.log(error))}
    >
      <SelectAdminField name="projectId" label="Project" control={control} />

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
          <SelectField
            name="priorityId"
            label="Priority"
            control={control}
            defaultValues="Select one of Priority"
            data={priorityList}
          />
        </div>
      </div>

      <EditorAdminField name="description" label="Description" control={control} />

      <div className="flex justify-end items-center mt-6 gap-4">
        <Button variant="text" type="button">
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
