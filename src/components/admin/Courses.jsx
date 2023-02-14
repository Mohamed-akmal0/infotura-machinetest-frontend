import React, { useState, useEffect } from "react";
import "../../styles/adminLogin.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Paper,
  TableCell,
  TableRow,
  Box,
} from "@mui/material";
import { ToastContainer,toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import { Axios } from "../../axiosInstance";
import { EditCourseModel } from "./EditCourseMode";
import { AddClass } from "./models/addClass";

export const Courses = () => {
  const [show, setShow] = useState(false);
  const [isSecondModelOpen,setIsSecondModelOpen] = useState(false)
  const [id,setId] = useState('')
  const [Show,SetShow] = useState(false)
  const [addCourse, setAddCourse] = useState({
    courseName: "",
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
  const generateMessage = (msg) => toast.success(msg) 
  const generateErrorMessage = (msg) => toast.error(msg)
  // function for closing model
  const handleClose = () => {
    setShow(false);
  };
  const handleSubmit = () => {
    try {
      Axios.post("/admin/addCourse", addCourse).then((response) => {
        console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  const openModel = () => {
    setShow(true);
  };

  // function for editing course
  const editCourse = (id) => {
    setIsSecondModelOpen(true)
    setId(id)
  }

  // function for deleting course
  const deleteCourse = async (id) => {
    try {
        const {data} = await Axios.patch(`/admin/deleteCourse/${id}`)
        if(data.message === 'success'){
          const msg = 'Deleted'
          generateMessage(msg)
        }else{
          const msg = 'something went wrong'
          generateErrorMessage(msg)
        }
    } catch (error) {
      console.log(error)
    }
  }

  const addClass = (id) => {
    console.log(id)
    setId(id)
    SetShow(true)
  }
  
  return (
    <>
      <h5 style={{ marginLeft: "700px", marginTop: "10px" }}>Courses</h5>
      <div
        sx={{ display: "flex", flexDirection: "column", position: "relative" }}
      >
        <Box p={2} width="310px" textAlign="center" role="presentation">
          <Button className="login_btn" onClick={openModel}>
            ADD COURSE
          </Button>
        </Box>
        <TableContainer
          component={Paper}
          sx={{ maxHeight: "500px", width: "1000px", marginLeft: "200px" }}
        >
          <Table
            aria-label="simple table"
            stickyHeader
            sx={{ bgcolor: "black" }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  No
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  Name
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  Edit
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  Delete
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  Add Class
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ bgcolor: "white" }}>
              {courses.map((data, i) => {
                return (
                  <TableRow
                  sx={{'&: last-child td, &: last-child th' : {border: 0}}}
                  key={i}
                  >
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell align="center">{data.courseName}</TableCell>
                    <TableCell align="center">
                      <Button className="edit_btn" onClick={() => editCourse(data._id)} >Edit</Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button className="delete_btn" onClick={() => deleteCourse(data._id)} >Delete</Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button className="class_btn" onClick={() => addClass(data._id)} >Add </Button>
                    </TableCell>
                    {/* <AddClass Show={Show} SetShow={SetShow} id={id} /> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* modal for adding courses */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="courseName"
            placeholder="Enter Course Name"
            onChange={(e) => {
              setAddCourse({ [e.target.name]: e.target.value });
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="help_btn" type="submit" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
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
    <EditCourseModel isSecondModelOpen={isSecondModelOpen} setIsSecondModelOpen={setIsSecondModelOpen} id={id} />
    <AddClass Show={Show} SetShow={SetShow} id={id} />
    </>
  );
};
