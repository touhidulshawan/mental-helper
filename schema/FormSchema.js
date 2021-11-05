import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  email: yup.string().email().trim().required("Give a valid email address"),
  password: yup.string().min(8).max(16).trim().required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().trim().required("Give a valid email address"),
  password: yup.string().min(8).max(16).trim().required(),
});

export const editProfileSchema = yup.object().shape({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  bio: yup.string().max(100).notRequired(),
});

export const editPasswordSchema = yup.object().shape({
  password: yup.string().min(8).max(16).trim().required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
