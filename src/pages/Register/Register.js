import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {  reset } from '../../features/auth/authSlice'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//import Spinner from '../components/Spinner'
import BottomNav from '../../components/BottomNav/BottomNav';
import TopNav from '../../components/TopNav/TopNav'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../features/auth/authSlice';
const API_URL = process.env.REACT_APP_API_URL

export default function Register() {
  const notify = () => toast("Wow so easy!");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const API_URL = process.env.REACT_APP_API_URL
  const [isSendAgainVisible, setIsSendAgainVisible] = useState(false);
  const [countdown, setCountdown] = useState(0); // Initialize with the desired countdown time in seconds

  
  const { user, isLoading, isError, isSuccess, message, isVerified} = useSelector(
    (state) => state.auth
  )
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false); // state to keep track of second form
  const [isSubmitting, setIsSubmitting] = useState(false); // state to keep track of whether form is submitting


  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
    password2: '',
  })
  const { phoneNumber, password, password2 } = formData


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
     
    }))
  }
  useEffect(() => {
    if (isError) {
      toast.error('check password or phone number')
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])
  // we are not using dispatch here because we are not using redux
  // since we are not using redux the user never saves in state 
  // we will use redux for logging in once the otp is correct
  const startCooldown = () => {
    setCountdown(10); // Reset the countdown timer to the initial value
  
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(countdownInterval); // Stop the countdown when it reaches 0
          setIsSendAgainVisible(true); // Show the button after the cooldown
          return prevCountdown;
        }
        return prevCountdown - 1;
      });
    }, 1000); // Update the countdown every 1 second (1000 milliseconds)
  };
  
  
  const handleSendOTPAgain = () => {
    console.log("hit this route")
    setIsSubmitting(true);
  
    // Send a request to the server to send a new OTP
    fetch(`${API_URL}/users/send-otp-again`, {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber: phoneNumber,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data);
        if (data.message === 'New OTP sent successfully') {
          setIsOTPVerified(false); // Reset OTP verification status
          toast.success(data.message);
          startCooldown(); // Start the countdown when OTP is sent successfully
        } else {
          toast.error(data.message);
        }
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error('An error occurred while sending the new OTP');
        setIsSubmitting(false);
      });
  };
  

  const onSubmit =async (e)  => {
   
    e.preventDefault()
    if (password !== password2) {
      alert('Passwords do not match')
      console.log('Passwords do not match')
    } else {
      // we create a fethc request to the backend to log in the user  
      
        fetch(`${API_URL}/users/users/`, {
          method: 'POST',
          body: JSON.stringify({
            phoneNumber: phoneNumber,
            password: password,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log('Response:', data);
          setIsEnabled(true);
          toast.info(data.message)
          setIsSubmitting(false);
        
        })
        .catch(error => {
          console.error(error);
          toast.error('An error occurred while sending OTP');
          setIsSubmitting(false);
        });
      }
    
  }
  const handleOTPSubmit = (event) => {
    let userData = {
      phoneNumber: phoneNumber,
      password: password,
    }
    event.preventDefault();
    const otp = event.target.otp.value;
    console.log(otp)
    setIsSubmitting(true);
    fetch(`${API_URL}/users/verifyOTP`, {
      method: 'POST',
      body: JSON.stringify({
      phoneNumber: phoneNumber, // Assuming you have stored the user's phone number somewhere
      otp: otp
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
      if (data.message === 'OTP verification successful') {
        setIsOTPVerified(true);
        toast.success(data.message);
        try{
          dispatch(login(userData))
          console.log('it should be working now')
          navigate('/')
        }
        catch(err){
          console.log(err)
        }
      } else {
        setIsOTPVerified(false);
        toast.error(data.message);
      }
    })
    .catch(error => {
      //console.error(error);
      toast.error('An error occurred while verifying OTP');
    
    });
  }
  useEffect(() => {
    console.log(isEnabled)
  }, [isEnabled]);
  return (
    <>
    <TopNav/>
        <div className = 'Attributes'>
        <p className='text-[#004057] underline	'> Register </p>
        </div>
        <div className="centerContainer">
        <form onSubmit={onSubmit}>
        <div className="JobDescription">
            <p className="mx-2.5"> PHONE NUMBER</p>
            <input  onChange={onChange} value={phoneNumber} name ='phoneNumber' id = 'phoneNumber' class="shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="254703757369"></input>
            </div>
           
            <div className="flex justify-between">
            <div className="EmployersContact">
            <p className="mx-2.5"> PASSWORD</p>
            <input type='password' onChange={onChange} value={password} name='password'  id='password' class="JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Password'  ></input>
            </div>
            <div className="EmployersContact">
            <p className="mx-1.5">CONFIRM  PASSWORD</p>
            <input onChange={onChange} type='password' id='password2' value={password2}  name='password2' class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Password'  ></input>
            </div>
            </div>
          
            <button type="submit" class="bg-[#FFB246] hover:bg-orange-400 w-full my-5 text-black  py-3  hover:border-blue-500 rounded">
             Register
</button>


            

</form>
   {/* second form */}
   <form onSubmit={handleOTPSubmit} key={isEnabled ? 'enabled' : 'disabled'} className={isEnabled ? '' : 'opacity-50 pointer-events-none'}>
        <div className="JobDescription">
          <p className="">OTP</p>
          <input
            name="otp"
            id="otp"
            className="shadow appearance-none border rounded-sm w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter OTP sent to your phone"
          />
        </div>
        <button
          type="submit"
          className="bg-[#FFB246] rounded-md hover:bg-orange-400 w-full my-5 rounded text-black py-3 hover:border-blue-500 rounded"
          disabled={!isEnabled} // disable the button when the second form is disabled
        >
          Verify
        </button>
        {isEnabled && (
  <button
    type="button"
    className="bg-[#FFB246] rounded-md hover:bg-orange-400 w-full my-2 rounded text-black py-3 hover:border-blue-500 rounded"
    disabled={!isEnabled || countdown > 0} // Disable the button while counting down
    onClick={handleSendOTPAgain}
  >
    {countdown > 0 ? `Send OTP Again (${countdown}s)` : 'Send OTP Again'}
  </button>
)}

      </form>
      </div>

<ToastContainer />
<BottomNav/>
         </>
  )
}
