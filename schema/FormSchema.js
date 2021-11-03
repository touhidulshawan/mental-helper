import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required("Give a valid email address"),
  password: yup.string().min(8).max(16).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Give a valid email address"),
  password: yup.string().min(8).max(16).required(),
});

export const editProfileSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  bio: yup
    .string()
    .min(15)
    .max(100)
    .required("Please write something about you"),
  password: yup.string().min(8).max(16).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
