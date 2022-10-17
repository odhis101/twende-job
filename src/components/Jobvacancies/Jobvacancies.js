import React from "react";
import "./Jobvacancies.scss";

export default function Jobvacancies({ type,title, location, salary, description, date,id}) {
    function hello(){
        console.log(id)
    }
    return (

     
       <>
       
         <div className="JobCentercontainer rounded-md shadow-inherit cursor-pointer" onClick={hello}>
            <div className="JobCentercontainer__header">
            <p  className="text-[#717171] px-2">{type}</p>
            <p className="text-[#717171] px-2"> Posted on: {date}</p>
                </div>
            <p className="px-2 font-semibold"> {title} </p>
            <div className="JobCentercontainer__header">
            <p className="px-2 font-normal">{description}</p>
            <p className="px-2 text-[#717171] underline-offset-1	"> View Details</p>
                </div>
           

            
        
        </div>
       
         </>
         )
         };