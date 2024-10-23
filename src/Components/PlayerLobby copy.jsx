import React from "react";
import { Grid, Box, Typography, Button, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PlayerLobby = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: theme.spacing(2),
        // minHeight: '100vh',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: theme.spacing(2),
          bgcolor: "#FFDA55",
          borderRadius: "10px",
          fontFamily: "Poppins",
          border: "2px solid",
          borderColor: "#02216F",
          boxShadow: "2px 3px #02216F",

           }}>
            <Box
              sx={{
                
                padding: theme.spacing(1),
                borderRadius: 1,
                marginBottom: 2,
              }}
            >
              <Typography variant="body1" fontWeight="bold">
                List of Questions
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ marginBottom: theme.spacing(1) }}>
              Level 1 Basic
            </Typography>
            <Typography variant="body1">Number line</Typography>
            <Typography variant="h6" fontWeight="bold">
              20Qs
            </Typography>
          </Paper>
        </Grid>

        {/* Right Section - Challenge Friends */}
        <Grid item xs={12} md={9}>
          <Paper
            elevation={1}
            sx={{
              padding: theme.spacing(2),
              bgcolor: "#F3F7FF",
              borderRadius: "10px",
              fontFamily: "Poppins",
              border: "2px solid",
              borderColor: "#02216F",
              boxShadow: "2px 3px #02216F",
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: theme.spacing(2) }}>
              Challenge Friends
            </Typography>

            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    maxWidth: "150px",
                    marginBottom: { xs: 2, sm: 0 },
                  }}
                  src="path-to-qr-code.png" // Replace with actual path to QR Code image
                  alt="QR Code"
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="body1">Link: iqed.com/match</Typography>
                <Typography variant="body1">
                  Code: <strong>46283</strong>
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<i className="fas fa-play-circle"></i>}
                  sx={{ marginTop: theme.spacing(2) }}
                >
                  Start Match
                </Button>
              </Grid>
            </Grid>

            <Box
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: 1,
                padding: theme.spacing(2),
                marginTop: theme.spacing(2),
              }}
            >
              <Typography variant="body1" fontWeight="bold">
                Singh(Guest)
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlayerLobby;
