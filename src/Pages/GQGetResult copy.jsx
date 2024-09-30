// GQSuccessPage.js
import React from "react";
import { Box, Typography, Button, Stack, Divider, IconButton } from "@mui/material";
import { HomeNav } from "../components";
import { Link } from "react-router-dom";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
const GQGetResult = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <HomeNav />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <IconButton>
        <ArrowCircleLeftIcon/>
        </IconButton>
        <Button
          component={Link}
          to="/Signup"
          fullWidth
          variant="contained"
          sx={{
            fontWeight: "bold",
            backgroundColor: "#fff",
            color: "#02216F",
            boxShadow: "2px 3px #02216F",
            borderRadius: { xs: "5px", sm: "5px", md: "8px", lg: "8px" },
            width: "50%",
            textTransform: "none",
            border: "1px solid",
            borderColor: "#02216F",
            "&:hover": {
              color: "#ffff",
              backgroundColor: "#02216F",
              transition: "transform 0.3s ease-in-out",
              transform: "translateY(-5px)",
              boxShadow: "2px 3px #ffff",
            },
          }}
        >
          SignUp
        </Button>
      </Box>
    </Box>
  );
};

export default GQGetResult;
