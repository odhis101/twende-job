import React from "react";
import './Navbar.scss'
import { useState,useEffect} from "react";

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
const tabsData = [
  {
    label: "Find a jobs",
    content:
     <FindAJob/>
  },
  {
    label: "Post a Job",
    content:
      <PostAJob/>
  },
  {
    label: "Classifieds Jobs",
    content:
    <ClassifiedJobs/>    
  },
  {
    label: "Companies",
    content:
<Trial/>
          
  },
  {
    label: "Get SMS Job Alerts!",
    content:
    <JobAlerts/>  
    },
  {
    label: "Help?",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },

  {
    label: "",
    content:
      <Login/>
  },
  {
    label: "",
    content:
    <Register/>,
  },
];
export default function Navbar() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { user} = useSelector((state) => state.auth);
  const onLogout =() => {
    dispatch(logout());
    dispatch(reset());

  }



  
  return (
    <>
    
      <div className='navContainer'>
      <div className="Checking flex">
      <div className="flex space-x-8  border-b flex-wrap buttonContainer">
        {/* Loop through tab data and render button for each. */}
      
        {tabsData.map((tab, idx) => {
          return (
           
            <button
              key={idx}
              className={`py-2 px-4 m-0 border-b-4 transition-colors duration-300 ${
                idx === activeTabIndex
                
                  ? "border-[#FFB246]"
                  : "border-transparent hover:border-gray-200"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}>
              {tab.label}
              
            </button>
            
         
          );
        })}
      
         
      </div>
      <div className="Rightbarlogin" id = 'Rightbarlogin'>
        {user ? (<button className='btn' onClick={onLogout}>
        < AiOutlineUser />
        </button>) : (
           <>
           <div className="loginButtons">
           <button 
           onClick={() => setActiveTabIndex(6)}
           class="bg-black mr-4 hover:bg-gray-700 text-white font-bold py-2 px-9 hover:border-blue-500 rounded-full">
           Login
</button>
           </div>
             <div className="loginButtons">
             
             <button 
             onClick={() => setActiveTabIndex(7)}
             class="bg-[#FFB246] hover:bg-orange-400 text-black font-bold py-2 px-6 hover:border-blue-500 rounded-full">
             Register
            
             </button>
           </div>
           </>
           
        ) }
        
   
      </div>
     
            </div>
      
      {/* Show active tab content. */}
      <div className="py-4 content">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
     
    </div>
        

        
    </>
  );
}