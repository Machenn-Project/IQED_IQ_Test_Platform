import * as yup from "yup";

export const formSchema = yup.object().shape({
  age: yup.string().required(),
  name: yup.string().required(),
  sclName: yup.string().required("This field is required"),
  grade: yup.string().required(),
  // phNo : yup.string().required('Contact Number is required'),
  phNo: yup
    .string()
    .required("Contact Number is required")
    .matches(/^\d{10}$/, "Contact Number must be exactly 10 digits"),
  email: yup.string().email().required(),
});

export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character (@$!%*?&)"
    ),
});
