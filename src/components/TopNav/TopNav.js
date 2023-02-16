import Logo from '../../assets/img/LogoM.png'
import './TopNav.scss'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { slide as Menu } from 'react-burger-menu'
export default function TopNav() {
 
    const { user } = useSelector((state) => state.auth)
   //npm console.log(user)

  const showSettings = (e) => {
    e.preventDefault();
  }

    return(
        
        <>
    
        <div class='flex justify-between checkmobile mt-2'>
        <img src = {Logo}   class ="logoM " alt = 'logo'></img>
        
            {user ? ( 
              <div className = 'mobileLogin py-4 mr-2'>
              
              <p class = "border-b-2 transition-colors duration-300 border-[#FFB246]  ">{user.phoneNumber}</p>   
              </div>

              ) : ( 
                <div className="loginM">
           <Link to="/login" className="bg-black  text-white font-bold py-1 px-3 hover:border-blue-500  loginBtn">
             Login
             </Link>
             <Link to="/register" className="bg-[#FFB246]  text-black font-bold  py-1 px-3 hover:border-blue-500  loginBtn">
             Register
             </Link>
           </div>
                
              )}
            
         </div>
     
         
       </>
    )

}
