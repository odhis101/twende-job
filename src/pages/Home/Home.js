import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import './Home.scss'
import { useSelector,useDispatch } from "react-redux";




const Home = props => {
  const { user} = useSelector((state) => state.auth);
  const{isVerified} = useSelector((state) => state.auth);

  const { match, history } = props;
  
  if(user){console.log('users is here user',user)}
  else{console.log('No user')}


    return (
      <div>
       
         <div class="flex-containers">   
         <Navbar />
         
        
         
        
       
         </div>
         

      </div>
      

    )
  }
export default Home