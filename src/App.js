

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
import Cooks from "./pages/Categories/Cooks/Cooks"
import Construction from "./pages/Categories/Construction/Construction";
import Woodwork from "./pages/Categories/Woodwork/Woodwork";
import Drivers from "./pages/Categories/Drivers/Drivers";
import Teaching from "./pages/Categories/Teaching/Teaching";
import Nannies from "./pages/Categories/Nannies/Nannies";
// import all from categories
import Cleaning from "./pages/Categories/Cleaning/Cleaning";
import Catering from "./pages/Categories/Catering/Catering";
import Electricals from "./pages/Categories/Electricals/Electricals"
import Farming from "./pages/Categories/Farming/Farming"
import Hotels from "./pages/Categories/Hotels/Hotels"
import Internsips from "./pages/Categories/Internships/Internships"

import PartTime from  "./pages/Categories/Part-time/Part-time" 
import PetService from "./pages/Categories/Pet_Service/Pet_Service" 
import Profesional_Service from "./pages/Categories/Profesional_Service/Profesional_Service" 
import Retail_shops from  "./pages/Categories/Retail-shops/Retail-shops" 
import Sales from "./pages/Categories/Sales/Sales"
import Details from "./pages/Details/Details.js";
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
          <Route path="/Subscriptions" element={<Subscriptions />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cooks" element={<Cooks />} />
          <Route path="/driver" element={<Drivers />} />
          <Route path="/woodWork" element={<Woodwork />} />
          <Route path="/Construction" element={<Construction />} />
          <Route path="/Teaching" element={<Teaching />} />
          <Route path="/Nannies" element={<Nannies />} />
          <Route path="/Catering" element={<Catering />} />
          <Route path="/Electricals" element={<Electricals />} />
          <Route path="/Farming" element={<Farming />} />
          <Route path="/Hotels" element={<Hotels />} />
          <Route path="/Internsips" element={<Internsips />} />
          <Route path="/PartTime" element={<PartTime />} />
          <Route path="/PetService" element={<PetService />} />
          <Route path="/Profesional_Service" element={<Profesional_Service />} />
          <Route path="/Retail_shops" element={<Retail_shops />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/Cleaning" element={<Cleaning />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="*" element={<ErrorPage/>} />
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