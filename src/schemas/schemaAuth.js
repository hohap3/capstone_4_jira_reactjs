import { PHONE_REGEX } from "constants";
import { NAME_REGEX } from "constants";
import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup.string().required("Please insert this field!").email("Email is not valid! Try again!"),
  passWord: yup.string().required("Please insert this field!"),
});

export const schemaRegister = yup.object({
  email: yup.string().required("Please insert this field!").email("Email is not valid! Try again!"),
  passWord: yup.string().required("Please insert this field!"),
  retypePassword: yup
    .string()
    .required("Please insert this field!")
    .oneOf([yup.ref("passWord")], "Retype password is not match with your password! Try again!"),
  name: yup
    .string()
    .required("Please insert this field!")
    .test(
      "check if user name is too short",
      "Name must have at least 2 words",
      (value) => value.split(" ").filter((string) => string !== "" && string !== " ").length > 1
    )
    .matches(NAME_REGEX, "Name mustn't have number! Try again"),
  phoneNumber: yup
    .string()
    .required("Please insert this field!")
    .test(
      "check phone number length",
      "Phone number must have 10 numbers",
      (value) => value.length === 10
    )
    .matches(PHONE_REGEX, "Phone number must only be number"),
});
