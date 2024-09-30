import { Box ,useMediaQuery,useTheme} from "@mui/material";
import React from "react";
import MainNavBar from "../commonComponents/MainNavBar"; // Make sure the import path is correct

const ExplorePage = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        p: isSm?" 0px":"16px",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: isSm ? "column-reverse" : "row",
        boxSizing: "border-box",
      }}
    >
      
      <MainNavBar selectedPage="Profile" />
      
      <Box
        sx={{
          bgcolor: 'black',
          flexGrow: 1,
        }}
      >
      </Box>
    </Box>
  );
};

export default ExplorePage;
