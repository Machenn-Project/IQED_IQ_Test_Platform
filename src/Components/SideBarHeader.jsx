import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Avatar,
  Divider,
  useMediaQuery,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Coin, FireIcon, RankIcon } from "../assets";

const formatDate = (date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const SideBarHeader = () => {
  const theme = useTheme();
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null); // State to control the dropdown menu
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Logic for logout
    handleClose();
  };

  const handleAccountSettings = () => {
    // Logic for navigating to account settings
    handleClose();
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {!isSm ? (
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#003D73" }}>
            {formattedDate.split(",")[0]}
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", fontSize: "12px" }}>
            {formattedDate.split(",")[1] + "," + formattedDate.split(",")[2]}
          </Typography>
        </Box>
      ) : null}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FCEDC5",
          borderRadius: "20px",
          padding: "0 12px 0 0",
        }}
      >
        <Box
          component="span"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            marginRight: "8px",
          }}
        >
          <img src={FireIcon} alt="Fire Icon" width={30} height={30} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "16px" }}>
          50
        </Typography>
      </Box>

      {isSm ? (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FCEDC5",
              borderRadius: "20px",
              padding: "0 6px 0 0",
            }}
          >
            <Box
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                marginRight: "8px",
              }}
            >
              <img src={Coin} alt="Fire Icon" width={30} height={30} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "16px" }}>
              2500
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FCEDC5",
              borderRadius: "20px",
              padding: "0 6px 0 0",
            }}
          >
            <Box
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                marginRight: "8px",
                backgroundColor: "#FFDA55",
              }}
            >
              <img src={RankIcon} alt="Fire Icon" width={20} height={20} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "16px" }}>
              25
            </Typography>
          </Box>
        </>
      ) : null}

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NotificationsNoneIcon sx={{ color: "#02216F", marginRight: "16px" }} />
        <IconButton onClick={handleClick}>
          <Avatar alt="User" src={""} />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                border:'1px solid',
                borderColor:'#02216F',
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  border:'1px solid',
                  borderColor:'#02216F',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
        >
          <MenuItem onClick={handleAccountSettings}>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            Account Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default SideBarHeader;
