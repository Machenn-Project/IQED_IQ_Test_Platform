import {
  Box,
  Typography,
  Avatar,
  LinearProgress,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import SideBarHeader from "../components/SideBarHeader";
import { Coin, FireIcon, RankIcon } from "../assets";
import { LevelTagCard, StatsCard } from ".";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const SidebarContent = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        width: "100%",
        padding: "16px",
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        boxSizing: "border-box",
        bgcolor: isSm?'#EEF7FF':"white",
        justifyContent: "space-between",
      }}
    >
      <SideBarHeader />
      <Divider
            sx={{
              width: "100%",
              borderBottomWidth: 2,
            }}
          />
      {!isSm ? <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* <Divider
            sx={{
              width: "100%",
              borderBottomWidth: 2,
            }}
          /> */}

          <Box sx={{ display: "flex", gap: "4px" }}>
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
              (day, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="caption" pb={"10px"}>
                    {day}
                  </Typography>
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
                      bgcolor: "#ddd",
                    }}
                  >
                    {index === 0 || index === 1 || index === 4|| index === 5|| index === 6 ? null : (
                      <img
                        src={FireIcon}
                        alt="Fire Icon"
                        width={30}
                        height={30}
                      />
                    )}
                  </Box>
                </Box>
              )
            )}
          </Box>
          <Divider
            sx={{
              width: "100%",
              borderBottomWidth: 2,
            }}
          />
        </Box>
       

      {/* Stats Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          boxSizing: "border-box",
          p: "15px",
        }}
      >
        <StatsCard title={"IQ Gems"} CoinCount={0} icon={Coin} />
        <StatsCard title={"Rank"} CoinCount={1} icon={RankIcon} />
        <LevelTagCard
          Level={1}
          goal={20}
          progress={1}
          title={"1%"}
          icon={<WorkspacePremiumIcon />}
        />
      </Box>
      {/* Action Button Placeholder */}
      <Box
        sx={{
          height: "300px",
          width: "100%",
          borderRadius: "8px",
          bgcolor: "#1976d2",
        }}
      ></Box>
      </>: null}
    </Box>
  );
};

export default SidebarContent;
