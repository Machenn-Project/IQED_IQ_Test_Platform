import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import MainNavBar from "../commonComponents/MainNavBar"; // Make sure the import path is correct
import { CompetitiveExam, DandFQuests } from "../components";
import { SidebarContent } from "../commonComponents";
import { useSelector } from "react-redux";

const ExplorePage = () => {
  const UserData = useSelector((state) => state.UserState);
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(UserData,"dfff");
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
        <MainNavBar selectedPage="Explore" />

        {/* Scrollable content area */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            ml: isSm ? "10px" : null,
            mr: isSm ? "10px" : null,
            mt: isSm ? "10px" : "20px",
            mb: isSm ? "50px" : "20px",
            gap: "20px",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
        >
          {/* Competitive exam and quests sections */}
          <CompetitiveExam />
          <DandFQuests />
        </Box>
      </Box>

      {/* Sidebar or additional content */}
      <Box
        sx={{
          // bgcolor: "red",
          width: isSm ? "100%" : "400px",
          height: isSm ? "60px" : "auto",
          boxShadow: isSm ? null : "0 0 5px 6px #9C9999", 
        }}
      >
        <SidebarContent/>
      </Box>
    </Box>
  );
};

export default ExplorePage;
