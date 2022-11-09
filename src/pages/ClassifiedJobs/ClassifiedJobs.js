import React from 'react'
import Searchbar from '../../components/SearchBar/Searchbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import ClassifiedModule from '../../components/ClassifiedModule/ClassifiedModule'
import BottomNav from '../../components/BottomNav/BottomNav';

export default function ClassifiedJobs() {
  return (
    <div>
        
      <div className="flex">
      <div className="centerContainer">
      <Searchbar/>
      <div className = 'Attributes'>
        <p> CLASSIFIEDS JOBS</p>
        </div>
        < ClassifiedModule/>
        < ClassifiedModule/>
        < ClassifiedModule/>
        < ClassifiedModule/>
        < ClassifiedModule/>
        < ClassifiedModule/>



      </div>
  
      </div>
      <BottomNav/>
        
    </div>
  )
}
