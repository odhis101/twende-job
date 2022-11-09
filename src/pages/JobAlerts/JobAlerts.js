import React from 'react'
import Rightbar from '../../components/Rightbar/Rightbar'
import "./JobAlerts.scss"
import BottomNav from '../../components/BottomNav/BottomNav';

export default function JobAlerts() {
  return (
    <div>
         <div className = 'Attributes '>
        <p> SUBSCRIBE FOR SMS JOB ALERTS </p>
        </div>
        <div className="flex">
            
        <div className="centerContainer">
            <form >
            <p> 1. SELECT PACKAGE</p>
            <div className= 'flex justify-between flex-wrap'>
                <div className="Package">
                    <p className='text-3xl text-center'>KSH.10 TU! </p>
                    <p className='text-2xl text-center'>DAILY SMS </p>
                    <p className='text-xl text-center'>Subscribe for one day</p>
                </div>
                <div className="Package">
                <p className='text-3xl text-center'>KSH.49 TU!! </p>
                    <p className='text-2xl text-center'>DAILY SMS </p>
                    <p className='text-xl text-center'>Subscribe for 7 days</p>
                </div>
                
                <div className="Package">
                <p className='text-3xl text-center'>KSH.199 TU! </p>
                    <p className='text-2xl text-center'>DAILY SMS </p>
                    <p className='text-xl text-center'>Subscribe for a month</p>
                </div>
                
                
            </div>
            <div className= 'flex justify-between flex-wrap mb-6'>
                <div className="PackageCheckBox">
                <input type="checkbox" id="scales" name="scales" className = "CheckBox" />
                <label for="scales">PAY KSH.10 NOW</label>  
                </div>
                <div className="PackageCheckBox">
                <input type="checkbox" id="scales" name="scales" />
                <label for="scales">PAY KSH.49 NOW</label>   
                </div>
                <div className="PackageCheckBox">
                <input type="checkbox" id="scales" name="scales" />
                <label for="scales">PAY KSH.199 NOW</label>    
                </div>
                
            </div>
            <div className="JobDescription">
        <p className=""> 2. ENTER. YOUR SAFARICOM PHONE NUMBER</p>
        <input class=" JobInputDescription  shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your phone number"></input>
        </div>
            <button type="submit" class="bg-[#FFB246] hover:bg-orange-400 w-full my-5 text-black  py-3  hover:border-blue-500 rounded">
             Subscribe
</button>
</form>
            </div>

            


            </div>
            <BottomNav/>
    </div>
  )
}
