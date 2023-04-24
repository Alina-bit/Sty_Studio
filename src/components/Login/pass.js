import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  password: "",
  confirm_password: "",
};

const conpSchema = Yup.object({
  password: Yup.string().min(8).required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please enter Confirm Password")
    .oneOf([Yup.ref("password"), null], "Password doesn't match"),
});

const Desktop3 = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: conpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });

  return (
    <div className="desktop-3">
      <div className="desktop-3-child" />
      <b className="change-password">Change Password</b>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="password"
              name = "password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>

          <div>
            <input
              className="confirm"
              name = "confirm_password"
              type="password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="form-error1">{errors.confirm_password}</p>
            ) : null}
          </div>

          <button className="setpass" type="submit">
            <b className="set-password">Set Password</b>
          </button>
        </form>
    </div>
  );
};

export default Desktop3;
