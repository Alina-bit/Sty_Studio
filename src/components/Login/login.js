import pic1 from "../../assets/rectangle-1@2x.png";
import pic2 from "../../assets/group-1.svg";
import pic3 from "../../assets/group-2.svg";
import pic4 from "../../assets/group-3.svg";
import pic5 from "../../assets/group-4.svg";
import pic6 from "../../assets/line-1.svg";
import pic7 from "../../assets/line-2.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const signUpSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
});

const Desktop1 = () => {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });

  return (
    <div className="desktop-1">
      <div className="desktop-1-child" />
      <div className="login">
        <img className="login-child" alt="" src={pic1} />
        <b className="login1">Login</b>
        <div className="please-enter-your">Please enter your login details to sign in</div>

        <form onSubmit={handleSubmit}>
          <div>
            <input 
              className="email" 
              type="text" 
              name = "email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error2">{errors.email}</p>
            ) : null}
          </div>
          <div>
            <input
              className="password-input" 
              type="password" 
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error3">{errors.password}</p>
            ) : null}
          </div>
          <button className="login-button">
            <div className="login-button-child" />
            <b className="login2">Login</b>
          </button>

          <div className="dont-have-an">{`Don’t have an account? `}</div>
          <div className="dont-foget">
            <div className="keep-me-logged">{`Keep me logged in `}</div>
            <a className="forget-password">{`Forget Password? `}</a>
            <input className="tick" type="checkbox" />
          </div>
          <div className="continue">
            <div className="or-continue-with">{`Or continue with `}</div>
            <img className="continue-child" alt="" src={pic6} />
            <img className="continue-item" alt="" src={pic7} />
          </div>
          <div className="icons">
            <button className="google">
              <div className="google-child" />
              <img className="google-item" alt="" src={pic2} />
            </button>
            <button className="fackbook">
              <div className="google-child" />
              <img className="fackbook-item" alt="" src={pic3} />
            </button>
            <button className="apple">
              <div className="google-child" />
              <img className="apple-item" alt="" src={pic4} />
            </button>
            <button className="twitter">
              <div className="google-child" />
              <img className="twitter-item" alt="" src={pic5} />
            </button>
          </div>
          <a className="sign-up">Sign up</a>
        </form>
      </div>
    </div>
  );
};

export default Desktop1;