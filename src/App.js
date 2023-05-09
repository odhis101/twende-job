

import { useEffect, useRef, useState } from "react";
import Home from "./pages/Home/Home";
import {getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import PostAJob from "./pages/PostAJob/PostAJob";
import './App.css';
import Register from "./pages/Register/Register";
import Rightbar from "./components/Rightbar/Rightbar";
import FindAJob from "./pages/FIndAJob/FindAJob";
import ClassifiedJobs from "./pages/ClassifiedJobs/ClassifiedJobs";
import Login from "./pages/Login/Login";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import JobAlerts from "./pages/JobAlerts/JobAlerts";
import Skills from "./pages/Skills/Skills";
import Woodwork from "./pages/Categories/Woodwork/Woodwork";
import PostASkill from "./pages/PostASkill/PostASkill";
import Details from "./pages/Details/Details";
import TermsOfService  from "./pages/TermsOfService/TermsOfService";
import Forgotpass from "./pages/ForgotPass/Forgotpass";
import AboutUs from "./pages/aboutUs/AboutUs";

const App = () => {
  return (
    <> 
  <div className="flex">   
           
        <Sidebar  />
        <div className = 'nav' >
        
        <Navbar />
        <div className = 'flex' >
        <div className = 'mainContent' >
        <Routes>
          <Route path="/" element={<FindAJob />} />
          <Route path="/login"element={<Login />}  />
          <Route path="/postAjob" element={<PostAJob />} />
          <Route path="/ClassifiedJobs" element={<ClassifiedJobs />} />
          <Route path="/JobAlerts" element={<JobAlerts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getSkills" element={<Skills />} />
          <Route path="/Subscriptions" element={<Subscriptions />} />
          <Route path="/register" element={<Register />} />
          <Route path="/postASkill" element={<PostASkill />} />
          <Route path="/category/:id" element={< Woodwork />} />
          <Route path="*" element={<ErrorPage/>} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/forgotPassword" element={<Forgotpass />} />
          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="" element={<ErrorPage/>} />
          <Route element={<ErrorPage/>} />
          
          
        </Routes>
        </div>
        <Rightbar/>
        </div>
        </div>
        </div>
        
        
      
    
    </>
);
}

export default App;