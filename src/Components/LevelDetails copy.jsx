import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Custom Title Component
const DynamicTitle = ({ title }) => (
  <Typography
    sx={{
      display: "inline-block",
      backgroundColor: "#FFD700",
      padding: "0.5rem 1rem",
      borderRadius: "8px",
      color: "#02216F",
      fontWeight: "bold",
      fontSize: "1.2rem",
      boxShadow: "2px 2px #02216F",
    }}
  >
    {title}
  </Typography>
);

// Custom Step Circle with Number
const StepCircle = styled("div")(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#FFF",
  border: "2px solid #02216F",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "1.2rem",
  color: "#02216F",
  boxShadow: "2px 2px #02216F",
}));

// Custom Connector (for curved lines without arrow)
const CustomConnector = ({ start, end }) => (
  <svg height="50" width="200">
    <path
      d={`M ${start.x} ${start.y} C 100 ${start.y}, 100 ${end.y}, ${end.x} ${end.y}`}
      stroke="#02216F"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

// Helper function to split the steps into chunks
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

// Example Data
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
  {
    title: "Speed Maths",
    steps: [
      { label: "Consecutive add 10 numbers", number: 1 },
      { label: "Addition in split method", number: 2 },
      { label: "Addition completing whole method", number: 3 },
      { label: "Addition left to right", number: 4 },
      { label: "Addition in list of numbers", number: 5 },
      { label: "Table rote learning", number: 6 },
      { label: "Single digit multiplication", number: 7 },
      { label: "259x39x a number", number: 8 },
      { label: "Subtraction general", number: 9 },
    ],
  },
];

const LevelDetails = () => {
  return (
    <Box p={4}>
      {DaTa.map((section, index) => (
        <Box key={index} mb={6}>
          <DynamicTitle title={section.title} />
          {/* Split steps into chunks of 5 */}
          {chunkArray(section.steps, 5).map((stepsChunk, chunkIndex) => (
            <Box
              key={chunkIndex}
              sx={{ display: "flex", alignItems: "center", mt: 3, mb: 3 }}
            >
              {/* Check if it's an even line (0-based, so 0 is the first line) */}
              {(chunkIndex % 2 === 1
                ? [...stepsChunk].reverse() // Reverse order for even lines
                : stepsChunk // Normal order for odd lines
              ).map((step, stepIndex) => (
                <React.Fragment key={stepIndex}>
                  {/* Step Circle */}
                  <Box sx={{ textAlign: "center", mx: 2 }}>
                    <StepCircle>{step.number}</StepCircle>
                    <Typography
                      sx={{ fontSize: "0.8rem", color: "#02216F", mt: 1 }}
                    >
                      {step.label}
                    </Typography>
                  </Box>
                  {/* Custom Curved Connector (Except Last Step) */}
                  {stepIndex < stepsChunk.length - 1 && (
                    <CustomConnector
                      start={{ x: 40, y: 20 }}
                      end={{ x: 160, y: 20 }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default LevelDetails;
