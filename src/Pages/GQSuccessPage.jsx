// GQSuccessPage.js
import React from "react";
import { Box, Typography, Button, Stack, Divider } from "@mui/material";
import { HomeNav } from "../components";
import { ConfettiEffect } from "../commonComponents";
import { Pop } from "../assets";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const GQSuccessPage = () => {
  return (
    <Box>
      <ConfettiEffect />
      <HomeNav />

      <Box
        sx={{
          width: "100vw",
          position: "relative",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          width={"200px"}
          height={"200px"}
          component="img"
          alt="Pop"
          src={Pop}
        />
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
          General Test Completed
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            pb: "30px",
            width: { md: "60%" },
            color: "#02216F",
            fontSize: { xs: "30px", md: "36px" },
            fontWeight: "bold",
          }}
        >
          Congratulations on successfully completing the test! You almost hit
          our rank holder's record!
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            width: { md: "60%" },
            color: "#02216F",
            fontSize: "20px",
            fontWeight: "bold",
            pb: "20px",
          }}
        >
          You can view your results via
        </Typography>

        <Stack
          direction="row"
          divider={
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ borderRightWidth: 2 }}
            />
          }
          spacing={2}
          sx={{
            width: { md: "50%" },
          }}
        >
          <Button
            startIcon={<EmailIcon />}
            component={Link}
            to="/Signup"
            fullWidth
            variant="contained"
            sx={{
              fontWeight: "bold",
              backgroundColor: "#1A49BA",
              color: "#fff",
              boxShadow: "2px 3px #fff",
              borderRadius: { xs: "5px", sm: "5px", md: "8px", lg: "8px" },
              textTransform: "none",
              border: "1px solid",
              borderColor: "#fff",
              "&:hover": {
                color: "#ffff",
                backgroundColor: "black",
                transition: "transform 0.3s ease-in-out",
                transform: "translateY(-5px)",
                boxShadow: "2px 3px #ffff",
              },
            }}
          >
            Email
          </Button>
          <Button
            startIcon={<WhatsAppIcon />}
            component={Link}
            to="/Signup"
            fullWidth
            variant="contained"
            sx={{
              fontWeight: "bold",
              backgroundColor: "#00A259",
              color: "#fff",
              boxShadow: "2px 3px #fff",
              borderRadius: { xs: "5px", sm: "5px", md: "8px", lg: "8px" },
              textTransform: "none",
              border: "1px solid",
              borderColor: "#fff",
              "&:hover": {
                color: "#ffff",
                backgroundColor: "#004B2A",
                transition: "transform 0.3s ease-in-out",
                transform: "translateY(-5px)",
                boxShadow: "2px 3px #ffff",
              },
            }}
          >
            WhatsApp
          </Button>
        </Stack>

        <Typography
          sx={{
            textAlign: "center",
            width: { md: "60%" },
            color: "#02216F",
            fontSize: "16px",
            fontWeight: "400",
            py: "20px",
          }}
        >
          or directly on the platform
        </Typography>
        <Button
          component={Link}
          to="/Signup"
          fullWidth
          variant="contained"
          sx={{
            fontWeight: "bold",
            backgroundColor: "#fff",
            color: "#02216F",
            boxShadow: "2px 3px #02216F",
            borderRadius: { xs: "5px", sm: "5px", md: "8px", lg: "8px" },
            width: "50%",
            textTransform: "none",
            border: "1px solid",
            borderColor: "#02216F",
            "&:hover": {
              color: "#ffff",
              backgroundColor: "#02216F",
              transition: "transform 0.3s ease-in-out",
              transform: "translateY(-5px)",
              boxShadow: "2px 3px #ffff",
            },
          }}
        >
          SignUp
        </Button>
      </Box>
    </Box>
  );
};

export default GQSuccessPage;
