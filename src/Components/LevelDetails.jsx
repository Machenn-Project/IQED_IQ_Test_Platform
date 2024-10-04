import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Box,
  StepConnector,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// Styled components (Same as your existing code)
const StepCircle = styled("div")(({ theme, completed }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: completed ? "#FFD700" : "#FFF", // Change background for completed steps
  border: "2px solid #02216F",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: "#02216F",
  boxShadow: "2px 2px #02216F",
  fontFamily: "Suranna",
  cursor:'pointer',
}));

const StepIconRoot = styled("div")(({ theme }) => ({
  display: "flex",
  height: 22,
  alignItems: "center",
}));

function StepIcon(props) {
  const { completed, icon } = props;
  return (
    <StepIconRoot>
      <StepCircle completed={completed}>{icon}</StepCircle>
    </StepIconRoot>
  );
}

StepIcon.propTypes = {
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

// Custom connector for updating the line color based on completion
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`& .MuiStepConnector-line`]: {
    borderColor: "#02216F", // Default color
    borderTopWidth: 3,
  },
  [`& .Mui-active .MuiStepConnector-line`]: {
    borderColor: "#FF5722", // Active step color
  },
  [`& .Mui-completed .MuiStepConnector-line`]: {
    borderColor: "yellow",
  },
}));

const DaTa = [
  {
    title: "Numbers",
    steps: [
      { label: "Number line", number: 1 },
      { label: "Types of numbers", number: 2 },
      { label: "Prime numbers", number: 3 },
      { label: "Tally system", number: 4 },
      { label: "Co-prime", number: 5 },
    ],
  },
];

export default function LevelDetails(Level) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set([]));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state;
    if (state) {
      const { passed, stepIndex } = state;
      if (passed) {
        setCompletedSteps((prev) => new Set(prev).add(stepIndex));
      }
    }
  }, [location.state]);

  const handleStepClick = (stepIndex) => {
    // Check if the previous step is completed before allowing selection
    const isPreviousStepCompleted =
      stepIndex === 0 || completedSteps.has(stepIndex - 1);

    if (isPreviousStepCompleted) {
      setActiveStep(stepIndex);
      navigate("/CommenQuizTest", { state: { stepIndex,Level } });
    }
  };

  return (
    <div>
      {DaTa.map((section, index) => (
        <Box key={index} p={4}>
          <Box
            sx={{
              textAlign: index % 2 === 0 ? "left" : "right",
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                display: "inline-block",
                backgroundColor: "#FFD700",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                color: "#02216F",
                fontWeight: "bold",
                fontSize: "1.5rem",
                boxShadow: "2px 2px #02216F",
                mb: 6,
              }}
            >
              {section.title}
            </Typography>
          </Box>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<CustomConnector />}
          >
            {section.steps.map((step) => (
              <Step
                key={step.label}
                completed={completedSteps.has(step.number - 1)} // Mark step as completed
              >
                <StepLabel
                  StepIconComponent={(props) => (
                    <StepIcon
                      {...props}
                      completed={completedSteps.has(step.number - 1)}
                    />
                  )}
                  icon={step.number}
                  onClick={() => handleStepClick(step.number - 1)}
                  
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#02216F",
                    }}
                  >
                    {step.label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      ))}
    </div>
  );
}
