import BottomNav from '../../components/BottomNav/BottomNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopNav from '../../components/TopNav/TopNav';
import { useState, useEffect } from 'react';
import { login } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export default function ForgotPassword() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isEnabled, setIsEnabled] = useState(false); // state to keep track of second form
  const [isSubmitting, setIsSubmitting] = useState(false); // state to keep track of whether form is submitting
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [isNewPasswordEnabled, setIsNewPasswordEnabled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const API_URL = process.env.REACT_APP_API_URL



  const handleOTPSubmit = (event) => {
    event.preventDefault();
    const otp = event.target.otp.value;
    setIsSubmitting(true);
    fetch(`${API_URL}/messages/verifyOTP`, {
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
        setIsNewPasswordEnabled(true);
        setIsEnabled(true); // enable third form if OTP is verified successfully
        toast.success('OTP verified successfully');
      } else {
        setIsOTPVerified(false);
        toast.error(data.message);
      }
      setIsSubmitting(false);
    })
    .catch(error => {
      console.error(error);
      toast.error('An error occurred while verifying OTP');
      setIsSubmitting(false);
    });
  }
  

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }
  const newPasswordSubmit = async (e) => {
    e.preventDefault();
    let userData ={phoneNumber,newPassword}
  
    try {
      const response = await fetch(`${API_URL}/users/updatePassword`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword, phoneNumber }),
      }) 
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
        if (data.message === 'Password updated successfully') {
          toast.success('Password updated successfully');
          dispatch(login(userData))
          navigate('/login')


        } else {
          setIsOTPVerified(false);
          toast.error(data.message);
        }
        setIsSubmitting(false);
      })
    } catch (error) {
      console.log(error);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    fetch(`${API_URL}/messages/sendOtp`, {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber: phoneNumber
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
      setIsEnabled(true);
      toast.info('OTP sent successfully, Please check your phone ')
      setIsSubmitting(false);
    })
    .catch(error => {
      console.error(error);
      toast.error('An error occurred while sending OTP');
      setIsSubmitting(false);
    });
  }
  
  useEffect(() => {
    console.log(isEnabled)
  }, [isEnabled]);
  const isallowed = newPassword.length > 0;
  return (
    <>
      <TopNav />
     
        <div className="centerContainer">
        <form onSubmit={handleSubmit}>
        <div className="Attributes">
          <p className="text-[#004057] underline "> Forgot Password? Don't Worry </p>
        </div>
          <div className="JobDescription">
            <p className="">PhoneNumber</p>
            <input
              name="phoneNumber"
              id="phoneNumber"
              className="shadow appearance-none border rounded-sm w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Your Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <button
            type="submit"
            className="bg-[#FFB246] rounded-md hover:bg-orange-400 w-full my-5 rounded text-black py-3 hover:border-blue-500 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending OTP...' : (isEnabled ? 'Resend OTP' : 'Send OTP')}
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
      </form>

        {/* third form */}
        <form onSubmit={newPasswordSubmit} key={isOTPVerified ? 'verified' : 'notverified'} className={isOTPVerified ? '' : 'opacity-50 pointer-events-none'}>
        <div className="JobDescription">
            <p className="">New Password</p>
            <input
                name="newPassword"
                id="newPassword"
                className="shadow appearance-none border rounded-sm w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={handleNewPasswordChange}
            />
              <button
          type="submit"
          className="bg-[#FFB246] rounded-md hover:bg-orange-400 w-full my-5 rounded text-black py-3 hover:border-blue-500 rounded"
          disabled={!isallowed} // disable the button when the second form is disabled
        >
              Set Password
        </button>
        </div>
        </form>
        

      
      </div>
      <ToastContainer />
      <BottomNav />
    </>
  );
}
