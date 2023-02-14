import React, { useDebugValue, useEffect, useState } from "react";
import { Axios } from "../../axiosInstance";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Button } from "react-bootstrap";
import '../../styles/adminLogin.css'

export const ClientDashboard = () => {
  const { state } = useLocation();
  console.log(state);
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    try {
      console.log("inside");
      Axios.get(`/client/getClientDetails/${state}`).then((response) => {
        setUserDetails(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(userDetails);
  const handleBook = (Id) => {  
    try{
        Axios.patch(`/client/bookClass/${state}`,{Id}).then((response) => {
            console.log(response.data)
        })
    }catch(error){
        console.log(error)
    }
  }
  return (
    <>
      <h6 style={{ marginLeft: "700px", marginTop: "10px" }}>
        {userDetails.course}
      </h6>
      <Grid container spacing={4} marginX={10}>
   

      {userDetails.class?.map((val, i) => (
        <Grid item xs={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202009/e-learning_digital_education-1200x1080.jpg?XjMNHsb4gLoU_cC7110HB7jVghJQROOj"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {val.className}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {new Date(val.date).toDateString()}
            </Typography>
          </CardContent>
          <CardActions>
            <button  className="login_btn" onClick={() => handleBook(val._id)} >Book</button>
          </CardActions>
        </Card>
        </Grid>
      ))}
      </Grid>
    </>
  );
};
