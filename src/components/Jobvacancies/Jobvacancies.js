import React from "react";
import "./Jobvacancies.scss";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Jobvacancies({ Category,jobTitle,DeadlineDate,id}) {

    return (

     
       <>
       
         <div className="JobCentercontainer rounded-md shadow-inherit cursor-pointer">
            <div className="JobCentercontainer__header">
            <p  className="text-[#717171] px-2">{Category}</p>
            <p className="text-[#717171] px-2"> Posted on: {DeadlineDate.slice(0, 10)}</p>
                </div>
            <p className="px-2 font-semibold"> {jobTitle} </p>
            <div className="JobCentercontainer__header">
           <p></p>
            <p className="px-2 text-[#717171] underline-offset-1	">  <Link to= {`/details/${id}`}  > <p class="button underline-offset-1 ">View Details</p></Link></p>
                </div>
           

           
        
        </div>
       
         </>
         )
         };