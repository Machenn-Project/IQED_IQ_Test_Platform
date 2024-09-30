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
          :
          {(timeLeft % 60).toString().padStart(2, "0")}
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
  const [questionStartTime, setQuestionStartTime] = useState(Date.now()); // Track when the question starts
  const [showFasterThanBolt, setShowFasterThanBolt] = useState(false); // Show message when answered quickly
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

    // Calculate time spent on the current question
    const timeSpent = (Date.now() - questionStartTime) / 1000; // Convert to seconds
    if (timeSpent < 10) {
      setShowFasterThanBolt(true); // Show the message if answered quickly
    } else {
      setShowFasterThanBolt(false);
    }

    // Move to next question
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestionStartTime(Date.now()); // Reset the start time for the next question
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
    setQuestionStartTime(Date.now()); // Reset the start time for the clicked question
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
                    color: "#02216F",
                    fontWeight: "bold",
                    m: "5%",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => handleQuizListClick(index)}
                >
                  <ListItemText
                    primary={`Question ${index + 1}`}
                    sx={{
                      textAlign: "center",
                      fontWeight: index === currentQuestionIndex ? "bold" : "normal",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>

        {/* Main Panel */}
        <Box
          sx={{
            width: { xs: "100%", md: "75%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            bgcolor: "#FFDA55",
            borderRadius: "20px",
            boxShadow: "5px 6px #02216F",
            padding: "20px",
          }}
        >
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography variant="h6" color="#02216F">
                {currentQuestion.question}
              </Typography>
              <IconButton onClick={() => navigate("/iq-challenges")} color="error">
                <CancelIcon />
              </IconButton>
            </Stack>
            <Divider sx={{ borderBottomWidth: 5, borderColor: "#02216F" }} />
            <Grid container spacing={2} mt={2}>
              {currentQuestion.options.map((option, index) => (
                <Grid key={index} item xs={6}>
                  <Item
                    onClick={() => handleOptionSelect(option)}
                    isSelected={userAnswers[currentQuestionIndex] === option}
                  >
                    {option}
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>

          {showFasterThanBolt && (
            <Typography
              variant="h6"
              sx={{
                mt: 3,
                color: "#02216F",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Nice, you're faster than Bolt!
            </Typography>
          )}

          <Box>
            <Divider sx={{ borderBottomWidth: 5, borderColor: "#02216F" }} />

            <Stack direction="row" justifyContent="space-between" mt={2}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#02216F",
                  color: "white",
                  "&:hover": {
                    bgcolor: "#02184F",
                  },
                }}
                disabled={currentQuestionIndex === 0}
                onClick={() =>
                  setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
                }
              >
                Previous
              </Button>
              {currentQuestionIndex === quizData.length - 1 ? (
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#02216F",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#02184F",
                    },
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#02216F",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#02184F",
                    },
                  }}
                  disabled={!answeredQuestions.includes(currentQuestionIndex)}
                  onClick={() =>
                    setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
                  }
                >
                  Next
                </Button>
              )}
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default QuizPage;
