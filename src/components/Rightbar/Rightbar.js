import React from "react";
import './Rightbar.scss'
import JobsOfTheDay from '../JobofTheDay/JobOfTheDay'
import Help from '../Help/Help';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import FindAJob from "../../pages/FIndAJob/FindAJob";
import PostAJob from "../../pages/PostAJob/PostAJob";

export default function Rightbar() {
    return (
        
        <div className="Rightcontainer">
            <JobsOfTheDay/>
            <Help/>
            <div className="flex justify-evenly">
        <p>PAYBILL NUMBER </p>
       <p> 4067878 </p>
            </div>
            <div className="flex justify-center">
            <Link to = "JobAlerts" class="bg-[#FFB246] hover:bg-orange-400 text-black font-bold py-2 px-6 hover:border-blue-500 rounded-full">
              Register

</Link>
</div>

        </div>  
        
          
        );
    }