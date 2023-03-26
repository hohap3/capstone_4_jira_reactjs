import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import LoadingCircle from "components/loadingCircle/LoadingCircle";
import React from "react";
import { useController } from "react-hook-form";
import { useSelector } from "react-redux";

function SelectAdminField(props) {
  const categoryProjectList = useSelector((state) => state.projectCategory.categoryProjectList);

  const { name, control, label, ...restProps } = props;

  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({ name, control });

  return (
    <div className="form__setting-item flex flex-col mt-6 mb-4">
      <FormControl error={invalid}>
        <label className="text-sm text-gray-600 font-medium mb-4">{label}</label>

        {categoryProjectList.length > 0 && (
          <>
            <Select
              name={field.name}
              onChange={field.onChange}
              {...restProps}
              value={field.value}
              displayEmpty
            >
              <MenuItem value={0}>Select one of these</MenuItem>

              {categoryProjectList.map((projectItem) => (
                <MenuItem key={projectItem.id} value={projectItem.id}>
                  {projectItem.projectCategoryName}
                </MenuItem>
              ))}
            </Select>
            {invalid && <FormHelperText>{errors[name]?.message}</FormHelperText>}
          </>
        )}

        {categoryProjectList.length < 1 && <LoadingCircle />}
      </FormControl>
    </div>
  );
}

export default SelectAdminField;
