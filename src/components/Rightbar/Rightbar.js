import React from "react";
import './Rightbar.scss'
import JobsOfTheDay from '../JobofTheDay/JobOfTheDay'
import Help from '../Help/Help'

export default function Rightbar() {
    return (
       
        <div className="Rightcontainer">
            <div className="Rightbar">
            <div className="loginButtons">
            <button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-9 hover:border-blue-500 rounded-full">
            Login
</button>
            </div>
              <div className="loginButtons">
              <button class="bg-[#FFB246] hover:bg-orange-400 text-black font-bold py-2 px-9 hover:border-blue-500 rounded-full">
              Register
</button>
            </div>
            
            </div>
            <JobsOfTheDay/>
            <Help/>
        </div>    
        );
    }