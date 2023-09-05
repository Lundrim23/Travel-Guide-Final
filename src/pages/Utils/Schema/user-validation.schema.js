import * as Yup from "yup";

export const userSchema = Yup.object({
  username: Yup.string()
    .min(3, "Must be at least 3 characters long")
    .max(15, "Must 15 characters or less")
    .required("This field is Required"),

  email: Yup.string().email("Invalid email").required("This field is Required"),

  phone: Yup.string()
    .required("This field is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .max(15),

  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("This field is Required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], 'Must match "password" field value')
    .required("This field is Required"),
});
