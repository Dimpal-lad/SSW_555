import React from "react";
import "./LoginSignUp.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const SignUp = () => {
  const initialValues = {
    name: "",
    emailId: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
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
              <div className="text">Sign Up</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <img src={user_icon} alt="" />
                <Field type="text" placeholder="Name" name="name" />
              </div>
              <div className="inputerror">
                <ErrorMessage name="name" className="error" />
              </div>
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
                <ErrorMessage name="password" className="error" />
              </div>
            </div>
            <div className="submit-container">
              <button type="submit" className="submit">
                Sign Up
              </button>
              <p>
                Already have an account?
                <a href="/Login">Login</a>
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
