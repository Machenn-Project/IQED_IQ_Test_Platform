import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { MainNavBar, ContestCard } from "../commonComponents";
import { BreadcrumbsNav } from "../commonComponents";
import { DandFQuests, ProfileCard, SidebarContent, TotalQuests } from "../components";
import { trophy,Vs } from "../assets";

const ProfilePage = () => {
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
        <MainNavBar selectedPage="Profile" />

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            ml: isSm ? null : "10px",
            mr: isSm ? null : "20px",
            mt: isSm ? null : "10px",
            mb: isSm ? "50px" : "10px",
            
            gap: "20px",
            overflow: "hidden",
            // border:isSm?null:'3px solid',  
            borderRadius:'10px',
            // borderColor:'#02216F',
            // boxShadow: isSm?null:"3px 5px #02216F",
          }}
        >
          {/* Breadcrumb */}
          {/* <BreadcrumbsNav paths={breadcrumbPath} /> */}
          <Box
            sx={{
              // p: isSm ? "10px" : null,
              p:"10px",
              pt:'70px',
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
            <ProfileCard/>
            <TotalQuests />
          </Box>
        </Box>
      </Box>
      
      {/* {isSm ? (
        <Box sx={{ width: "100%", height: "60px" }}>
          <SidebarContent />
        </Box>
      ) : null} */}
    </Box>
  );
};

export default ProfilePage;
