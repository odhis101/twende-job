import React from "react";
import './Navbar.scss'
import { useState,useEffect} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import FindAJob from "../../pages/FIndAJob/FindAJob";
import PostAJob from "../../pages/PostAJob/PostAJob";
import Register from "../../pages/Register/Register";
import ClassifiedJobs from "../../pages/ClassifiedJobs/ClassifiedJobs";
import Login from "../../pages/Login/Login";
import JobAlerts from "../../pages/JobAlerts/JobAlerts";
import user1 from '../../assets/img/user1.jpg'
import { useSelector,useDispatch } from "react-redux";
import { logout,reset } from "../../features/auth/authSlice";
import { AiOutlineUser } from "react-icons/ai";
import Trial from "../Trial/Trial"

export default function Navbar() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { user} = useSelector((state) => state.auth);
  const onLogout =() => {
    dispatch(logout());
    dispatch(reset());

  }


  function register() {
    console.log("register");
    <Link to="/register" />
  }
  
  
  return (
    <>
    
      <div className='navContainer'>
      <div className="flex">
      <div className="flex space-x-8  border-b buttonContainer">
        
        <CustomLink   to="/">Find a job</CustomLink>
        <CustomLink   to="/postAjob">Post a Job</CustomLink>
        <CustomLink   to="/ClassifiedJobs">Classifieds Jobs</CustomLink>
        <CustomLink   to="/register">Companies</CustomLink>
        <CustomLink   to="/JobAlerts">Get SMS Job Alerts!</CustomLink>
        <CustomLink   to="/register">Help?</CustomLink>
              </div>
              <div className="Rightbarlogin" id = 'Rightbarlogin'>
        {user ? (<button className='btn' onClick={onLogout}>
        < AiOutlineUser />
        </button>) : (
           <>
           <div className="loginButtons">
           <Link to="/login" className="bg-black mr-4 hover:bg-gray-700 text-white font-bold py-2 px-9 hover:border-blue-500 rounded-full">
             Login
             </Link>
           </div>
             <div className="loginButtons">
      <Link to="/register" className="bg-[#FFB246] hover:bg-orange-400 text-black font-bold py-3 px-6 hover:border-blue-500 rounded-full">
             Register
             </Link>
           </div>
           </>
           
        ) }
        
   
      </div>
     
            </div>
      
   
      
    
     
    </div>
    
        

        
    </>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (

      <Link className={isActive ? "justify-evenly	 py-2 px-5 m-0 border-b-4 transition-colors duration-300 border-[#FFB246]" : " justify-evenly	 py-2 px-4 m-0 border-b-4 transition-colors duration-300"} to={to} {...props}>
        {children}
      </Link>
   
  )
}