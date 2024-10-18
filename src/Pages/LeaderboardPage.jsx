import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { MainNavBar, SidebarContent } from "../commonComponents";


const LeaderboardPage = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  // Sample data to populate the leaderboard
  const leaderboardData = [
    { name: "Alice", XP: 10, Streak: 20, CurrentLevel: 17 },
    { name: "Bob", XP: 5, Streak: 20, CurrentLevel: 17 },
    { name: "Charlie", XP: 8, Streak: 20, CurrentLevel: 17 },
    { name: "Dave", XP: 10, Streak: 20, CurrentLevel: 17 },
    { name: "Eve", XP: 12, Streak: 20, CurrentLevel: 17 },
  ];

  // State to store the search input
  const [searchQuery, setSearchQuery] = useState("");

  // Sort leaderboard data based on XP in descending order
  const sortedLeaderboardData = leaderboardData
    .sort((a, b) => b.XP - a.XP)
    .map((player, index) => ({ ...player, rank: index + 1 }));

  // Filter leaderboard data based on the search query
  const filteredLeaderboardData = sortedLeaderboardData.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          {/* Leaderboard Header */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", 
              justifyContent: "center",
              gap: "20px",
              boxSizing: "border-box",
              p: "20px",
              borderRadius: "10px",
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                color: "#02216F",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              LEADERBOARD
            </Typography>

            {/* Search Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: "25px",
                width: isSm ? "100%" : "50%",
                padding: "5px 10px",
                border: '2px solid',
                borderColor: '#02216F'
              }}
            >
              <input
                placeholder="Search Profile"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "8px",
                  fontSize: "16px",
                  color: "#B0B0B0",
                }}
              />
            </Box>
          </Box>
          <Divider sx={{ borderColor: "#FFDA55", borderBottomWidth: 2 }} />

          {/* Leaderboard Table Header */}
          
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              bgcolor: "#1A49BA",
              p: "10px",
              
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0 100%)"
            }}
          >
            <Typography sx={{ color: "#FFD700" }}>RANKING</Typography>
            <Typography>Player</Typography>
            <Typography>XP</Typography>
            <Typography>Streak</Typography>
            <Typography>Current Level</Typography>
          </Box>

          {/* Leaderboard Data Rows */}
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
            }}
          >
            {filteredLeaderboardData.length > 0 ? (
              filteredLeaderboardData.map((player, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    bgcolor: index % 2 === 0 ? "#E6EAF8" : "#F5F5F5",
                    p: "10px",
                    borderRadius: "8px",
                    textAlign: "center",
                    clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0 100%)"
                  }}
                >
                  <Typography sx={{ fontWeight: "bold", color: "#1A49BA" }}>
                    {String(player.rank).padStart(2, "0")}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", color: "#1A49BA" }}>
                    {player.name}
                  </Typography>
                  <Typography>{player.XP}</Typography>
                  <Typography>{player.Streak}</Typography>
                  <Typography>{player.CurrentLevel}</Typography>
                </Box>
              ))
            ) : (
              <Typography
                sx={{ textAlign: "center", mt: 2, color: "#1A49BA", fontWeight: "bold" }}
              >
                No players found
              </Typography>
            )}
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
