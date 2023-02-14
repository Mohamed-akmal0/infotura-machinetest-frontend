import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../../styles/adminLogin.css";
import { Axios } from "../../axiosInstance";

export const ClientLogin = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const generateError = (msg) => toast.error(msg);
  const email = "invalid email";
  const password = "invalid password";
  const approve = "not approved by admin";
  const reject = "rejected by admin";

  const handleSubmit = async () => {
    try {
      const { data } = await Axios.post(
        "/client/login",
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );
      if(data) {
        navigate('/dashboard' , {state:data})
      }
    } catch (error) {
      if (error.response.data.message === "wrong_email") 
        generateError(email);
      if (error.response.data.message === "wrong_password")
        generateError(password);
      if (error.response.data.message === "not_approved")
        generateError(approve);
      if (error.response.data.message === "rejected") generateError(reject);
    }
  };
  return (
    <>
      <div className="page">
        <div className="cover">
          <h5>CLIENT LOGIN</h5>
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
          <p>Doesn't have an account  <NavLink to={'/'} >click here</NavLink></p>
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
