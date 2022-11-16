import React, {useState, useEffect} from "react";
import Rightbar from '../../components/Rightbar/Rightbar'
import "./JobAlerts.scss"
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts';

import { MpesaService} from '../../features/mpesa/mpesaSlices'

import BottomNav from '../../components/BottomNav/BottomNav';

export default function JobAlerts() {
    const { user} = useSelector((state) => state.auth);
    //console.log(user)
    const dispatch = useDispatch();
    const [postData, setPostData] =  useState({ number :'', amount: ''});
    //console.log(typeof(postData.number))

    const handleSubmit=(e) => {
        e.preventDefault();
            if (postData.number === '' || postData.amount === '') {
                alert('Please fill all fields')
            } 
            else if (user === null) {
                alert('Please login to continue')
            }
            else {
                dispatch(MpesaService(postData))
                console.log(postData)
            }
       
        
      
    }

  return (
    <div>
         <div className = 'Attributes '>
        <p> SUBSCRIBE FOR SMS JOB ALERTS </p>
        </div>
        <div className="flex">
       
        <div className="centerContainer">
        <div className= {"p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 hidden"} role="alert">
  <span class="font-medium ">Error alert!</span> Change a few things up and try submitting again.
</div>
          
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
            <form  onSubmit ={handleSubmit}>
            <div className= 'flex justify-between flex-wrap mb-6'>
                <div className="PackageCheckBox">
                <input type="radio" value = {10}  name="10" req onChange={e=> setPostData({...postData,amount: e.target.value})}  />
                <label for="scales">PAY KSH.10 NOW</label>  
                </div>
                <div className="PackageCheckBox">
                <input type="radio" value = {49}  name="50" onChange={e=> setPostData({...postData,amount: e.target.value})} />
                <label for="scales">PAY KSH.49 NOW</label>   
                </div>
                <div className="PackageCheckBox">
                <input type="radio" value = {199}  name="199" onChange={e=> setPostData({...postData,amount: e.target.value})} />
                <label for="scales">PAY KSH.199 NOW</label>    
                </div>
                
            </div>
            <div className="JobDescription">
        <p className=""> 2. ENTER. YOUR SAFARICOM PHONE NUMBER</p>
        <input 
        type='tel'
        value = {postData.number} 
         onChange ={(e) => setPostData({...postData,number: e.target.value})}
        class=" JobInputDescription  shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="254703757369"></input>
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
