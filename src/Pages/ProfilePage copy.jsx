import { Box, Typography, Grid, useMediaQuery, useTheme, Avatar } from "@mui/material";
import React, { useState } from "react";
import { MainNavBar, ContestCard } from "../commonComponents";
import { SidebarContent } from "../components";

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
              bgcolor: "#222",
              color: "#fff",
              boxSizing: "border-box",
              p: "20px",
              borderRadius: "10px",
            }}
          >

            {/* profile card */}

           
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Avatar
                  src="/path/to/avatar.jpg"
                  sx={{ width: 100, height: 100, border: "2px solid #ffffff" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  ALEX
                </Typography>
                <Typography variant="body2">Level 29</Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Box
                    sx={{
                      bgcolor: "#FFBF00",
                      width: "200px",
                      height: "8px",
                      borderRadius: "5px",
                      mr: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        bgcolor: "#FF4500",
                        borderRadius: "5px",
                        transform: "scaleX(0.9996)", // Represents 2999 / 3000 level progress
                      }}
                    />
                  </Box>
                  <Typography variant="body2">2999 / 3000</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">2573 XP</Typography>
              </Grid>
            </Grid>

            {/* Stats Section */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2">$567.14</Typography>
                  <Typography variant="caption">Total Bet</Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2">$10,561.14</Typography>
                  <Typography variant="caption">Deposited</Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2">1,546</Typography>
                  <Typography variant="caption">Rounds Won</Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2">$4,187.14</Typography>
                  <Typography variant="caption">Total Profit</Typography>
                </Box>
              </Grid>
            </Grid>
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
              bgcolor: "black",
            }}
          >
            {/* leader board cards  */}
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

export default ProfilePage;
