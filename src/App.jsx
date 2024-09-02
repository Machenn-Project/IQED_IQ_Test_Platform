import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Signup from './Pages/AuthPages/SignUp';
import SignIn from './Pages/AuthPages/SignIn';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/Signin' element={<SignIn />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
       
      </Routes>
    </BrowserRouter>

  )
}

export default App
