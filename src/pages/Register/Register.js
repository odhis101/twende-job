import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { register, reset } from '../../features/auth/authSlice'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//import Spinner from '../components/Spinner'
import BottomNav from '../../components/BottomNav/BottomNav';

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
    password2: '',
  })
  const { phoneNumber, password, password2 } = formData
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/users')
      console.log('yess')
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
    if (password !== password2) {
      toast.error('Passwords do not match')
      console.log('Passwords do not match')
    } else {
      const userData = {
        phoneNumber,
        password,
      }

      dispatch(register(userData))
    }
  }

  return (
    <>
        <div className = 'Attributes'>
        <p> Register </p>
        </div>
        <form onSubmit={onSubmit}>
        <div className="centerContainer">
        <div className="JobDescription">
            <p className="mx-2.5"> PHONE NUMBER</p>
            <input  onChange={onChange} value={phoneNumber} name ='phoneNumber' id = 'phoneNumber' class="shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Username"></input>
            </div>
           
            <div className="flex justify-between">
            <div className="EmployersContact">
            <p className="mx-2.5"> PASSWORD</p>
            <input type='password' onChange={onChange} value={password} name='password'  id='password' class="JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Username"></input>
            </div>
            <div className="EmployersContact">
            <p className="mx-2.5">CONFIRM  PASSWORD</p>
            <input onChange={onChange} type='password' id='password2' value={password2}  name='password2' class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Username"></input>
            </div>
            </div>
            <button type="submit" class="bg-[#FFB246] hover:bg-orange-400 w-full my-5 text-black  py-3  hover:border-blue-500 rounded">
             Register
</button>
            
            


</div>
</form>
         </>
  )
}
