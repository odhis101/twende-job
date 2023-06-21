import React from "react";
import './JobofTheDay.scss'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import axios from 'axios';
import { useState,useEffect} from "react";


export default function JobofTheDay(props) {
  const container = props.container;
    const [jobsOfTheDay, setJobsOfTheDay] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL
    const [expanded, setExpanded] = useState(false);
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod augue eget diam facilisis tincidunt. Donec eu justo felis. Sed commodo aliquam urna non volutpat. Vestibulum semper eleifend lacus, sit amet tristique quam efficitur sed.";
    const maxWords = 20;

    useEffect(() => {
      axios.get(`${API_URL}/jobs/getJobsOfTheDay`)
        .then(response => {
          const jobsOfTheDayData = response.data;
          setJobsOfTheDay(jobsOfTheDayData);
        })
        .catch(error => {
          console.error('Error fetching jobs of the day:', error);
        });
    }, []);
    
    // Add a conditional check to access the properties when data is available
    let category = "";
    let jobTitle = "";
    let Salary = "";
    let Requirment = "";
    let DeadlineDate = "";
    if (jobsOfTheDay.length > 0) {
      category = jobsOfTheDay[0].Category;
      
      jobTitle = jobsOfTheDay[0].jobTitle;
      Salary = jobsOfTheDay[0].Salary;
      Requirment = jobsOfTheDay[0].Requirment;
      DeadlineDate = jobsOfTheDay[0].DeadlineDate;
      // convert DeadlineDate
      DeadlineDate = new Date(DeadlineDate).toISOString().slice(0, 10)
    }
    const handleClick = () => {
      setExpanded(!expanded);
    };
  
    const displayContent = () => {
      if (expanded || Requirment.split(' ').length <= maxWords) {
        return Requirment;
      } else {
        const words = Requirment.split(' ').slice(0, maxWords).join(' ');
        return words + '...';
      }
    };
  
    
    return (
        <div className={container}>
            <p className = "text-cyan-900 px-3.5"> JOBS OF THE DAY</p> 
            <div className="jobDescription px-2.5">
                <p className = "text-zinc-400">{category}</p> 
                <p>{jobTitle}</p>
                <br/>
                <p>Applications are invited from  qualified persons for the above vacant position.</p>
                <br/>
                <p>Salary: {Salary}</p>
                <br/>
                <p>Applications must be submitted by {DeadlineDate}</p>
                <br/>
                <p>{displayContent()}</p>
                    {Requirment.split(' ').length > maxWords && (
                      <button 
                      className="underline"
                      onClick={handleClick}>
                        {expanded ? 'Show Less' : 'Show More'}
                      </button>
                    )}
                <br/>
                <p className="px-2 text-[#717171] underline-offset-1">  <Link to= {`/jobsOfTheDay`}  > <p class="button underline-offset-1 ">View Details</p></Link></p>
                
            </div>


        </div>

        
    );
}