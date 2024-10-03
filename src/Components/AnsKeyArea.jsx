import {
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

// Item component to handle individual quiz option styles
const Item = ({ children, isCorrect, isSelected, isAnswer }) => {
  return (
    <Box
      sx={{
        bgcolor: isSelected
          ? isCorrect
            ? "#BFFFE2" // Correctly selected answer
            : "#FFD3D3" // Incorrectly selected answer
          : isAnswer && !isSelected
          ? "#BFFFE2" // Correct answer highlighting when the user is wrong
          : "white", // Default background color
        color: isSelected || isAnswer ? "#02216F" : "#6e6e6e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: "600",
        boxSizing: "border-box",
        p: "10px",
        border: "1px solid",
        borderRadius: "10px",
        borderColor: isSelected || isAnswer ? "#02216F" : "#e0e0e0",
      }}
    >
      {children}
    </Box>
  );
};

// Main Answer Key Area component
const AnsKeyArea = ({ quizData, userAnswers }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  // Define correctAnswers array from quizData
  const correctAnswers = quizData.map((quiz) => quiz.correctAnswer);

  // Count answered questions and correct answers
  const answeredQuestions = userAnswers.filter((ans) => ans !== undefined);
  const correctCount = userAnswers.filter(
    (ans, index) => ans === correctAnswers[index]
  ).length;

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "20px",
          m: isSm ? "10px" : "50px",
          boxSizing: "border-box",
          boxShadow: "5px 6px #02216F",
          border: "1px solid",
          borderColor: "#02216F",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            p: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              color: "#02216F",
              display: "flex",
              flexGrow: 1,
            }}
          >
            Answer Keys
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                fontWeight: "bold",
                backgroundColor: "#1A49BA",
                color: "#fff",
                boxShadow: "2px 3px #02216F",
                borderRadius: "10px",
                textTransform: "none",
                border: "1px solid",
                borderColor: "#fff",
                "&:hover": {
                  color: "#02216F",
                  backgroundColor: "#fff",
                  transition: "transform 0.3s ease-in-out",
                  transform: "translateY(-5px)",
                  boxShadow: "2px 3px #02216F",
                  borderColor: "#02216F",
                },
              }}
            >
              Retake
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{
                fontWeight: "bold",
                backgroundColor: "#FFDA55",
                color: "#02216F",
                boxShadow: "2px 3px #02216F",
                borderRadius: "10px",
                textTransform: "none",
                border: "1px solid",
                borderColor: "#02216F",
                "&:hover": {
                  backgroundColor: "#fff",
                  transition: "transform 0.3s ease-in-out",
                  transform: "translateY(-5px)",
                  boxShadow: "2px 3px #02216F",
                },
              }}
            >
              Done
            </Button>
          </Box>
        </Box>

        <Divider sx={{ bgcolor: "#FFDA55", height: "2px", width: "100%" }} />
        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
            p: "20px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflow: "hidden",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              flexGrow: 0,
              display: "flex",
              textAlign: "start",
              mt: "10px",
              mb: "20px",
              color: "black",
              fontWeight: "Bold",
            }}
          >
            You have answered {correctCount} out of {quizData.length} quizzes correctly.
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
              gap: "20px",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
            }}
          >
            {quizData.map((quiz, index) => {
              const isCorrect = userAnswers[index] === correctAnswers[index];

              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    mb: "20px",
                    p: "10px",
                    border: "2px solid",
                    borderColor: userAnswers[index] !== undefined
                      ? isCorrect
                        ? "#BFFFE2" // Correct answer border
                        : "#FFD3D3" // Incorrect answer border
                      : "#ADA3A3", // Not answered
                    borderRadius: "10px",
                    boxSizing: "border-box",
                    gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      boxSizing: "border-box",
                      p: "10px",
                      borderRadius: "10px",
                      bgcolor: userAnswers[index] !== undefined
                        ? isCorrect
                          ? "#BFFFE2" // Correctly answered background
                          : "#FFD3D3" // Incorrectly answered background
                        : "#ADA3A3", // Default background if not answered
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ mb: "5px", color: "#02216F", fontWeight: "bold" }}
                    >
                      {`Quiz ${index + 1}`}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mb: "10px", color: "black", fontWeight: "medium" }}
                    >
                      {quiz.question}
                    </Typography>
                  </Box>

                  <Grid container spacing={2}>
                    {quiz.options.map((option, i) => (
                      <Grid item xs={6} md={12} key={i}>
                        <Item
                          isSelected={userAnswers[index] === option} // Compare value directly
                          isCorrect={correctAnswers[index] === option} // Compare value directly
                          isAnswer={correctAnswers[index] === option && userAnswers[index] !== option}
                        >
                          {option}
                        </Item>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AnsKeyArea;
