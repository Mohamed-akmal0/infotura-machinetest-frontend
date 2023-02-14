import React, { useState, useEffect } from "react";
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

export const Client = () => {
  const [getClients, setGetClients] = useState([]);

  useEffect(() => {
    try {
      Axios.get("/admin/getApprovedClients").then((response) => {
        setGetClients(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h6 style={{ marginLeft: "700px", marginTop: "10px" }}>CLIENTS</h6>
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
              <TableCell align="center">email</TableCell>
              <TableCell align="center">Course</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ bgcolor: "white" }}>
            {getClients.map((data, i) => {
              return (
                <TableRow
                  sx={{ "&: last-child td, &: last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{data.email}</TableCell>
                  <TableCell align="center">{data.course}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
