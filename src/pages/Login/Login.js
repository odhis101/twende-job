import React from 'react'

import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'
import BottomNav from '../../components/BottomNav/BottomNav';

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  })
  const { phoneNumber, password } = formData
  
  useEffect(() => {
    if (isError) {
      toast.error(message)
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
      alert('Please fill in all fields')
    }else{

    dispatch(login(userData))
  }
  }
  return (
    <>
     <div className = 'Attributes'>
        <p> Login </p>
        </div>
    <form  onSubmit={onSubmit}>
    <div className="centerContainer">
       
        <div className="JobDescription">
        <p  className="">PhoneNumber</p>
        <input onChange={onChange} value={phoneNumber} name ='phoneNumber' id = 'phoneNumber' class="shadow appearance-none  border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Username"></input>
        </div>
        <div className="JobDescription">
        <p className=""> Password </p>
        <input onChange={onChange} value={password} name='password'  id='password' class="JobInputDescription  shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Username"></input>
        </div>
        <button type="submit" class="bg-[#FFB246] rounded-md  hover:bg-orange-400 w-full my-5 rounded text-black  py-3  hover:border-blue-500 rounded">
          Login
</button>
        
        


</div>
</form>

<BottomNav/>




     </>
  )
}
