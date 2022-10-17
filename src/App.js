

import { useEffect, useRef, useState } from "react";
import Home from "./pages/Home/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

import './App.css';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
function App() {
  
  return (
    <> 
  <Router>

      <Routes>
      <Route path="/" >
      <Route path=":home" element={<Home />} />
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path="login" >
            <Route index element={<Login />} />
            </Route>

      </Route>
           
      </Routes>
      </Router>
    </>
);
}

export default App;
