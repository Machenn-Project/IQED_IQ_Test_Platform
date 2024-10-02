import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function ExamCard({ exam }) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        maxWidth: isSm ? 150 : isMd ? 250 : 250,
        borderRadius: "10px",
        bgcolor: "#EEF7FF",
      }}
    >
      <CardMedia
        sx={{
          height: isSm ? 100 : isMd ? 100 : 180,
          m: "10px",
          borderRadius: "10px",
        }}
        image={exam.image}
        title={exam.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          sx={{ 
            fontWeight: "bold",
          }}
        >
          {exam.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontWeight: "regular" }}
        >
          {exam.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ExamCard;
