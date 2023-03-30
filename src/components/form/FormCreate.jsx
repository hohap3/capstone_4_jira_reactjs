import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { schemaCreateProject } from "schemas";
import EditorAdminField from "./form-control/admin/EditorAdminField";
import InputAdminField from "./form-control/admin/InputAdminField";
import SelectAdminField from "./form-control/admin/SelectAdminField";

function FormCreate({ onSubmit }) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      projectName: "",
      description: "",
      categoryId: 0,
      alias: "",
    },
    mode: "all",
    resolver: yupResolver(schemaCreateProject),
  });

  function handleSubmitForm(values) {
    if (onSubmit) onSubmit(values);
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm, (error) => console.log(error))}
      className="form__setting my-[2rem]"
    >
      <InputAdminField
        name="projectName"
        label="Name"
        placeholder="Project name"
        control={control}
      />
      <EditorAdminField name="description" label="Description" control={control} />
      <SelectAdminField name="categoryId" label="Project Category" control={control} />

      <Button type="submit" sx={{ margin: "1rem 0 0 0" }}>
        Create Project
      </Button>
    </form>
  );
}

export default FormCreate;
