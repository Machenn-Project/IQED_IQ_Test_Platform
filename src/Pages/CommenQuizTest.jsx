import { Box } from '@mui/material'
import React from 'react'
import { YellowBg } from '../assets/Bg'
import { QuizPage } from '../commonComponents'
import { getRandomQuestions } from '../utils/Randam'
import { useLocation } from "react-router-dom";
import { DATA } from '../utils/schema'

const CommenQuizTest = () => {
  const location = useLocation();
  const {stepIndex,Level} = location.state; 
  console.log(stepIndex);
  const quizData= getRandomQuestions(DATA[stepIndex],20);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <QuizPage quizData={quizData} isGeneral = {false} Level={Level}  />
    </Box>
  )
}

export default CommenQuizTest