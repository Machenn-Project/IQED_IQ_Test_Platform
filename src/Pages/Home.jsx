import {
  Box,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button
} from "@mui/material";
import React from "react";
import { YellowBg } from "../assets/Bg";
import { HomeNav } from "../components";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${YellowBg})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "15vh",
        }}
      >
        <HomeNav />
      </Box>
      <Box
        sx={{
          width: "100vw",
          // backgroundColor: "black",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: "2vh",

          // justifyContent: "center",
        }}
      >
        <Typography
          align="center"
          sx={{
            bgcolor: "#F7DE83",
            px: "15px",
            py: "5px",
            color: "#02216F",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "20px",
          }}
        >
          General Test
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            px: "15px",
            py: "5px",
            color: "#02216F",
            fontSize: { xs: "40px", sm: "40px", md: "48px", lg: "60px" },
            fontWeight: "bold",
            borderRadius: "20px",
          }}
        >
          Welcome to the <br />
          <b>IQED</b> Challenge Platform.
        </Typography>
        <Box
          sx={{
            bgcolor: "#02216F",
            width: { xs: "80%", sm: "80%", md: "55%", lg: "55%" },
            height: "50%",
            borderRadius: "20px",
            m: "20px",
            p: { xs: "20px", sm: "1%", md: "2%", lg: "2%" },
          }}
        >
          <Typography
            sx={{
              color: "#ffff",
              fontSize: { xs: "18px", sm: "18px", md: "28px", lg: "28px" },
              fontWeight: "bold",
            }}
          >
            General test instructions:-
          </Typography>
          <Divider sx={{ bgcolor: "#FFDA55", mb: "3%" }} />
          <Box
            sx={{
              pl: { xs: "5%", sm: "5%", md: "10%", lg: "10%" },
              color: "#ffff",
            }}
          >
            <List sx={{ listStyleType: "disc",fontSize:'20px' }}>
              <ListItem sx={{ display: "list-item" }} disablePadding>
                <ListItemText
                  primary="There are 30 multiple choice questions."
                  primaryTypographyProps={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "20px",
                      lg: "20px",
                    },
                    fontWeight: "600",
                    pb: "2%",
                  }}
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }} disablePadding>
                <ListItemText
                  primary="Approximate test time: Ten to fifteen minutes."
                  primaryTypographyProps={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "20px",
                      lg: "20px",
                    },
                    fontWeight: "600",
                    pb: "2%",
                  }}
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }} disablePadding>
                <ListItemText
                  primary="The questions are of varying difficulty."
                  primaryTypographyProps={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "20px",
                      lg: "20px",
                    },
                    fontWeight: "600",
                    pb: "2%",
                  }}
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }} disablePadding>
                <ListItemText
                  primary="All questions are worth the same points."
                  primaryTypographyProps={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "20px",
                      lg: "20px",
                    },
                    fontWeight: "600",
                    pb: "2%",
                  }}
                />
              </ListItem>
            </List>
          </Box>
          <Box 
          sx={{
            display:'flex',
            justifyContent:'right',
            alignItems:'baseline',

          }}
          >
            <Button
              component={Link}
              to="/GeneralQuizPage"
              variant="contained"
              sx={{
                m: {xs: '10px', sm: '10px', md: '20px', lg: '20px'},
                height: {xs: '30px', sm: '30px', md: '50px', lg: '50px'},
                width: {xs: '100%', sm: '100%', md: '30%', lg: '30%'},
                fontWeight: 'bold',
                fontSize:{md: '20px', lg: '20px'},
                backgroundColor: "#FFDA55",
                color: "#02216F",
                boxShadow: "2px 3px white",
                borderRadius: {xs: '5px', sm: '5px', md: '10px', lg: '10px'},
                textTransform: "none",
                border: '1px solid', 
                borderColor: 'white', 
                "&:hover": {
                  color: "#ffff",
                  backgroundColor: "black",
                  transition: "transform 0.3s ease-in-out",
                  transform: "translateY(-5px)",
                  boxShadow: "2px 3px white",
                },
              }}
            >
              Take the Test!
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;