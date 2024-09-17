import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { SignIn, SignUp } from "./pages/AuthPages";
import { GeneralQuizPage, GQSuccessPage, Home } from "./pages";
import { BlueBg, YellowBg } from "./assets/Bg";
import { Box } from "@mui/material";

const DynamicBackground = ({ children }) => {
  const location = useLocation();

  // Define background images based on routes
  const backgroundMap = {
    "/": YellowBg,
    "/Signin": BlueBg,
    "/Signup": BlueBg,
  };

  // Get the background image based on the current route, default to YellowBg
  const backgroundImage = backgroundMap[location.pathname] || YellowBg;

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      {children}
    </Box>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <DynamicBackground>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Signin" element={<SignIn />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
          <Route path="/GeneralQuizPage" element={<GeneralQuizPage />}></Route>
          <Route path="/gq-success" element={<GQSuccessPage />}></Route>
        </Routes>
      </DynamicBackground>
    </BrowserRouter>
  );
};

export default App;
