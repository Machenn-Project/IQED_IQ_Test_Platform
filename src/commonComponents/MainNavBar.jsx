import React from "react";
import {
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ErrorIcon from '@mui/icons-material/Error';
import LogoIcon from "./LogoIcon";
import { cross_swords } from "../assets";
import { Icon, Logo } from ".";

const MainNavBar = ({ selectedPage }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate(); 


  
  const navItems = [
    { label: "Explore", icon: <ExtensionIcon />, path: "/Explore" },
    { label: "Mission", icon: <FlagCircleIcon />, path: "/Missions" },
    // { label: "1v1 Duel", icon: <Icon Icon={cross_swords} CusWidth={"24px"}/>, path: "/Contest" },
    { label: "1v1 Duel", icon: <SportsMmaIcon/>, path: "/Contest" },
    { label: "Leaderboard", icon: <LeaderboardIcon />, path: "/Leaderboard" },
    { label: "Profile", icon: <PersonIcon />, path: "/Profile" },
    ...(isSm ? [{ label: "FeedBack", icon: <ErrorIcon />, path: "/Support" },] : []),
  ];
  const bottomItems = [
    // { label: "Settings", icon: <SettingsIcon />, path: "/Settings" },
    { label: "FeedBack", icon: <ErrorIcon />, path: "/Support" },
  ];

  const renderButton = ({ label, icon, path, key }) => {
    const isSelected = selectedPage === label;

    return (
      <Button
        key={key}
        fullWidth={!isSm}
        startIcon={React.cloneElement(icon, {
          sx: {
            color: isSelected ? "white" : "#02216F",
            fontSize: "24px",
            
          },
        })}
        onClick={() => navigate(path)} // Navigate on button click
        sx={{
          justifyContent: isMd ? "center" : "flex-start",
          color: isSelected ? "white" : "#02216F",
          fontWeight: "bold",
          textTransform: "none",
          fontSize: "16px",
          boxSizing:'border-box',
          minWidth: '0',
          whiteSpace: "nowrap",
          alignItems:'center',
          boxShadow: isSelected ? "2px 3px #fff" : "",
          bgcolor: isSelected ? "#02216F" : "transparent",
          "& .MuiButton-icon": {
            m: isMd ? "0" : null,
          },
          "&:hover": {
            bgcolor: "#02216F",
            boxShadow: "2px 3px #fff",
            color: "white",
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          },
        }}
      >
        {!isMd && label}
      </Button>
    );
  };

  return (
    <Box
      sx={{
        bgcolor: "#FFDA55",
        width: isSm ? "100%" : isMd ? "80px" : "200px",
        height: isSm ? "50px" : "100%",
        boxSizing: "border-box",
        borderRadius: isSm ? "0" : isMd ? "10px" : "20px",
        boxShadow: isSm ? "null" : "5px 6px #02216F",
        p: isSm ? "10px" : isMd ? "10px" : "20px 10px 20px 20px",
        display: "flex",
        flexDirection: isSm ? "row" : "column",
        gap: isSm ? "null" : "20px",
        alignItems: isMd ? "center" : null,
        position:isSm?'fixed':null,
        bottom:isSm?0:null,
        zIndex:isSm?999:null,
      }}
    >
      {isSm ? null : isMd ? (
        <LogoIcon widthCus="50px" />
      ) : (
        <Logo widthCus="120px" />
      )}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: isSm ? "row" : "column",
          gap: "5px",
          justifyContent: isSm ? 'space-between' : null,
        }}
      >
        {navItems.map((item) => renderButton({ ...item, key: item.label }))}
      </Box>
      {isSm ? null : (
        <Box
          sx={{
            display: "flex",
            flexDirection: isSm ? "row" : "column",
            gap: "5px",
            flexGrow: 0,
          }}
        >
          {bottomItems.map((item) => renderButton({ ...item, key: item.label }))}
        </Box>
      )}
    </Box>
  );
};

export default MainNavBar;
