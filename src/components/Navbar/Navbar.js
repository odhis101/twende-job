import React from "react";
import './Navbar.scss'
import { useState } from "react";

import FindAJob from "../../pages/FIndAJob/FindAJob";
import PostAJob from "../../pages/PostAJob/PostAJob";

const tabsData = [
  {
    label: "Find a job",
    content:
     <FindAJob/>
  },
  {
    label: "Post a Job",
    content:
      <PostAJob/>
  },
  {
    label: "Find a job",
    content:
      "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
  },
  {
    label: "That Text",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
  {
    label: "Find a job",
    content:
      "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
  },
  {
    label: "That Text",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },

];
export default function Navbar() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  
  
  return (
    <>
      <div className='navContainer'>
    
      <div className="flex space-x-8 border-b flex-wrap buttonContainer">
        {/* Loop through tab data and render button for each. */}
      
        {tabsData.map((tab, idx) => {
          return (
           
            <button
              key={idx}
              className={`py-2 px-8 border-b-4 transition-colors duration-300 ${
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
      {/* Show active tab content. */}
      <div className="py-4">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
        

        
    </>
  );
}