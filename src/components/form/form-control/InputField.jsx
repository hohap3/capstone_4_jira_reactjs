import { TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";

function InputField(props) {
  const { name, control, ...restProps } = props;

  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({ name, control });

  return (
    <TextField
      onChange={field.onChange}
      value={field.value}
      onBlur={field.onBlur}
      name={name}
      error={invalid}
      helperText={errors[name]?.message ? errors[name].message : null}
      fullWidth
      {...restProps}
    />
  );
}

export default InputField;
