import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setSelectedId } from "reduxs/Slice/projectSlice";

function SelectField(props) {
  const { name, label, control, defaultValues, data, type } = props;
  const dispatch = useDispatch();

  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({ name, control });

  function handleChangeSelect(e) {
    const { value } = e.target;
    if (type === "project") {
      dispatch(setSelectedId(value));
    }
    field.onChange(value);
  }

  return (
    <div className="form__item flex flex-col mb-4">
      <label className="mb-4">{label}</label>
      <FormControl error={invalid}>
        <Select name={field.name} onChange={handleChangeSelect} value={field.value} displayEmpty>
          <MenuItem value={0}>{defaultValues}</MenuItem>

          {data &&
            data.length > 0 &&
            data.map((item, idx) => (
              <MenuItem
                value={item.id || item.priorityId || item.statusId}
                key={item.id || item.priorityId || item.statusId}
              >
                {item.taskType || item.priority || item.statusName || item.projectName}
              </MenuItem>
            ))}
        </Select>
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default SelectField;
