import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required("Give a valid email address"),
  password: yup.string().min(8).max(16).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
