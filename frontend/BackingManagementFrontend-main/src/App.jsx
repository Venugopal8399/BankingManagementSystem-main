import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login.jsx";
import Dashboard from "./screens/Dashboard.jsx";
import { ToastContainer } from "react-toastify";
import SignUp from "./screens/Signup.jsx";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
