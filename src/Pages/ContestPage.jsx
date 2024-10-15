import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { MainNavBar, ContestCard } from "../commonComponents";
import { BreadcrumbsNav } from "../commonComponents";
import { SidebarContent } from "../components";
import { trophy,Vs } from "../assets";

const Contest = [
  {
    Title: 'Mixed Questions',
    listItems: [
      "There are 30 multiple choice questions.",
      "Approximate test time: Fifteen minutes.",
      "The questions are of varying difficulty.",
      "All questions are worth the same points."
    ],
    image: Vs
  },
  {
    Title: 'Mixed Questions',
    listItems: [
      "There are 30 multiple choice questions.",
      "Approximate test time: Fifteen minutes.",
      "The questions are of varying difficulty.",
      "All questions are worth the same points."
    ],
    image: Vs
  },
];
const ExplorePage = () => {
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
        <MainNavBar selectedPage="Contest" />

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
            <Typography
              variant={isSm ? "h6" : "h4"}
              sx={{
                color: "White",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              welcome tO The contest
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "White",
                fontWeight: 400,
              }}
            >
              Challenge yourself and your friends with AI-generated questions to
              boost your knowledge! {isSm ? null : <br />}
              Compete for the top spot and see who comes out on top
            </Typography>
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
            {/* <Grid container spacing={2}> */}
            {Contest.map((ContestData, index) => (
              // <Grid item xs={12} sm={6} md={4} lg={12} key={index}>
              <ContestCard
                Title={ContestData.Title}
                image={ContestData.image}
                listItems={ContestData.listItems}
              />
              // </Grid>
            ))}
            {/* </Grid> */}
          </Box>
        </Box>
      </Box>
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
      {/* {isSm ? (
        <Box sx={{ width: "100%", height: "60px" }}>
          <SidebarContent />
        </Box>
      ) : null} */}
    </Box>
  );
};

export default ExplorePage;
