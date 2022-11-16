import Logo from '../../assets/img/LogoM.png'
import './TopNav.scss'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";

export default function TopNav() {
 
    const { user } = useSelector((state) => state.auth)

    return(
        
        <>
        <div class='flex justify-between checkmobile'>
        <img src = {Logo}  class ="logoM " alt = 'logo'></img>
            {user ? ( 
              <div className = 'mobileLogin py-4 '>
              
              <p class = "border-b-2 transition-colors duration-300 border-[#FFB246]  ">+254703757369</p>   
              </div>

              ) : ( 
                <div className="loginM">
           <Link to="/login" className="bg-black  hover:bg-gray-700 text-white font-bold py-1 px-3 hover:border-blue-500 rounded-full">
             Login
             </Link>
      <Link to="/register" className="bg-[#FFB246] hover:bg-orange-400 text-black font-bold  py-1 px-3 hover:border-blue-500 rounded-full">
             Register
             </Link>
           </div>
                
              )}
            
         </div>
         
       </>
    )

}
