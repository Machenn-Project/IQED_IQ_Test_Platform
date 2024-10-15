import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { MainNavBar, ContestCard } from "../commonComponents";
import { BreadcrumbsNav } from "../commonComponents";
import { SidebarContent } from "../components";
import { trophy,Vs } from "../assets";

const LeaderboardPage = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: isSm ? "column-reverse" : "row",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          p: isSm ? "0px" : "16px",
          flexGrow: 1,
          width: "100%",
          height: isSm ? "calc(90% - 60px)" : "100%",
          display: "flex",
          flexDirection: isSm ? "column-reverse" : "row",
          boxSizing: "border-box",
          gap: isSm ? null : "20px",
        }}
      >
        {/* Main navigation */}
        <MainNavBar selectedPage="Leaderboard" />

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            ml: isSm ? "10px" : "10px",
            mr: isSm ? null : "20px",
            mt: isSm ? "10px" : "10px",
            mb: isSm ? "50px" : "10px",
            pr: isSm ? "10px" : null,
            gap: "20px",
            overflow: "hidden",
          }}
        >
          {/* Breadcrumb */}
          {/* <BreadcrumbsNav paths={breadcrumbPath} /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 0,
              gap: isSm ? "10px" : "20px",

              bgcolor: "#1A49BA",
              boxSizing: "border-box",
              p: "20px",
              borderRadius: "10px",
            }}
          >
            {/* serach bar and title */}
          </Box>
          <Box
            sx={{
              p: isSm ? "10px" : null,
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              gap: "20px",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              // bgcolor: "black",
            }}
          >
            {/* leader board cards  */}
          </Box>
        </Box>
      </Box>

      {isSm ? (
        <Box sx={{ width: "100%", height: "60px" }}>
          <SidebarContent />
        </Box>
      ) : null}
    </Box>
  );
};

export default LeaderboardPage;
