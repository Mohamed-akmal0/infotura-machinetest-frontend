import React , {useState,useEffect} from "react";
import { Axios } from "../../axiosInstance";
import {
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Paper,
  } from "@mui/material";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

export const DeletedCourse = () => {
    const [courses , setCourses] = useState([])

    useEffect(() => {
        Axios.get('/admin/getDeleteCourse').then((response) => {
            setCourses(response.data)
        })
    },[])
    const generateMessage = (msg) => toast.success(msg)
    const retrieve = async (id) => {
        try {
            const {data} = await Axios.patch(`/admin/restoreCourse/${id}`)
            if(data.message === 'success'){
                const message = 'Retrieved'
                generateMessage(message)
            }
        } catch (error) {
          console.log(error)  
        }
    }
    return(
        <>
            <h6 style={{ marginLeft: "700px", marginTop: "10px" , fontWeight:"bold" }} > Deleted Course  </h6>
            <TableContainer component={Paper} sx={{maxHeight:"500px",width:"1000px",marginTop:"30px",marginLeft:"260px"}} >
        <Table aria-label='simple table' stickyHeader sx={{bgcolor:"black"}} >
            <TableHead  >
                <TableRow>
                    <TableCell align="center" >No</TableCell>
                    <TableCell align="center" >Course Name</TableCell>
                    <TableCell align="center" >Retrieve</TableCell>
                </TableRow>
            </TableHead>
            <TableBody sx={{bgcolor:"white"}} >
                {courses.map((data,i) => {
                    return(
                        <TableRow
                  sx={{'&: last-child td, &: last-child th' : {border: 0}}}
                  >
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell align="center">{data.courseName}</TableCell>
                    <TableCell align="center">
                      <Button className="edit_btn" onClick={() => retrieve(data._id)} >Retrieve</Button>
                    </TableCell>
                  </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableContainer>
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
    )
}