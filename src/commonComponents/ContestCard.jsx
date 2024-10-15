import React from "react";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  useMediaQuery,
  useTheme,
  ListItem,
  ListItemText,
  List,
  Divider,
} from "@mui/material";
import { AI_Icon, Vs } from "../assets";
const CustomListItem = ({ content }) => (
  <ListItem sx={{ display: "list-item" }} disablePadding>
    <ListItemText
      primary={content}
      primaryTypographyProps={{
        fontSize: { xs: "12px", md: "16px" },
        fontWeight: "400",
      }}
    />
  </ListItem>
);
const ContestCard = (
  {
    Title, 
    listItems,
    image
  }
) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  // const listItems = [
  //   "There are 30 multiple choice questions.",
  //   "Approximate test time: Fifteen minutes.",
  //   "The questions are of varying difficulty.",
  //   "All questions are worth the same points.",
  // ];
  return (
    <Box
      sx={{
        display: "flex",
        // height:'150px',
        flexDirection: isSm ? "column-reverse" : "row-reverse",
        // flexDirection:'column-reverse',
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "3px 5px #02216F",
        boxSizing: "border-box",
        backgroundColor: "#fff",
        mb: "16px",
        mr: isSm ? null : "30px",
        border: "2px solid",
        borderColor: "#02216F",
        gap: "20px",
        bgcolor: "#EEF7FF",
      }}
    >
      {/* Left side: Level information */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          boxSizing: "border-box",
          paddingRight: "10%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
          }}
        >
          <Typography
            variant={isMd ? "h4" : "h3"}
            sx={{
              fontWeight: "bold",
              color: "Black",
            }}
          >
            {Title}
            {/* Mixed Questions */}
          </Typography>
          <Typography
            // variant={isMd ? "body1" : "h5"}
            sx={{
              fontWeight: "bold",
              color: "Black",
              bgcolor: "#FFDA55",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              boxSizing: "border-box",
              px: "10px",
              py: "5px",
              borderRadius: "5px",
              fontSize:isSm?'10px':'12px'
            }}
          >
            <img
              src={AI_Icon}
              alt={Title}
              style={{ width: "15px", height: "15px" }}
            />
            {/* {`Level ${Title}`} */}
            Compete with AI-generated questions.
          </Typography>
          <Box sx={{ pl: { xs: "10%", md: "10%" }, color: "black" }}>
            <List sx={{ listStyleType: "disc" }}>
              {listItems.map((item, index) => (
                <CustomListItem key={index} content={item} />
              ))}
            </List>
          </Box>
        </Box>
        <Button
          variant="contained"
          // onClick={onSelect}
          sx={{
            fontWeight: "bold",
            backgroundColor: "#1A49BA",
            color: "#fff",
            borderRadius: "5px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
        >
          Continue
        </Button>
      </Box>

      <Box
        sx={{
          // marginLeft: "16px",
          width: isSm?'100%':"40%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
          borderRadius: "5px",
        }}
      >
        <img
          src={image}
          alt={Title}
          style={{ width: "150px", height: "150px" }} 
        />
      </Box>
    </Box>
  );
};

export default ContestCard;
