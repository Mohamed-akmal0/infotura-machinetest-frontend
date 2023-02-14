import React, { useState } from "react";
import "../../styles/adminLogin.css";
import { ToastContainer, toast } from "react-toastify";
import { Axios } from "../../axiosInstance";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const generateError = (err) => toast.error(err);
  const emailError = "invalid email";
  const passwordError = "invalid password";
  const handleSubmit = async () => {
    console.log(values);
    try {
      const { data } = await Axios.post(
        "/admin/login",
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );
      if (data.message === "success") navigate("/admin/course");
    } catch (error) {
      if (error.response.data.message === "wrong_email")
        generateError(emailError);
      if (error.response.data.message === "wrong_password")
        generateError(passwordError);
    }
  };
  return (
    <>
      <div className="page">
        <div className="cover">
          <h3>ADMIN LOGIN</h3>
          <input
            type="text"
            name="email"
            id=""
            placeholder="email"
            required
            onChange={(e) => {
              setValues({ ...values, [e.target.name]: e.target.value });
            }}
          />

          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
            onChange={(e) => {
              setValues({ ...values, [e.target.name]: e.target.value });
            }}
          />

          <div className="login_btn" onClick={handleSubmit}>
            Login
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
