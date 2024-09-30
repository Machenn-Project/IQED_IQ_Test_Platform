import {
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { quizData } from "../utils/schema";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

// Circular Timer Component
const CircularTimer = ({ timeLeft, totalTime }) => {
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "150px",
        height: "150px",
      }}
    >
      {/* Circular Progress */}
      <CircularProgress
        variant="determinate"
        value={progress}
        sx={{
          color: "#FFDA55", // Set the progress color to yellow
          position: "absolute",
          top: 0,
          left: 0,
          width: "100% !important", // Ensure it's full size
          height: "100% !important",
        }}
        thickness={1.5}
        size={150}
      />
      {/* Timer Text in the center of the circle */}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        {/* Time Left */}
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
          {Math.floor(timeLeft / 60)
            .toString()
            .padStart(2, "0")}
          :{(timeLeft % 60).toString().padStart(2, "0")}
        </Typography>
        {/* Total Time (Static) */}
        <Typography variant="body2" sx={{ color: "white", mt: 1 }}>
          {`${Math.floor(totalTime / 60)}:00 Total`}
        </Typography>
      </Box>
    </Box>
  );
};

const Item = ({ children, isSelected, onClick }) => {
  return (
    <Paper
      elevation={3}
      onClick={onClick}
      sx={{
        bgcolor: isSelected ? "#BFFFE2" : "#FFDA55",
        color: "#02216F",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: "600",
        height: "80px",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "3px 4px #02216F",
          border: "1px solid",
          borderColor: "#02216F",
        },
      }}
    >
      {children}
    </Paper>
  );
};

