import { Avatar, Box, Card, LinearProgress, Typography } from "@mui/material";
import React from "react";

const Levelcard = ({ icon, title, progress, goal,Level }) => {
  return (
    <Card
    variant="outlined"
    sx={{
      height:'50px',
      padding: 2,
      display: "flex",
      alignItems: "center",
      gap: 2,
      boxShadow: "2px 3px #02216F",
      borderRadius: "20px",
      border: "2px solid",
      borderColor: "#02216F",
    }}
    >
      <Avatar sx={{ backgroundColor: "#FF7324" }}>{icon}</Avatar>
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1" fontWeight="900">
            {title}
          </Typography>
          
        </Box>
       
          <LinearProgress
            variant="determinate"
            value={(progress / goal) * 100}
            sx={{
              height: 10,
              borderRadius: 10,
              marginY: 1,
              width: "100%",
               backgroundColor: "#02216F",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#FFDA55",
              },
            }}
          />
       
        <Typography variant="body2" color="textSecondary">
            Level - {Level}
          </Typography>
      </Box>
    </Card>
  );
};

export default Levelcard;
