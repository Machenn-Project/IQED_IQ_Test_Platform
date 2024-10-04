import React from "react";
import {
  Box,
} from "@mui/material";

import { AnsKeyArea, } from "../components";
import { useLocation } from "react-router-dom";


const AnsKeyPage = () => {
  const location = useLocation();
  const { quizData, userAnswers, Score } = location.state; 

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
      <AnsKeyArea quizData={quizData} userAnswers={userAnswers}  Score={Score} />
    </Box>
  );
};

export default AnsKeyPage;

