import { MenuItem, Select } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";

function SelectField(props) {
  const { name, label, control, defaultValues, data } = props;

  console.log(data);

  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({ name, control });

  return (
    <div className="form__item flex flex-col mb-4">
      <label className="mb-4">{label}</label>
      <Select name={field.name} onChange={field.onChange} value={field.value} displayEmpty>
        <MenuItem value={0}>{defaultValues}</MenuItem>

        {data &&
          data.length > 0 &&
          data.map((item, idx) => (
            <MenuItem value={item.id || item.priorityId} key={item.id || item.priorityId}>
              {item.taskType || item.priority}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}

export default SelectField;
