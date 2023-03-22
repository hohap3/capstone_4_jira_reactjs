import { Button } from "@mui/material";
import { DEFAULT_VALUES_LOGIN } from "constants/constant";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./form-control/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "schemas";

function FormSignIn({ onSubmit }) {
  const { handleSubmit, control, setFocus } = useForm({
    defaultValues: DEFAULT_VALUES_LOGIN,
    mode: "all",
    resolver: yupResolver(schemaLogin),
  });

  function handleSubmitForm(values) {
    if (onSubmit) onSubmit(values);
  }

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit(handleSubmitForm, (error) => console.log(error))}
    >
      <div className="mb-6 w-full">
        <InputField name="email" placeholder="Email" label="Email" control={control} />
      </div>
      <div className="mb-6">
        <InputField
          type="password"
          name="passWord"
          placeholder="Password"
          label="Password"
          control={control}
        />
      </div>

      <Button
        type="submit"
        sx={{ height: "2.8rem", fontSize: "1.1rem" }}
        variant="contained"
        fullWidth
      >
        Login
      </Button>
    </form>
  );
}

export default FormSignIn;
