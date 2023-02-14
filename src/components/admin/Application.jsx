import React , {useState,useEffect} from "react";
import {
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Paper,
  } from "@mui/material";
import { Axios } from "../../axiosInstance";
import { Button } from "react-bootstrap";
import { ViewApplicationModel } from "./models/viewApplicationsModel";

export const Application = () => {
    const [applications , setApplications] = useState([])
    const [selectApplication, setSelectApplication] = useState({})
    const [show,setShow] = useState(false)

    useEffect(() => {
        Axios.get('/admin/getApplications').then((response) => {
            setApplications(response.data)
        })
    },[])
    const viewApplication = (data) =>{
        setShow(true)
        setSelectApplication(data)
    }
    return(
        <>
        <TableContainer component={Paper} sx={{maxHeight:"500px",width:"1000px",marginTop:"30px",marginLeft:"260px"}} >
        <Table aria-label='simple table' stickyHeader sx={{bgcolor:"black"}} >
            <TableHead  >
                <TableRow>
                    <TableCell align="center" >No</TableCell>
                    <TableCell align="center" >email</TableCell>
                    <TableCell align="center" >View</TableCell>
                </TableRow>
            </TableHead>
            <TableBody sx={{bgcolor:"white"}} >
                {applications.map((data,i) => {
                    return(
                        <TableRow
                  sx={{'&: last-child td, &: last-child th' : {border: 0}}}
                  >
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell align="center">{data.email}</TableCell>
                    <TableCell align="center">
                      <Button className="edit_btn" onClick={() => viewApplication(data)} >View</Button>
                    </TableCell>
                  </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableContainer>

    <ViewApplicationModel show={show} setShow={setShow} selectApplication={selectApplication}  />
    </>
    )
}