import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import './Home.scss'
import { useSelector,useDispatch } from "react-redux";



const Home = () => {
  const { user} = useSelector((state) => state.auth);
  
  if(user){console.log(user)}
  else{console.log('No user')}

    return (
      <div>
       
         <div class="flex-containers">   
           
         <Sidebar />
         <Navbar />
         
        
         
        
       
         </div>
         

      </div>
      

    )
  }
export default Home