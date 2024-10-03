import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import MainNavBar from "../commonComponents/MainNavBar";
import { LevelDetails, SidebarContent } from "../components";
import { BreadcrumbsNav } from "../commonComponents";
import LevelCard from "../commonComponents/LevelCard";
import { trophy } from "../assets";

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

  // State to track the selected level
  const [selectedLevel, setSelectedLevel] = useState(null);

  // Breadcrumb paths
  const breadcrumbPath = selectedLevel
    ? [
        { label: "Levels", to: null, onClick: () => setSelectedLevel(null) }, // Clickable to return to level cards
        { label: `Level - ${selectedLevel.level}`, to: null },
      ]
    : [{ label: "Levels", to: null }];

  // Handler to select a level
  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
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
            {!selectedLevel ? (
              // Display Level Cards
              levels.map((levelData, index) => (
                <LevelCard
                  key={index}
                  level={levelData.level}
                  progress={levelData.progress}
                  total={levelData.total}
                  image={levelData.image}
                  onSelect={() => handleSelectLevel(levelData)} // Continue button triggers this
                />
              ))
            ) : (
              // Display Level Details once a level is selected
              <LevelDetails level={selectedLevel} />
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

export default MissionPage;
