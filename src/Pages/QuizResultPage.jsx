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

import { ResultCard } from "../components";
import { useLocation } from "react-router-dom";
const QuizResultPage = () => {
  const location = useLocation();
  const {quizData, userAnswers, totalTimeTaken, Score,Level} = location.state; 
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
      <ResultCard Score={Score} quizData={quizData} totalTimeTaken={totalTimeTaken} userAnswers={userAnswers} Level={Level} />
    </Box>  
  );
};

export default QuizResultPage;

