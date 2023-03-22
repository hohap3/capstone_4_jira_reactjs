import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup.string().required("Please insert this field!").email("Email is not valid! Try again!"),
  passWord: yup.string().required("Please insert this field!"),
});
