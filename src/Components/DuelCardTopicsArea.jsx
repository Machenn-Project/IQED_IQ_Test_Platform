import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Slide,
  Grow,
  Divider,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { AI_Icon, MathImg } from "../assets"; // Adjust the import path as needed

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const DuelCardTopicsArea = () => {
  // State to manage the dialog
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchInput, setSearchInput] = useState(""); // State for search input

  // Array of card data
  const cardData = [
    { id: 1, title: "Types of Numbers", image: MathImg, questions: 10 },
    { id: 2, title: "Prime Numbers", image: MathImg, questions: 15 },
    { id: 3, title: "Tally System", image: MathImg, questions: 8 },
    { id: 4, title: "Co-prime", image: MathImg, questions: 5 },
    { id: 5, title: "Fractions", image: MathImg, questions: 12 },
    { id: 6, title: "Decimals", image: MathImg, questions: 7 },
    { id: 7, title: "Percentages", image: MathImg, questions: 9 },
    { id: 8, title: "Ratios", image: MathImg, questions: 11 },
    { id: 9, title: "Integers", image: MathImg, questions: 6 },
    { id: 10, title: "Exponents", image: MathImg, questions: 14 },
    { id: 11, title: "Square Roots", image: MathImg, questions: 13 },
  ];

  // Function to handle card click
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  // Function to handle dialog close
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSelectedCard(null);
    }, 300);
  };

  // Function to handle input change
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Filtered card data based on search input
  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        gap: "20px",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "Black",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            boxSizing: "border-box",
            px: "10px",
            py: "5px",
            borderRadius: "5px",
            fontSize: "18px",
          }}
        >
          <img
            src={AI_Icon}
            alt="Ai_Icon"
            style={{ width: "18px", height: "18px" }}
          />
          Battle Topics
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "25px",
            padding: "5px 10px",
            border: "2px solid",
            borderColor: "#02216F",
          }}
        >
          <input
            placeholder="Search Topics"
            value={searchInput} // Bind the input value to the state
            onChange={handleSearchInputChange} // Handle input change
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: "14px",
              color: "black",
            }}
          />
        </Box>
      </Box>

      {/* Grid layout for cards */}
      <Grid container spacing={2}>
        {filteredCards.map((card) => (
          <Grid item xs={6} sm={4} md={3} key={card.id}>
            <Card
              sx={{
                bgcolor: "#EEF7FF",
                "&:hover": {
                  transition: "transform 0.3s ease-in-out",
                  transform: "translateY(-5px)",
                  boxShadow: "2px 3px #02216F",
                },
              }}
              onClick={() => handleCardClick(card)} // Add onClick event
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="body"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        textOverflow: "ellipsis",
                        whiteSpace: "normal", // Allows the text to wrap to the next line
                        overflow: "hidden",
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for displaying card details */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          borderRadius: "10px ",
        }}
      >
        <DialogContent
          sx={{
            boxSizing: "border-box",
            p: "10px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={selectedCard?.image}
              alt={selectedCard?.title}
              sx={{
                borderRadius: "6px",
              }}
            />
            <CardContent
              sx={{
                boxSizing: "border-box",
                pl: 0,
                pr: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {selectedCard?.title}
                  </Typography>

                  <Typography gutterBottom variant="body" component="div">
                    Total Questions: {selectedCard?.questions}
                  </Typography>
                  <Divider
                    sx={{
                      borderBottomWidth: 3,
                      borderRadius: "10px",
                      borderColor: "black",
                    }}
                  />
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  startIcon={<PeopleIcon />}
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
                  Challenge Friend
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DuelCardTopicsArea;
