import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import { useController } from "react-hook-form";

function PasswordField(props) {
  const { name, control, label, ...restProps } = props;

  const [showPassword, setShowPassword] = useState(false);

  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({ name, control });

  function handleClickShowPassword() {
    setShowPassword((prevState) => !prevState);
  }

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        name={field.name}
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        onChange={field.onChange}
        onBlur={field.onBlur}
        error={invalid}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
        {...restProps}
        value={field.value}
      />
      <FormHelperText error={invalid}>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default PasswordField;
