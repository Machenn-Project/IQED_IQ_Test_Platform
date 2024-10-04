import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { SignIn, SignUp } from "./pages/AuthPages";
import { ContestPage, ExplorePage, GeneralQuizPage, GQGetResult, GQGetResultWA, GQSuccessPage, Home, MissionPage,LeaderboardPage, ProfilePage, SupportPage, SettingsPage, QuizResultPage, AnsKeyPage, CommenQuizTest } from "./pages";
import { BlueBg, WhiteBg, YellowBg } from "./assets/Bg";
import { Box } from "@mui/material";


const DynamicBackground = ({ children }) => {
  const location = useLocation();

  // Define background images based on routes
  const backgroundMap = {
    "/": YellowBg,
    "/signin": BlueBg,
    "/signup": BlueBg,
    "/general-quiz-test": YellowBg,
    "/gq-success": YellowBg,
    "/gq-get-result": YellowBg,
    "/gq-get-result-vai-wa": YellowBg,
    "/commenquiztest": YellowBg,
  };

  const backgroundImage = backgroundMap[location.pathname.toLowerCase()] || WhiteBg;

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',      
        height:'100vh',
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
          <Route path="/general-quiz-test" element={<GeneralQuizPage />}></Route>
          <Route path="/gq-success" element={<GQSuccessPage />}></Route>
          <Route path="/gq-get-result" element={<GQGetResult/>}></Route>
          <Route path="/gq-get-result-vai-WA" element={<GQGetResultWA/>}></Route>
          <Route path="/Explore" element={<ExplorePage/>}></Route>
          <Route path="/Missions" element={<MissionPage/>}></Route>
          <Route path="/Contest" element={<ContestPage/>}></Route>
          <Route path="/Leaderboard" element={<LeaderboardPage/>}></Route>
          <Route path="/Profile" element={<ProfilePage/>}></Route>
          <Route path="/Support" element={<SupportPage/>}></Route>
          <Route path="/Settings" element={<SettingsPage/>}></Route>
          <Route path="/QuizResult" element={<QuizResultPage/>}></Route>
          <Route path="/AnsKeyPage" element={<AnsKeyPage/>}></Route>
          <Route path="/CommenQuizTest" element={<CommenQuizTest/>}></Route>
        </Routes>
      </DynamicBackground>
    </BrowserRouter>
  );
};

export default App;
