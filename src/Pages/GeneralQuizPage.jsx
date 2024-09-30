import { Box } from '@mui/material'
import React from 'react'
import { YellowBg } from '../assets/Bg'
import { QuizPage } from '../commonComponents'

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
      <QuizPage/>
      
    </Box>
  )
}

export default GeneralQuizPage