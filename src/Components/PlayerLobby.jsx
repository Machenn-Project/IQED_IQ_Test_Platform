import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Divider,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AI_Icon, qr } from "../assets"; // Ensure these paths are correct
import TopicIcon from "@mui/icons-material/Topic";
import { useLocation,useNavigate  } from "react-router-dom"; // Import useLocation

// Sub-component for the header area with exit button
const LobbyHeader = ({ onExit, isSm }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
    <Typography variant="h5" sx={{ fontWeight: "600", color: "#02216F" }}>
      Challenge Friends
    </Typography>
    <Stack direction="row" spacing={3}>
      <Button
        fullWidth
        variant="contained"
        onClick={onExit}
        sx={{
          backgroundColor: "#FFF0C9",
          color: "#02216F",
          boxShadow: "0px 0px #02216F",
          textTransform: "none",
          borderRadius: "50px",
          borderColor: "#02216F",
          "&:hover": {
            color: "#fff",
            backgroundColor: "#02216F",
          },
        }}
      >
        Exit
      </Button>
    </Stack>
  </Box>
);

// Sub-component for the QR code and match info
const QRCodeSection = ({ qrImage, matchLink, matchCode, isSm }) => (
  <Box
    sx={{
      backgroundColor: "#ADBFEA",
      padding: "20px",
      borderRadius: "12px",
      display: "flex",
      flexDirection: isSm ? "column" : "row",
      gap: "20px",
      justifyContent: "center",
    }}
  >
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <img
        src={qrImage}
        alt="QR Code"
        style={{ width: "200px", height: "200px" }}
      />
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ mt: 2 }}>
        Link: {matchLink}
      </Typography>
      <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
        Code: {matchCode}
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "#00b894",
          color: "#fff",
          textTransform: "none",
          px: 4,
          "&:hover": {
            backgroundColor: "#019d75",
          },
        }}
      >
        Start Match
      </Button>
    </Box>
  </Box>
);

// Sub-component for displaying guest avatars and names
const GuestList = ({ guests }) => (
  <Box
    sx={{
      flexGrow: 1,
      borderRadius: "12px",
      padding: "20px",
      border: "1px solid",
      borderColor: "black",
      bgcolor: "#FFF0C9",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: "600", color: "#02216F" }}>
      Player
    </Typography>
    {guests.map((guest, index) => (
      <Stack
        key={index}
        direction="row"
        spacing={2}
        sx={{ alignItems: "center" }}
      >
        <Avatar
          src={guest.avatar}
          alt={guest.name}
          sx={{ width: 50, height: 50 }}
        />
        <Typography
          variant="body1"
          sx={{ fontWeight: "500", color: "#02216F" }}
        >
          {guest.name} (Guest)
        </Typography>
      </Stack>
    ))}
  </Box>
);

// Main PlayerLobby component
const PlayerLobby = () => {
  const location = useLocation(); // Access the location object
  const { topic, questions } = location.state || {}; // Destructure passed state
  const guests = [{ name: "Singh", avatar: "/path_to_image/singh.png" }]; // Dummy data
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  
  const navigate = useNavigate(); // Get the navigate function

  const handleExit = () => {
    // Navigate to the contest page
    navigate("/contest"); // Adjust the path to your contest page
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
          display: "flex",
          boxSizing: "border-box",
          gap: isSm ? null : "20px",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: isSm ? "column" : "row",
            boxSizing: "border-box",
            ml: isSm ? "10px" : "10px",
            mr: isSm ? null : "10px",
            mt: isSm ? "10px" : "10px",
            mb: isSm ? "10px" : "10px",
            pr: isSm ? "10px" : null,
            gap: "20px",
            boxSizing: "border-box",
          }}
        >
          {/* left area */}
          <Box sx={{width: isSm ? null : "30%",}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
               
                
                gap: isSm ? "10px" : "20px",
                bgcolor: "#FFDA55",
                boxSizing: "border-box",
                p: "20px",
                borderRadius: "10px",
                color: "#02216F",
                border: "1px solid",
                borderColor: "#02216F",
                boxShadow: "3px 5px #02216F",
              }}
            >
              <Typography
                variant={isSm ? "h6" : "h5"}
                sx={{
                  display: "flex",
                  gap: "10px",
                  fontWeight: "bold",
                  alignItems: "center",
                }}
              >
                <TopicIcon />
                Topics Details
              </Typography>
              <Box
                sx={{
                  bgcolor: "#1A49BA",
                  p: "10px",
                  color: "white",
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: "10px",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    width: "60%",
                  }}
                >
                  {topic} {/* Display the passed topic */}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {questions} Qus {/* Display the number of questions */}
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* right area */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              bgcolor: "white",
              height: "100%",
              borderRadius: "20px",
              border: "1px solid",
              borderColor: "#02216F",
              boxShadow: "5px 6px #02216F",
              display: "flex",
              boxSizing: "border-box",
              p: "20px",
              gap: "10px",
            }}
          >
            <LobbyHeader onExit={handleExit} isSm={isSm} />
            <Divider sx={{ bgcolor: "#FFDA55", mb: "3%", height: "2px" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <QRCodeSection
                qrImage={qr}
                matchLink="iqed.com/match"
                matchCode="46283"
                isSm={isSm}
              />
              <GuestList guests={guests} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PlayerLobby;
