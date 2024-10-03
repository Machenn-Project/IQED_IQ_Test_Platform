import { Box } from '@mui/material'
import React from 'react'
import { YellowBg } from '../assets/Bg'
import { QuizPage } from '../commonComponents'
import { quizData } from '../utils/schema'

const GeneralQuizPage = () => {
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
      <QuizPage quizData={quizData}/>
    </Box>
  )
}

export default GeneralQuizPage