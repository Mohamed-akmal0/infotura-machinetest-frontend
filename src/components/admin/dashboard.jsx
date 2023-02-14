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

export const AdminDashboard = () => {
    const [clientDetails , setClientDetails] = useState([])
    useEffect(() => {
        Axios.get('/getDetails').then((response) => {
            console.log(response.data)
            setClientDetails(response.data)
        })
    },[])
    console.log(clientDetails)
  return(
    <TableContainer component={Paper} sx={{maxHeight:"500px",width:"1000px",marginTop:"30px",marginLeft:"200px"}} >
        <Table aria-label='simple table' stickyHeader sx={{bgcolor:"black"}} >
            <TableHead  >
                <TableRow>
                    <TableCell align="center" >No</TableCell>
                    <TableCell align="center" >email</TableCell>
                    <TableCell align="center" >Course</TableCell>
                </TableRow>
            </TableHead>
            <TableBody></TableBody>
        </Table>
    </TableContainer>
  )
};
