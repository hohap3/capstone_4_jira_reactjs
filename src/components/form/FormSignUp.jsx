import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { DEFAULT_VALUES_REGISTER } from "constants/constant";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { schemaRegister } from "schemas";
import InputField from "./form-control/InputField";
import PasswordField from "./form-control/PasswordField";

function FormSignUp({ onSubmit }) {
  const { handleSubmit, control } = useForm({
    defaultValues: DEFAULT_VALUES_REGISTER,
    mode: "all",
    resolver: yupResolver(schemaRegister),
  });

  function handleSubmitForm(values) {
    if (onSubmit) onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm, (error) => console.log(error))}>
      <div className="mb-6 w-full">
        <InputField name="email" label="Email" placeholder="Insert email..." control={control} />
      </div>

      <div className="mb-6 w-full">
        <PasswordField
          name="passWord"
          control={control}
          placeholder="Insert Password..."
          label="Password"
        />
      </div>

      <div className="mb-6 w-full">
        <PasswordField
          name="retypePassword"
          control={control}
          placeholder="Insert Retype password..."
          label="Retype password"
        />
      </div>

      <div className="mb-6 w-full">
        <InputField name="name" label="Name" placeholder="Insert Name..." control={control} />
      </div>

      <div className="mb-6 w-full">
        <InputField
          name="phoneNumber"
          label="Phone"
          placeholder="Insert Phone number..."
          control={control}
        />
      </div>

      <Button
        type="submit"
        sx={{ height: "2.8rem", fontSize: "1.1rem" }}
        variant="contained"
        fullWidth
      >
        Register
      </Button>
    </form>
  );
}

export default FormSignUp;
