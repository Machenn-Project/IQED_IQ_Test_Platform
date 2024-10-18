// BottomCardArea.js
import React from "react";
import { Box } from "@mui/material";
import { ContestCard } from "../commonComponents"; // Adjust the import path as needed

const ContestCardArea = ({ contestData }) => {
  return (
    <Box
      sx={{
        p: { xs: "10px", sm: null },
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        gap: "20px",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      {contestData.map((contest, index) => (
        <ContestCard
          key={index}
          Title={contest.Title}
          image={contest.image}
          listItems={contest.listItems}
        />
      ))}
    </Box>
  );
};

export default ContestCardArea;
