import { Box } from '@mui/material'
import React from 'react'

import { QuizPage } from '../commonComponents'

import { getRandomQuestions } from '../utils/Randam'
import { IQData } from '../utils/schema/QuizData'

const GeneralQuizPage = () => {

  const GeneralTestData= getRandomQuestions(IQData,5);
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
      <QuizPage quizData={GeneralTestData} isGeneral = {true}  />
    </Box>
  )
}

export default GeneralQuizPage