const QuizPage = () => {
  const totalTime = quizData.length * 60; // Total time based on the number of questions (60s per question)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Track answers
  const [userAnswers, setUserAnswers] = useState([]); // Track user answers
  const [quizCompleted, setQuizCompleted] = useState(false); // Track if quiz is completed
  const navigate = useNavigate();
  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0 && !quizCompleted) return prevTime - 1;
        if (prevTime === 0) handleTimeUp(); // Call function to handle time up logic
        clearInterval(timer);
        return prevTime;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [quizCompleted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  const handleOptionSelect = (option) => {
    const currentQuestion = quizData[currentQuestionIndex];
    const newAnswers = [...userAnswers];
    const previousAnswer = newAnswers[currentQuestionIndex]; // Get the previous answer for this question
    newAnswers[currentQuestionIndex] = option;
    setUserAnswers(newAnswers);

    // Adjust score based on the previous and new answers
    if (previousAnswer !== option) {
      if (previousAnswer === currentQuestion.correctAnswer) {
        // Deduct score if previous answer was correct and user changed it to wrong
        setScore((prevScore) => prevScore - 1);
      }
      if (option === currentQuestion.correctAnswer) {
        // Increment score if new answer is correct
        setScore((prevScore) => prevScore + 1);
      }
    }

    // Mark the current question as answered
    setAnsweredQuestions((prevAnswered) => [
      ...new Set([...prevAnswered, currentQuestionIndex]),
    ]);

    // Move to next question
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleTimeUp = () => {
    setQuizCompleted(true);
    alert("Time's up! The quiz has ended.");
    console.log(`Quiz Ended! Your score: ${score}/${quizData.length}`);
  };

  const handleSubmit = () => {
    setQuizCompleted(true);
    navigate("/gq-success", { replace: true });
    console.log(`Quiz Completed! Your score: ${score}/${quizData.length}`);
  };

  const handleQuizListClick = (index) => {
    setCurrentQuestionIndex(index);
    setSelectedOption(userAnswers[index] || null); // Show the previously selected option
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <Box
      sx={{
        width: { xs: "calc(100vw - 30px)", md: "calc(100vw - 80px)" },
        height: { xs: "calc(100vh - 30px)", md: "calc(100vh - 80px)" },
        padding: "10px",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ height: "100%" }}
      >
        {/* Side Panel */}
        <Stack
          sx={{
            width: { xs: "100%", md: "25%" },
            bgcolor: "#02216F",
            height: "100%",
            borderRadius: "20px",
            boxShadow: "5px 6px #02216F",
            border: "1px solid",
            borderColor: "#FFDA55",
            overflow: "hidden",
          }}
        >
          {/* Timer */}
          <Box
            sx={{
              bgcolor: "#02216F",
              height: "40%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px 20px 0 0",
              color: "white",
              padding: "20px",
            }}
          >
            <Typography variant="h5">Timer</Typography>

            {/* Circular Timer Component */}
            <CircularTimer timeLeft={timeLeft} totalTime={totalTime} />
          </Box>

          {/* Quiz List */}
          <Box
            sx={{
              bgcolor: "white",
              height: "60%",
              borderRadius: "0 0 20px 20px",
              overflowY: "auto",
            }}
          >
            <List
              sx={{
                m: "5%",
                cursor: "pointer",
              }}
            >
              {quizData.map((quiz, index) => (
                <ListItem
                  key={index}
                  sx={{
                    bgcolor: answeredQuestions.includes(index)
                      ? "#BFFFE2"
                      : index === currentQuestionIndex
                      ? "#FFEDAC"
                      : "#c5c5c5",
                    border: answeredQuestions.includes(index)
                      ? "1px solid #1DC77B"
                      : index === currentQuestionIndex
                      ? "1px solid #FFDA55"
                      : "",
                    borderRadius: "10px",
                    mt: "2%",
                    "&:hover": {
                      bgcolor:
                        index === currentQuestionIndex ? "#FFEDAC" : "#e0e0e0",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleQuizListClick(index)} // Allow navigation by clicking on the quiz item
                >
                  <ListItemText
                    primary={
                      <Typography variant="body1" fontWeight="bold">
                        {`Quiz ${index + 1}`}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" fontWeight="400">
                        {quiz.question}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>

        {/* Quiz Area */}
        <Box
          sx={{
            width: { xs: "100%", md: "75%" },
            bgcolor: "white",
            height: "100%",
            borderRadius: "20px",
            boxShadow: "5px 6px #02216F",
            border: "1px solid",
            borderColor: "#02216F",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "98%", height: "98%" }}>
            <Box
              sx={{
                m: "10px",
                display: "flex",
                justifyContent: "space-between",
                height: "5%",
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: "600", color: "#02216F" }}
              >
                Quiz {currentQuestionIndex + 1} of {quizData.length}
              </Typography>
              <Typography
                align="center"
                sx={{
                  bgcolor: "#F7DE83",
                  px: "15px",
                  py: "5px",
                  color: "#02216F",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  textAlign:'center',
                  alignItems:'center'
                }}
              >
                Nice!! You are faster than Bolt..
              </Typography>

              <Stack direction={"row"} spacing={2}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#ffff",
                    color: "#02216F",
                    boxShadow: "2px 3px #02216F",
                    borderRadius: {
                      xs: "5px",
                      sm: "5px",
                      md: "10px",
                      lg: "10px",
                    },
                    textTransform: "none",
                    border: "1px solid",
                    borderColor: "#02216F",
                    "&:hover": {
                      color: "#ffff",
                      backgroundColor: "#02216F",
                      transition: "transform 0.3s ease-in-out",
                      transform: "translateY(-5px)",
                      boxShadow: "2px 3px #ffff",
                    },
                  }}
                >
                  Submit
                </Button>

                <IconButton aria-label="Exit" sx={{ color: "#02216F" }}>
                  <CancelIcon />
                </IconButton>
              </Stack>
            </Box>

            <Divider sx={{ bgcolor: "#FFDA55", mb: "3%", height: "2px" }} />

            <Stack sx={{ alignItems: "center", width: "100%", height: "85%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#1A49BA",
                  color: "white",
                  width: "98%",
                  height: "75%",
                  borderRadius: "4px",
                }}
              >
                <Typography variant="h6" fontWeight={"600"}>
                  {currentQuestion.question}
                </Typography>
              </Box>
              <Box sx={{ width: "98%", mt: "10px" }}>
                <Grid container rowSpacing={1} columnSpacing={1}>
                  {currentQuestion.options.map((option, index) => (
                    <Grid item xs={6} key={index}>
                      <Item
                        onClick={() => handleOptionSelect(option)}
                        isSelected={selectedOption === option}
                      >
                        {option}
                      </Item>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default QuizPage;
