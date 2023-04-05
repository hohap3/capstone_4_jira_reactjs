import { FormControl, FormHelperText, Input } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";

function InputAdminField(props) {
  const { name, control, label, ...restProps } = props;

  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({ name, control });

  return (
    <div className="form__setting-item flex flex-col mb-4">
      <FormControl error={invalid}>
        <label className="text-sm text-gray-600 font-medium">{label}</label>
        <Input
          name={field.name}
          onChange={field.onChange}
          onBlur={field.onBlur}
          inputProps={restProps}
          value={field.value}
        />
        {invalid && (
          <FormHelperText sx={{ fontSize: "0.8rem" }} id="component-error-text">
            {errors[name]?.message}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
}

export default InputAdminField;
