import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrainModel from "./BrainModel";
import Login from "./components/UserManagement/Login";
import SignUp from "./components/UserManagement/SignUp";
import BrainView from "./components/Brain_Visualization/BrainView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },
  {
    path: "BrainModel",
    element: <BrainModel />,
  },
  {
    path: "/brain-view",
    element: <BrainView />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
