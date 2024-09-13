import { Box } from '@mui/material'
import React from 'react'
import { YellowBg } from '../assets/Bg'
import { QuizPage } from '../commonComponents'

const GeneralQuizPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${YellowBg})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <QuizPage/>
      
    </Box>
  )
}

export default GeneralQuizPage