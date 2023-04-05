import * as yup from "yup";

export const createTaskSchema = yup.object({
  listUserAsign: yup
    .array()
    .test(
      "check-if-don't-have-member",
      "Please select at least one member",
      (value) => value.length > 0
    ),
  taskName: yup
    .string()
    .required("Please fill this field!")
    .test(
      "check-task-name-if-it-weren't too short",
      "Task name must have at least two word",
      (value) => value.split(" ").filter((item) => item !== "" && item !== " ").length > 1
    ),
  description: yup.string(),

  statusId: yup
    .string()
    .test("check-if-timer-is-0", "Please select one of status", (value) => value > 0),
  originalEstimate: yup
    .number()
    .test("check-if-timer-is-0", "Original estimate timer must not be 0", (value) => value > 0),
  timeTrackingSpent: yup
    .number()
    .test("check-if-timer-is-0", "Time tracking spent must not be 0", (value) => value > 0),
  timeTrackingRemaining: yup
    .number()
    .test("check-if-timer-is-0", "Time tracking remaining must not be 0", (value) => value > 0),
  projectId: yup
    .number()
    .test("check-if-user-don't select", "Please select one of project", (value) => value > 0),
  typeId: yup
    .number()
    .test("check-if-user-don't select", "Please select one of type", (value) => value > 0),
  priorityId: yup
    .number()
    .test("check-if-user-don't select", "Please select one of project", (value) => value > 0),
});
