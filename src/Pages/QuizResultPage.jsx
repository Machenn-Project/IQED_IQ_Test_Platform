import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Zoom,
  Stack,
  ButtonBase,
  IconButton,
  Divider,
} from "@mui/material";
import { SuccessMan } from "../assets";
import { ResultCard } from "../components";

const QuizResultPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <ResultCard/>
    </Box>  
  );
};

export default QuizResultPage;

