import React , {useState , useEffect} from "react";
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

export const Class = () => {
    const [courseClass,setCourseClass] = useState([])

    useEffect(() => {
        try {
            Axios.get('/admin/getClass').then((response) => {
              console.log(response.data)
                setCourseClass(response.data)
            })
        } catch (error) {
            console.log(error)
        }
    },[])
  return (
    <>
      <h6 style={{ marginLeft: "700px", marginTop: "10px" }}>CLASS</h6>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "500px",
          width: "1000px",
          marginTop: "30px",
          marginLeft: "260px",
        }}
      >
        <Table aria-label="simple table" stickyHeader sx={{ bgcolor: "black" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Course</TableCell>
              <TableCell align="center">Class</TableCell>
              <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ bgcolor: "white" }}>
            {courseClass.map((data, i) => {
                console.log(data)
              return (
                <TableRow
                  sx={{ "&: last-child td, &: last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{data.className}</TableCell>
                  <TableCell align="center">{data.course}</TableCell>
                  <TableCell align="center">{new Date(data.date).toDateString()}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
