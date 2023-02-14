import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  Badge,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            Welcome  
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button sx={{ color: "white" }} onClick={() => navigate("/login")}>
              Logout
            </Button>
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" />
            </Badge>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
