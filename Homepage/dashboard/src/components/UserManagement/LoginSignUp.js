import React, { useState, useEffect } from "react";
import "./LoginSignUp.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSignUp = () => { 
  useEffect(() => {
    // Add the CSS class to the body tag when the component mounts
    document.body.classList.add("login-register-bg");

    // Remove the CSS class when the component unmounts
    return () => {
      document.body.classList.remove("login-register-bg");
    };
  }, []);

  const [action, setAction] = useState("Sign Up");

  const initialvalues = {
    name: "",
    emailId: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    // name: Yup.string().when("action", {
    //   is: "Sign Up",
    //   then: Yup.string().required("Name is required"),
    // }),
    // name: Yup.string().required("Name is required"),
    emailId: Yup.string()
      .email("Please Enter a valid Email Id")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values, props) => {
    debugger;
    console.log(values);
    props.resetForm();

    console.log(props);
  };

  return (
    // <div className='container'>
    //     <div className='header'>
    //         <div className='text'>{action}</div>
    //         <div className='underline'></div>
    //     </div>
    //     <div className='inputs'>
    //         {action === "Login"?<div></div> : <div className='input'>
    //             <img src={user_icon} alt=''/>
    //             <input type='text' placeholder='Name'/>
    //         </div>}

    //         <div className='input'>
    //             <img src={email_icon} alt=''/>
    //             <input type='email' placeholder='Email Id'/>
    //         </div>
    //         <div className='input'>
    //             <img src={password_icon} alt=''/>
    //             <input type='password' placeholder='Password'/>
    //         </div>
    //     </div>
    //     {action === "Sign Up" ? <div></div> : <div className='forgot-password'>Forgot password? <span>Click here</span></div>}
    //     <div className='submit-container'>
    //         <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
    //         <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
    //     </div>
    // </div>
    <Formik
      initialValues={initialvalues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props) => (
        <Form>
          {console.log(props)}
          <div className="container">
            <div className="header">
              <div className="text">{action}</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              {action === "Login" ? (
                <div></div>
              ) : (
                <div>
                  <div className="input">
                    <img src={user_icon} alt="" />
                    <Field type="text" placeholder="Name" name="name" />
                  </div>
                  <div className="inputerror">
                    {/* <ErrorMessage name="name" className="error" /> */}
                  </div>
                </div>
              )}

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
            {action === "Sign Up" ? (
              <div></div>
            ) : (
              <div className="forgot-password">
                Forgot password? <span>Click here</span>
              </div>
            )}
            <div className="submit-container">
              <button
                type="submit"
                className={action === "Login" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Sign Up
              </button>

              <button
                type="submit"
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Login");
                }}
              >
                Login
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginSignUp;
