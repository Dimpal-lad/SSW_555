import React, { useState } from "react";
import "./LoginSignUp.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import axios from "axios";
import { supabase } from "./supabaseClient";

const SignUp = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false); // State to manage navigation
  const [error, setError] = useState(""); // State to manage error message

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

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // Make POST request to backend API
      const response = await axios.post(
        "http://localhost:3000/api/signup",
        values
      );
      console.log(response);

      console.log("Signup successful", response.data);

      // Clear any previous error message
      setError("");
      // Reset form fields
      resetForm();

      // Set the state to navigate to the Login page after successful signup
      setRedirectToLogin(true);
    } catch (error) {
      console.error("Signup error", error.response.data);
      // Display error message to user
      setError(error.response.data.error);
    } finally {
      // Set submitting state to false to enable button again
      setSubmitting(false);
    }
  };

  // Redirect to Login page if redirectToLogin state is true
  if (redirectToLogin) {
    window.location.href = "/Login";
  }

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
            <div className="inputerror">
              {error && <div className="error">{error}</div>}
            </div>
            <div className="submit-container">
              {/* Disable button while submitting */}
              <button
                type="submit"
                className="submit"
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Signing up..." : "Sign Up"}
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
