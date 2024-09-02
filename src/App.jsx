import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SignIn , SignUp} from "./pages/AuthPages";


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/Signin' element={<SignIn />}></Route>
        <Route path='/Signup' element={<SignUp/>}></Route>
       
      </Routes>
    </BrowserRouter>

  )
}

export default App
