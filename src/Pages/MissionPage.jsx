import React, { useEffect, useState } from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { MainNavBar, Levelcard, SidebarContent } from "../commonComponents";
import { LevelDetails } from "../components";
import { BreadcrumbsNav } from "../commonComponents";
import { trophy } from "../assets";
import { useLocation, useNavigate } from "react-router-dom";

// Mock data for levels
const levels = [
  { level: 1, total: 10, progress: 5, image: trophy },
  { level: 2, total: 20, progress: 0, image: trophy },
  { level: 3, total: 10, progress: 2, image: trophy },
  { level: 4, total: 10, progress: 2, image: trophy },
  { level: 5, total: 10, progress: 2, image: trophy },
];

const MissionPage = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const { state } = location;
  const inLevel = state ? state.inLevel : undefined;
  const currentLevel = inLevel ? inLevel.level : undefined;
  const [selectedLevel, setSelectedLevel] = useState(currentLevel);

  // Update selected level based on URL parameter
  useEffect(() => {
    const levelFromUrl = new URLSearchParams(location.search).get("level");

    if (levelFromUrl) {
        const level = levels.find(l => l.level === parseInt(levelFromUrl, 10));
        if (level) {
            setSelectedLevel(level);
        } else {
            setSelectedLevel(null); // Reset if level not found
        }
    } else {
        setSelectedLevel(null); // Reset to null if no level in URL
    }
}, [location]); // Now listening to the entire location object


  // Breadcrumb paths
  const breadcrumbPath = selectedLevel
    ? [
        { label: "Levels", to: null, onClick: () => handleReturnToLevels() }, // Clickable to return to level cards
        { label: `Level - ${selectedLevel.level}`, to: null },
      ]
    : [{ label: "Levels", to: null }];

  // Handler to select a level
  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
    navigate(`/Missions?level=${level.level}`); // Update URL with selected level
};

  // Handler to return to levels
  const handleReturnToLevels = () => {
    setSelectedLevel(null);
    navigate("/Missions"); // Navigate back to levels
  };

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
        <MainNavBar selectedPage="Mission" />

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            ml: isSm ? "10px" : "20px",
            mr: isSm ? null : "20px",
            mt: isSm ? "10px" : "20px",
            mb: isSm ? "50px" : "20px",
            pr: isSm ? "10px" : null,
            gap: "20px",
            overflow: "hidden",
          }}
        >
          {/* Breadcrumb */}
          <BreadcrumbsNav paths={breadcrumbPath} />
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
            <Grid container spacing={2}>
              {!selectedLevel ? (
                levels.map((levelData, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                    <Levelcard
                      level={levelData.level}
                      progress={levelData.progress}
                      total={levelData.total}
                      image={levelData.image}
                      onSelect={() => handleSelectLevel(levelData)}
                    />
                  </Grid>
                ))
              ) : (
                <LevelDetails LevelData={selectedLevel.level} />
              )}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: isSm ? "100%" : "400px",
          height: isSm ? "60px" : "auto",
          boxShadow: isSm ? null : "0 0 5px 6px #9C9999",
        }}
      >
        <SidebarContent />
      </Box>
    </Box>
  );
};

export default MissionPage;
