import React from "react";
import './Rightbar.scss'
import JobsOfTheDay from '../JobofTheDay/JobOfTheDay'
import Help from '../Help/Help';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    redirect
  } from "react-router-dom";
import FindAJob from "../../pages/FIndAJob/FindAJob";
import PostAJob from "../../pages/PostAJob/PostAJob";
import { useNavigate } from 'react-router-dom'

export default function Rightbar() {
  const navigate = useNavigate()
function redirect() {
  navigate('/')
  }

    return (
        
        <div className="Rightcontainer">
            <JobsOfTheDay/>
            <Help/>
            <div className="flex justify-evenly mt-5 mb-2">
              <p>Terms Of Service </p>
              <p onClick={redirect}><strong>Click here</strong></p>
            </div>
            <div className="flex justify-center">
            <Link to = "JobAlerts" class="bg-[#FFB246] hover:bg-orange-400 text-black font-bold py-2 px-6 hover:border-blue-500 rounded-full">
              Register

</Link>
</div>

        </div>  
        
          
        );
    }