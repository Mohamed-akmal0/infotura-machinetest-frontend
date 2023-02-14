import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../axiosInstance";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import "../../styles/adminLogin.css";
import { toast, ToastContainer } from "react-toastify";

export const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: "",
    course: "",
    password: "",
  });
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    try {
      Axios.get("/admin/getCourse").then((response) => {
        setCourses(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const paperStyle = { padding: "30px 20px", width: 300, margin: "60px auto" };
  const generateError = (msg) => toast.error(msg);

  const handleSubmit = async () => {
    console.log("inside");
    try {
      const { data } = await Axios.post("/client/signup", values);
      if (data.message === "success") navigate('/login')
    } catch (error) {
      console.log(error.response.data.message);
      if (error) {
        const msg = "Already registered";
        generateError(msg);
      }
    }
  };

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: "green" }}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h4>Sign Up</h4>
            <Typography variant="caption">
              Please fill this form to create account!
            </Typography>
          </Grid>
          <br />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            placeholder="abc@gmail.com"
            onChange={(e) => {
              setValues({ ...values, [e.target.name]: e.target.value });
            }}
          />
          <br />
          <FormControl sx={{ minWidth: 260 }}>
            <InputLabel>Courses</InputLabel>
            <Select
              name="course"
              onChange={(e) => {
                setValues({ ...values, [e.target.name]: e.target.value });
              }}
            >
              {courses.map((data) => {
                return <MenuItem value={data._id}>{data.courseName}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <br />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            placeholder="@Qwerty*123"
            onChange={(e) => {
              setValues({ ...values, [e.target.name]: e.target.value });
            }}
          />
          <br />
          <button type="submit" className="login_btn" onClick={handleSubmit}>
            Register
          </button>
        </Paper>
      </Grid>
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
