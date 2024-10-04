import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SuccessMan } from "../assets";
import { RewardCard } from "../commonComponents";
import {useNavigate } from "react-router-dom";
const ResultCard = ({quizData, userAnswers, totalTimeTaken, Score ,Level}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const inLevel=Level
  const navigate = useNavigate();
  const cardData = [
    { title: "Answered", leftText: `${Score}/${quizData.length}`, coinValue: `${Score*2}` },
    { title: "Time Taken", leftText: `${Math.floor(totalTimeTaken / 60)} : ${totalTimeTaken % 60}`, coinValue: `${Score*2}` },
    { title: "Total Coins Earned", coinValue: `${Score*4}` },
  ];
  const handleReview= () =>{
    navigate("/AnsKeyPage", {
      state: { quizData, userAnswers, Score }
    })
  }
  const handleDone= () =>{
    navigate("/Missions", {
      state: {inLevel}
    })
    console.log(inLevel)
  }
  
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
          m: isSm?'10px':"50px",
          p:'10px',
          boxSizing: "border-box",
          boxShadow: "5px 6px #02216F",
          border: "1px solid",
          borderColor: "#02216F",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            flexGrow: 0,
            p: "10px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "600", color: "#02216F" }}>
            Result
          </Typography>
        </Box>

        <Divider sx={{ bgcolor: "#FFDA55", height: "2px", width: "100%" }} />

        <Grid container spacing={2} sx={{ flexGrow: isSm ? 0 : 1, mt: 2 }}>
          {" "}
          {/* flexGrow pushes content below */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center", // Horizontally center the image
              alignItems: "center", // Vertically center the image
            }}
          >
            <Box
              component="img"
              src={SuccessMan}
              alt="Player image"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: isSm ? "250px" : "350px",
              }}
            />
          </Grid>
          {/* Right side result stats */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {cardData.map((card, index) => (
                <RewardCard
                  key={index}
                  title={card.title}
                  leftText={card.leftText}
                  coinValue={card.coinValue}
                />
              ))}
            </Box>
          </Grid>
        </Grid>

        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: isSm ? "16px" : "28px",
          }}
        >
          You beat 56% of total players, great job. Keep practicing.
        </Typography>

        <Box
          sx={{ display: "flex", gap: 4, mt: 2,mb:3, width: isSm ? null : "50%" }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleReview()}
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
            Review
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontWeight: "bold",
              backgroundColor: "#1A49BA",
              color: "#ffff",
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
            onClick={() => handleDone()}
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
    </Box>
  );
};

export default ResultCard;
