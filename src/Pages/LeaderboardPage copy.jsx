import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState, useMemo } from "react";
import { MainNavBar, SidebarContent } from "../commonComponents";
import PersonIcon from "@mui/icons-material/Person";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from '@mui/icons-material/Search';
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
const leaderboardData = [
  { name: "Alice", XP: 10, Streak: 20, CurrentLevel: 17 },
  { name: "Bob", XP: 5, Streak: 20, CurrentLevel: 17 },
  { name: "Charlie", XP: 8, Streak: 20, CurrentLevel: 17 },
  { name: "Dave", XP: 10, Streak: 20, CurrentLevel: 17 },
  { name: "Eve", XP: 12, Streak: 20, CurrentLevel: 17 },
  { name: "Alice", XP: 10, Streak: 20, CurrentLevel: 17 },
  { name: "Bob", XP: 5, Streak: 20, CurrentLevel: 17 },
  { name: "Charlie", XP: 8, Streak: 20, CurrentLevel: 17 },
  { name: "Dave", XP: 10, Streak: 20, CurrentLevel: 17 },
  { name: "Eve", XP: 12, Streak: 20, CurrentLevel: 17 },
  { name: "Alice", XP: 10, Streak: 20, CurrentLevel: 17 },
  { name: "Bob", XP: 5, Streak: 20, CurrentLevel: 17 },
  { name: "Charlie", XP: 8, Streak: 20, CurrentLevel: 17 },
  { name: "Dave", XP: 10, Streak: 20, CurrentLevel: 17 },
  { name: "Eve", XP: 12, Streak: 20, CurrentLevel: 17 },
  { name: "Alice", XP: 10, Streak: 20, CurrentLevel: 17 },
  { name: "Bob", XP: 5, Streak: 20, CurrentLevel: 17 },
  { name: "Charlie", XP: 8, Streak: 20, CurrentLevel: 17 },
  { name: "Dave", XP: 10, Streak: 20, CurrentLevel: 17 },
  { name: "Eve", XP: 12, Streak: 20, CurrentLevel: 17 },
];

// Reusable Header Component
const LeaderboardHeader = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      minWidth: "700px", // Force minimum width for horizontal scroll
      bgcolor: "#1A49BA",
      p: "20px",
      pr: "40px",
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center",
      clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0 100%)",
      gap: "20px",
    }}
  >
    {[
      { label: "RANKING", icon: <EmojiEventsIcon sx={{ color: "#FFD700" }} /> },
      { label: "Player", icon: <PersonIcon /> },
      { label: "XP", icon: <MilitaryTechIcon /> },
      { label: "Streak", icon: <LocalFireDepartmentIcon /> },
      { label: "Current Level", icon: <TrendingUpIcon /> },
    ].map((item, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        {item.icon}
        <Typography sx={{ fontWeight: "bold" }}>{item.label}</Typography>
      </Box>
    ))}
  </Box>
);

// Reusable Row Component
const LeaderboardRow = ({ player, index }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      minWidth: "700px", // Match minimum width for horizontal scroll
      bgcolor: index % 2 === 0 ? "#E6EAF8" : "#FBE1FF",
      p: "10px",
      pr: "40px",
      borderRadius: "8px",
      textAlign: "center",
      clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0 100%)",
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
);

const LeaderboardPage = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const [searchQuery, setSearchQuery] = useState("");

  // Memoize sorting and filtering logic
  const filteredLeaderboardData = useMemo(() => {
    return leaderboardData
      .sort((a, b) => b.XP - a.XP)
      .map((player, index) => ({ ...player, rank: index + 1 }))
      .filter((player) =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [searchQuery]);

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
        <MainNavBar selectedPage="Leaderboard" />

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            p:'5px',
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
            <Typography
              variant="h4"
              sx={{
                color: "#02216F",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: isSm ? "1.5rem" : "2rem",
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
                width: isSm ? "90%" : "50%",
                padding: "5px 10px",
                border: "2px solid",
                borderColor: "#02216F",
              }}
            >
               <SearchIcon sx={{ color: "#02216F", marginX: "8px" }} />
              <input
                placeholder="Search Profile"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

          {/* Leaderboard Table with Horizontal Scrolling */}
          <Box
            sx={{
              p: isSm ? "10px" : null,
              overflowX: "auto", // Enable horizontal scrolling
              overflowY: "auto",
              whiteSpace: "nowrap",
              display: "flex",
              flexDirection: "column",
              border: "2px solid",
              borderColor: "#02216F",
              p: "20px",
              flexGrow: 1,
              borderRadius: "10px",
              gap: "20px",
              bgcolor:'#F6FBFF',
              boxShadow:'3px 4px #02216F',
              scrollbarWidth: "none", // For Firefox
              "&::-webkit-scrollbar": {
                display: "none", // For Chrome, Safari, and Edge
              },
              "&::-webkit-scrollbar": {
                height: "8px",
                backgroundColor: "#f5f5f5",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ccc",
                borderRadius: "10px",
              },
            }}
          >
            {/* Leaderboard Table Header */}
            <LeaderboardHeader />

            {/* Leaderboard Data Rows */}
            {filteredLeaderboardData.length > 0 ? (
              filteredLeaderboardData.map((player, index) => (
                <LeaderboardRow key={index} player={player} index={index} />
              ))
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                  mt: 2,
                  color: "#1A49BA",
                  fontWeight: "bold",
                }}
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
