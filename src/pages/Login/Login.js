import React from 'react'

import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'
import TopNav from '../../components/TopNav/TopNav'
import BottomNav from '../../components/BottomNav/BottomNav';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const notify = () => toast("Wow so easy!");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  let [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  })
  const { phoneNumber, password } = formData
  
  useEffect(() => {
    if (isError) {
      toast.error('check password or phone number')
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      phoneNumber,
      password,
    }
    if(!phoneNumber || !password){
      toast.erro('Please fill in all fields')
    }
    // this code doesn't work as intended work on it
 
    else{
      try{
        console.log('login success')
        dispatch(login(userData))
       
      }
      catch(err){
        console.log(err)
        // toast message here 
        notify()

      }

    
   
  }
  }
  return (
    <>
     
        <TopNav />
    <form  onSubmit={onSubmit}>
    <div className = 'Attributes'>
        <p className='text-[#004057] underline '> Login </p>
        </div>
    <div className="centerContainer">
    
       
        <div className="JobDescription">
        <p  className="">PhoneNumber</p>
        <input onChange={onChange} value={phoneNumber} name ='phoneNumber' id = 'phoneNumber' class="shadow appearance-none  border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="254703757369"></input>
        </div>
        <div className="JobDescription">
        <p className=""> Password </p>
        <input onChange={onChange} value={password} name='password'  type="password" id='password' class="JobInputDescription  shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password"></input>
        </div>
        <button type="submit" class="bg-[#FFB246] rounded-md  hover:bg-orange-400 w-full my-5 rounded text-black  py-3  hover:border-blue-500 rounded">
          Login
        </button>
        <div className='flex space-between'>   
        <p> Not a memeber?</p>
        <Link to="/register"  >
        <div className = "underline  mx-1.5 ">Register Here</div>
        </Link>
        </div>
        <div className='flex space-between underline'>   
        <Link to="/forgotPassword"  >
        Forgot Password 
        </Link>
        </div>
        <div>
        
        <ToastContainer />
      </div>



        
        


</div>
</form>

<BottomNav/>




     </>
  )
}
