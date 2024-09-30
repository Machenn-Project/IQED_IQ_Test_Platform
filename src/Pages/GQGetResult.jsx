// GQSuccessPage.js
import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  TextField,
} from "@mui/material";
import { HomeNav } from "../components";
import { Link } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { withStyles } from "@mui/styles";

// Custom TextField styling
const CssTextField = withStyles({
  root: {
    "& label": {
      color: "#C6C6C6",
      fontWeight: "bold",
    },
    "& label.Mui-focused": {
      color: "#02216F",
      fontWeight: "bold",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#02216F",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#02216F",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#02216F",
      },
    },
  },
})(TextField);

const GQGetResult = () => {
  // Common styles
  const textFieldStyles = {
    borderRadius: 2,
    bgcolor: "#fff",
    fontWeight: "bold",
    color: "#02216F",
    boxShadow: "2px 3px #02216F",
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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
        <Box
          sx={{
            width: { sx: "30%", md: "30%" },
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton sx={{ color: "#02216F" }} component={Link} to="/gq-success">
              <ArrowCircleLeftIcon fontSize="inherit" />
            </IconButton>
            <Typography
              sx={{
                color: "#02216F",
                fontSize: { xs: "24px", md: "28px" },
                fontWeight: "bold",
              }}
            >
              Get result via Email:
            </Typography>
          </Stack>

          <CssTextField
            id="name-field"
            label="Name"
            variant="outlined"
            InputProps={{
              sx: {
                ...textFieldStyles,
              },
            }}
          />

          <CssTextField
            id="email-field"
            label="Email"
            variant="outlined"
            InputProps={{
              sx: {
                ...textFieldStyles,
                height: "6vh",
              },
            }}
          />

          <Button
            // component={Link}
            // to="/Signup"
            
            fullWidth
            variant="contained"
            sx={{
              fontWeight: "bold",
              backgroundColor: "#1A49BA",
              color: "#fff",
              boxShadow: "2px 3px #fff",
              borderRadius: { xs: "5px", md: "8px" },
              p: "10px",
              textTransform: "none",
              border: "1px solid #fff",
              "&:hover": {
                backgroundColor: "#02216F",
                transform: "translateY(-5px)",
                transition: "transform 0.3s ease-in-out",
                boxShadow: "2px 3px #fff",
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GQGetResult;
