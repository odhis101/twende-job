import React from "react";
import './JobofTheDay.scss'


export default function JobofTheDay() {
    return (
        <div className="jobofthedayContainer">
            <p className = "text-cyan-900 px-3.5"> JOBS OF THE DAY</p> 
            <div className="jobDescription px-3.5">
                <p className = "text-zinc-400">Electricals</p> 
                <p>Aramel Electricals</p>
                <br/>
                <p>Applications are invited from qualified persons for the above vacant position.</p>
                <br/>
                <p>Salary: KES.45,000 PM</p>
                <br/>
                <p>Applications must be submitted by 01.10.2022</p>
                <br/>
                <p> Must have valid electrical wiring certification from Kenya Power</p>
                <br/>
                <p className="underline text-zinc-400" >View more details</p>

                
            </div>


        </div>

        
    );
}