import React from 'react'
import ClassifiedModule from '../../components/ClassifiedModule/ClassifiedModule'
import BottomNav from '../../components/BottomNav/BottomNav';
import { Link } from 'react-router-dom';
import TopNav from '../../components/TopNav/TopNav';
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createSkill} from '../../features/skills/skillSlice'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Skills ()  {
  const [postData, setPostData] = useState({ Names :'', skillDescription: '',phoneNumber: '' , Location: '',skillName: ''});
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user} = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(`postData => `, postData);
  }, [postData])


  const handleSubmit=(e) => {
    e.preventDefault();
    if( user === null){
      toast.error('please login to post a skill')
      navigate('/login')
    }
    else if (!postData.Names || !postData.skillDescription || !postData.phoneNumber || !postData.Location || !postData.skillName){
      toast.error('please fill in all fields')
    }
    else{
      dispatch(createSkill(postData))
      sessionStorage.setItem("showmsg", "1");
      navigate('/getSkills')
    }
    
  }
  return (
 
    <>
    <TopNav/>
<div className = 'Attributes mb-4'>
   <p><strong> HOME | Post A Skill </strong></p>
   </div>
 
   <div className="centerContainer">
   

   <form onSubmit={handleSubmit}>

       <div className="JobDescription mt-5">
       <p className="mx-2.5"> All Names</p>
       <input  
        type='text'
        name='Names'
        id='Names'
        value = {postData.Names} 
        onChange ={(e) => setPostData({...postData,Names: e.target.value})}
      
       class="shadow appearance-none  border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   placeholder="Maximum 100 characters "></input>
       </div>
       <div className="JobDescription mt-5">
       <p className="mx-2.5"> Skill Name</p>
       <input  
        type='text'
        name='skillName'
        id='skillName'
        value = {postData.skillName} 
        onChange ={(e) => setPostData({...postData,skillName: e.target.value})}
      
       class="shadow appearance-none  border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   placeholder="Maximum 100 characters "></input>
       </div>
       <div className="JobDescription mt-5">
       <p className="mx-2.5"> Skill Description</p>
       <textarea 
       name='skillDescription'
       id='skillDescription'
       value = {postData.skillDescription} 
       onChange ={(e) => setPostData({...postData,skillDescription: e.target.value})}
       class=" JobInputDescription  shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Max 500 characters "></textarea>
       </div>
       <div className="JobDescription mt-5">
       <p className="mx-2.5"> Location</p>
       <input  
        type='text'
        name='Location'
        id='Location'
        value = {postData.Names} 
        onChange ={(e) => setPostData({...postData,Location: e.target.value})}
      
       class="shadow appearance-none  border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   placeholder="Maximum 100 characters "></input>
       </div>
       <div className="flex justify-between">
         <div className="EmployersContact mt-5">
           <p className="mx-2.5">Phone Number</p>
           <input 
           name='phoneNumber'
           id='phoneNumber'
           value = {postData.phoneNumber} 
           onChange ={(e) => setPostData({...postData,phoneNumber: e.target.value})}
           class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Phone Number"
           
           ></input>
         </div>
      
         <div className="EmployersContact mt-5">
           <p className="mx-2.5"> Email</p>
           <input 
           name='Email'
           id='Email'
           value = {postData.Email} 
           onChange ={(e) => setPostData({...postData,Email: e.target.value})}
           class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Employer Email Address for applications"></input>
         </div>
       </div>
       <div className="flex">
       </div>
       <div className="flex">
       <div className="EmployersContact">
           <div className="PostJobBTN mt-5">
             <button type="submit" class="bg-[#FFB246] hover:bg-orange-400 w-full my-5 text-black  py-3  hover:border-blue-500 rounded">
               POST A JOB
             </button>            
           </div>
         </div>
       </div>
       
       

       </form>        
</div>


<BottomNav/>

    </>
 
  )
}
