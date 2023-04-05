import { FormHelperText } from "@mui/material";
import { Select } from "antd";
import React from "react";
import { useController } from "react-hook-form";
import { useSelector } from "react-redux";

function SelectSpecialField(props) {
  const userListByProject = useSelector((state) => state.user.userListByProject);

  const { name, label, control } = props;

  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({ name, control });

  const userListOptions =
    userListByProject.length > 0 &&
    userListByProject.map((user) => ({ label: user.name, value: user.userId }));

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-4 text-sm text-gray-600 font-medium">{label}</label>

      <Select
        options={userListOptions}
        name={name}
        mode="multiple"
        defaultValue={field.value}
        size="large"
        placeholder="Select members"
        onSearch={(value) => console.log(value)}
        onSelect={(value) => field.value.push(value)}
        optionFilterProp="label"
        onDeselect={(value) => {
          const index = field.value.findIndex((item) => item === value);
          if (index < 0) return;
          field.value.splice(index, 1);
        }}
      />
      {errors[name]?.message && field.value < 1 && (
        <FormHelperText sx={{ color: "#d32f2f" }}>{errors[name]?.message}</FormHelperText>
      )}
    </div>
  );
}

export default SelectSpecialField;
