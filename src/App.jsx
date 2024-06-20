import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./components/_root/RootLayout";
import AuthLayout from "./components/_auth/AuthLayout";
// import SigninForm from "./components/_auth/forms/SigninForm";
// import SignupForm from "./components/_auth/forms/SignupForm";
import Dashboard from "./components/_root/Dashboard";
// import Login from "./components/Login";
// import AddNewDoctor from "./components/AddNewDoctor";
// import Messages from "./components/Messages";
// import Doctors from "./components/Doctors";
// import AddNewAdmin from "./components/AddNewAdmin";
// import Sidebar from "./components/Sidebar";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            {/* <Route path="/sign-in" element={<SigninForm />} /> */}
            {/* <Route path="/sign-up" element={<SignupForm />} /> */}
          </Route>

          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            {/* <Route path="/login" element={<Login />} />
          <Route path="/doctor/addnew" element={<AddNewDoctor />} />
          <Route path="/admin/addnew" element={<AddNewAdmin />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/doctors" element={<Doctors />} /> */}
          </Route>
        </Routes>
      </Router>
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
