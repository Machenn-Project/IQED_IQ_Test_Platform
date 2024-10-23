// ExplorePage.js
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { MainNavBar, SidebarContent } from "../commonComponents";
import { trophy, Vs } from "../assets";
import { ContestCardArea, DuelCardTopicsArea } from "../components";
import PeopleIcon from "@mui/icons-material/People";
const Contest = [
  {
    Title: "Mixed Questions",
    listItems: [
      "There are 30 multiple choice questions.",
      "Approximate test time: Fifteen minutes.",
      "The questions are of varying difficulty.",
      "All questions are worth the same points.",
    ],
    image: Vs,
  },
  {
    Title: "Mixed Questions",
    listItems: [
      "There are 30 multiple choice questions.",
      "Approximate test time: Fifteen minutes.",
      "The questions are of varying difficulty.",
      "All questions are worth the same points.",
    ],
    image: Vs,
  },
];

const ContestPage = () => {
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
        <MainNavBar selectedPage="1v1 Duel" />

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
              flexDirection: isSm ? "column" : "row",
              flexGrow: 0,
              gap: isSm ? "10px" : "20px",
              bgcolor: "#1A49BA",
              boxSizing: "border-box",
              p: "20px",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 0,
                gap: isSm ? "10px" : "20px",
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
                Welcome to the 1 vs 1 Duel Arena!
              </Typography>
              <Typography
                sx={{
                  fontSize: isSm?"10px":"12px",
                  color: "White",
                  fontWeight: 400,
                }}
              >
                Step into the arena and challenge your friends in a thrilling
                one-on-one quiz battle! {isSm ? null : <br />}
                Test your knowledge with AI-crafted questions, outsmart your
                opponent, and claim the crown as the ultimate quiz champion.
                It's time to see who really has what it takes!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent:'center',
                flexGrow: 1,
                bgcolor: "white",
                p: "10px",
                borderRadius: "10px",
                gap:'10px'
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  border: "2px solid",
                  borderColor: "#02216F",
                }}
              >
                <input
                  placeholder="Enter a join code"
                  value={''}
                  onChange={""}
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
                    color: "black",
                  }}
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                // startIcon={<PeopleIcon />}
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#1A49BA",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "Black",
                  },
                  boxShadow: "2px 3px #FFDA55",
                }}
              >
                Join
              </Button>
            </Box>
          </Box>

          {/* Bottom card area */}
          {/* <ContestCardArea contestData={Contest} />  */}
          <DuelCardTopicsArea contestData={Contest} />
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

export default ContestPage;
