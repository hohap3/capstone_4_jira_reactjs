import * as yup from "yup";

export const schemaCreateProject = yup.object({
  projectName: yup
    .string()
    .required("Please fill this field!")
    .test(
      "check-name-length",
      "Project name must have at least 2 words",
      (value) => value.split(" ").filter((item) => item !== "" && item !== " ").length > 1
    ),
  description: yup.string(),
  categoryId: yup
    .number()
    .test("check-if-user-dont-select", "Please select one of these!", (value) => value > 0),
  alias: yup.string(),
});

export const schemaUpdateProject = yup.object({
  id: yup.number().required("Please insert this field!"),
  projectName: yup.string().required("Please insert this field"),
  creator: yup.number().required("Please insert this field"),
  description: yup.string(),
  categoryId: yup
    .string()
    .test(
      `check-if-user-didn't select`,
      "Please select one of these categories!",
      (value) => value > 0
    ),
  creatorName: yup.string().required("Please insert this field!"),
});
