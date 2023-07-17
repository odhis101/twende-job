import React, {useState, useEffect} from "react";
import Rightbar from '../../components/Rightbar/Rightbar'
import "./JobAlerts.scss"
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts';

import { MpesaService} from '../../features/mpesa/mpesaSlices'

import BottomNav from '../../components/BottomNav/BottomNav';
import TopNav from '../../components/TopNav/TopNav';
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function JobAlerts() {
    const notify = () => toast("Wow so easy!");
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      }
      const [isChecked, setIsChecked] = useState(false);

// Handle checkbox change
const handleCheckboxChange = (event) => {
  setIsChecked(event.target.checked);
};

    const { user} = useSelector((state) => state.auth);
    //console.log(user)
    //console.log('chekcing cool ,',user.phoneNumber)
    if(user=== null){
        alert('Please login to continue')
        window.location.href = '/login'
    }
    const dispatch = useDispatch();
    const [postData, setPostData] =  useState({ number :'', amount: '', id:user.phoneNumber});
    //console.log(typeof(postData.number))

    const handleSubmit=(e) => {

      e.preventDefault();
      if (!isChecked) {
        toast.error('Please accept the terms of service');
        return;
      }
            if (postData.number === '' || postData.amount === '') {
                alert('Please fill all fields')
            } 
            else if (user === null) {
                alert('Please login to continue')
            }
            else if(postData.number.startsWith('0')  ){
                postData.number = postData.number.replace('0', '254');
                console.log(postData)
            }
            else {
                dispatch(MpesaService(postData))
                //alert("Confirming submission check subscription tab i a few seconds ")
                console.log(postData)
                toast.info('Confirming payment check subscription tab in a few seconds for updates  ')
                //window.location.href = '/'
            }
       
        
      
    }

  return (
    <div>
        <TopNav />
         <div className = 'Attributes mt-5'>
        <p> <strong>SUBSCRIBE FOR SMS JOB ALERTS </strong></p>
        </div>
        <div className="flex">
       
        <div className="centerContainer">
        <div className= {"p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 hidden"} role="alert">
  <span class="font-medium ">Error alert!</span> Change a few things up and try submitting again.
</div>
          
            <p className="mt-6 mb-3"> 1. SELECT PACKAGE</p>
            <div className= 'flex justify-center flex-wrap'>

                <div className="Package">
                    <p className='p-tall3 mb-1 text-center'>Ksh.100 Tu! </p>
                    <p className='p-tall2 mb-1 text-center'> Juliswa pack KAZI notifications </p>
                    <p className='p-tall1 mb-1 text-center'>Subscribe for 7 days</p>
                </div>
                
                <div className="Package">
                    <p className='p-tall3 mb-1 text-center'>Ksh.250 Tu! </p>
                    <p className='p-tall2 mb-1 text-center'>Juliswa pack KAZI notifications </p>
                    <p className='p-tall1 mb-1 text-center'>Subscribe for a month</p>
                </div>
                
                
            </div>
            <form  onSubmit ={handleSubmit}>
            <div className='flex justify-center mt-5 flex-wrap mb-5'>

  <div className="PackageCheckBox text-center">
    <input type="radio" value={100} name="package" onChange={e => setPostData({ ...postData, amount: e.target.value })} />
    <label htmlFor="scales"><br></br>PAY<br /> <strong>KSH.100</strong> NOW</label>
  </div>
  <div className="PackageCheckBox text-center">
    <input type="radio" value={250} name="package" onChange={e => setPostData({ ...postData, amount: e.target.value })} />
    <label htmlFor="scales"><br></br>PAY<br /> <strong>KSH.250</strong> NOW</label>
  </div>
</div>

                <div className="JobDescription mt-5">
                    <p className="mb-2"> 2. ENTER YOUR SAFARICOM PHONE NUMBER</p>
                    <input 
                    type='tel'
                    value = {postData.number}
                    onChange ={(e) => setPostData({...postData,number: e.target.value})}
                    class=" JobInputDescription  shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  placeholder="254703757369"></input>
                </div>
                <button type="submit" 
                class="bg-[#FFB246] hover:bg-orange-400 w-full my-5 text-black  py-3  hover:border-blue-500 rounded"
                >
                    Subscribe
                </button>
            </form>
            <div style={{ marginTop: '10px' }}>
  <label className="terms-link">
    <input
      type="checkbox"
      className="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
    <span className="terms-text"> Terms of Service</span>
  </label>
</div>

        </div>

            
            

<ToastContainer />

            </div>
            <BottomNav/>
    </div>
  )
}
