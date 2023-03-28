import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetSelectedProject } from "reduxs/Slice/projectSlice";
import { schemaUpdateProject } from "schemas";
import { fetchProjectCategory } from "thunks/projectCategoryThunk";
import EditorAdminField from "./form-control/admin/EditorAdminField";
import InputAdminField from "./form-control/admin/InputAdminField";
import SelectAdminField from "./form-control/admin/SelectAdminField";

function FormUpdate({ onSubmit, values }) {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.project.projectList);

  const { id: projectId, projectName, creator, description, categoryId } = values;

  const { handleSubmit, control } = useForm({
    defaultValues: {
      id: 0,
      projectName: "",
      creator: 0,
      description: "",
      categoryId: "",
      creatorName: "",
    },
    mode: "all",
    values: {
      id: projectId,
      projectName,
      creator: creator.id,
      description: description,
      categoryId,
      creatorName: creator.name,
    },
    resolver: yupResolver(schemaUpdateProject),
  });

  useEffect(() => {
    dispatch(fetchProjectCategory());
  }, []);

  function handleSubmitForm(values) {
    if (projectList.length < 1) return;
    const index = projectList.findIndex((item) => item.id === values.id);
    if (index < 0) return;

    if (onSubmit) onSubmit(values, index);
  }

  function handleCloseDrawer() {
    dispatch(resetSelectedProject());
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm, (error) => console.log(error))}>
      <div className="flex items-center gap-4">
        <div className="form__item flex-1">
          <InputAdminField disabled={true} name="id" label="Project ID" control={control} />
        </div>

        <div className="form__item flex-1">
          <InputAdminField name="projectName" label="Project Name" control={control} />
        </div>
      </div>

      <InputAdminField disabled={true} name="creatorName" label="Creator Name" control={control} />

      <SelectAdminField name="categoryId" label="Project Category" control={control} />

      <EditorAdminField name="description" label="Description" control={control} />

      <div className="flex items-center gap-4 justify-end mt-10 mb-4">
        <Button onClick={handleCloseDrawer}>Cancel</Button>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default FormUpdate;
