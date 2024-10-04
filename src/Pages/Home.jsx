import {
  Box,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { HomeNav } from "../components";

import { Link } from "react-router-dom";

const CustomListItem = ({ content }) => (
  <ListItem sx={{ display: "list-item" }} disablePadding>
    <ListItemText
      primary={content}
      primaryTypographyProps={{
        fontSize: {
          xs: "14px",
          sm: "14px",
          md: "20px",
          lg: "20px",
        },
        fontWeight: "600",
      }}
    />
  </ListItem>
);
const Home = () => {
  return (
    <>
    
      <HomeNav />

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        {/* <Typography
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
        </Typography> */}

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
            
            borderRadius: "20px",
            m: "20px",
            padding: "20px",
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
            <List sx={{ listStyleType: "disc", fontSize: "20px" }}>
              <CustomListItem content={"There are 30 multiple choice questions."}/>
              <ListItem sx={{ display: "list-item" }} disablePadding>
                <ListItemText
                  primary="Approximate test time: Fifteen minutes."
                  primaryTypographyProps={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "20px",
                      lg: "20px",
                    },
                    fontWeight: "600",
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
                  }}
                />
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              width: "100%",
              height: "100%",
            }}
          >
            <Button
              component={Link}
              to="/general-quiz-test"
              variant="contained"
              sx={{
                fontWeight: "bold",
                fontSize: { md: "20px", lg: "20px" },
                backgroundColor: "#FFDA55",
                color: "#02216F",
                boxShadow: "2px 3px white",
                borderRadius: { xs: "5px", sm: "5px", md: "10px", lg: "10px" },
                textTransform: "none",
                border: "1px solid",
                borderColor: "white",
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
    </>
  );
};

export default Home;
