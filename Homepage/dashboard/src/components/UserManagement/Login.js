import React from "react";
import "./LoginSignUp.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Login = () => {
  const initialValues = {
    emailId: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    emailId: Yup.string()
      .email("Please Enter a valid Email Id")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values, props) => {
    console.log(values);
    props.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props) => (
        <Form>
          <div className="container">
            <div className="header">
              <div className="text">Login</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <img src={email_icon} alt="" />
                <Field type="email" placeholder="Email Id" name="emailId" />
              </div>
              <div className="inputerror">
                <ErrorMessage name="emailId" className="error" />
              </div>
              <div className="input">
                <img src={password_icon} alt="" />
                <Field type="password" placeholder="Password" name="password" />
              </div>
              <div className="inputerror">
                <ErrorMessage name="password" className="input error" />
              </div>
            </div>
            <div className="submit-container">
              <button type="submit" className="submit">
                Login
              </button>
              <p>
                Don't have an account? <a href="/signup">Sign Up</a>
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
