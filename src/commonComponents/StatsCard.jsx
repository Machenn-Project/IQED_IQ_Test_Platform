import { Avatar, Box, Card, LinearProgress, Typography } from "@mui/material";
import React from "react";

const StatsCard = ({ icon, title, CoinCount,}) => {
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
      <Box
          component="span"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            // marginRight: "8px"
          }}
        >
          <img src={icon} alt={title} width={50} height={50} />
        </Box>
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" fontWeight="900" sx={{
            color:'#02216F'
          }}>
            {CoinCount}
          </Typography>
          <Typography variant="body1" fontWeight="bold" sx={{
            color:'#02216F'
          }}>
          {title}
          </Typography>
        </Box>
        
        
      </Box>
    </Card>
  );
};

export default StatsCard;
