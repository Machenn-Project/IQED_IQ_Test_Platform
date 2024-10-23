import React from "react";
import { Box, Typography, Button, Stack, Divider, Avatar } from "@mui/material";
import { qr } from "../assets";

// Sub-component for the header area with exit button
const LobbyHeader = ({ onExit }) => (
  <Box
    sx={{
      m: "10px",
      display: "flex",
      justifyContent: "space-between",
      height: "5%",
    }}
  >
    <Typography variant="h5" sx={{ fontWeight: "600", color: "#02216F" }}>
      Challenge Friends
    </Typography>
    <Stack direction="row" spacing={2}>
      <Button
        fullWidth
        variant="contained"
        onClick={onExit}
        sx={buttonStyle}
      >
        Exit
      </Button>
    </Stack>
  </Box>
);

// Sub-component for the QR code and match info
const QRCodeSection = ({ qrImage, matchLink, matchCode }) => (
  <Box
    sx={{
      backgroundColor: "#ADBFEA",
      padding: "20px",
      borderRadius: "12px",
      display: "flex",
      gap: "20px",
      width: "95%",
      justifyContent: "center",
    }}
  >
    <Box sx={{ bgcolor: "white" }}>
      <img src={qrImage} alt="QR Code" style={{ width: "150px", height: "150px" }} />
    </Box>
    <Box>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Link: {matchLink}
      </Typography>
      <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
        Code: {matchCode}
      </Typography>
      <Button
        variant="contained"
        sx={startButtonStyle}
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
      width: "95%",
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
      <Stack key={index} direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Avatar src={guest.avatar} alt={guest.name} sx={{ width: 50, height: 50 }} />
        <Typography variant="body1" sx={{ fontWeight: "500", color: "#02216F" }}>
          {guest.name} (Guest)
        </Typography>
      </Stack>
    ))}
  </Box>
);

// Main PlayerLobby component
const PlayerLobby = () => {
  const guests = [{ name: "Singh", avatar: "/path_to_image/singh.png" }]; // Dummy data

  return (
    <Box sx={containerStyle}>
      <Box sx={innerContainerStyle}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ height: "100%" }}>
          <Box sx={quizAreaStyle}>
            <Box sx={{ width: "98%", height: "98%" }}>
              <LobbyHeader onExit={() => console.log("Exit clicked")} />
              <Divider sx={dividerStyle} />
              <Box sx={contentStyle}>
                <QRCodeSection qrImage={qr} matchLink="iqed.com/match" matchCode="46283" />
                <GuestList guests={guests} />
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

// Common styles
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
};

const innerContainerStyle = {
  width: { xs: "calc(100vw - 30px)", md: "calc(100vw - 80px)" },
  height: { xs: "calc(100vh - 30px)", md: "calc(100vh - 80px)" },
};

const quizAreaStyle = {
  width: "100%",
  bgcolor: "white",
  height: "100%",
  borderRadius: "20px",
  boxShadow: "5px 6px #02216F",
  border: "1px solid",
  borderColor: "#02216F",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const dividerStyle = {
  bgcolor: "#FFDA55",
  mb: "3%",
  height: "2px",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "85%",
  gap: "10px",
};

const buttonStyle = {
  backgroundColor: "#FFF0C9",
  color: "#02216F",
  boxShadow: "0px 0px #02216F",
  textTransform: "none",
  borderRadius: "50px",
  borderColor: "#02216F",
  px: "20px",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#02216F",
  },
};

const startButtonStyle = {
  mt: 2,
  backgroundColor: "#00b894",
  color: "#fff",
  textTransform: "none",
  px: 4,
  "&:hover": {
    backgroundColor: "#019d75",
  },
};

export default PlayerLobby;
