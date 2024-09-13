import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp } from "./pages/AuthPages";
import { GeneralQuizPage, Home } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Signin" element={<SignIn />}></Route>
        <Route path="/Signup" element={<SignUp />}></Route>
        <Route path="/GeneralQuizPage" element={<GeneralQuizPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
