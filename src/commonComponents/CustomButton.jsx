import { Button } from "flowbite-react";
import React from "react";

const CustomButton = ({}) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{
        // m: "20px",
        height: "50px",
        fontWeight: "900",
        backgroundColor: "#ffff",
        color: "#02216F",
        boxShadow: "2px 3px #02216F",
        borderRadius: "10px",
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
  );
};

export default CustomButton;
