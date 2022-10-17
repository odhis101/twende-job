import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Rightbar from '../../components/Rightbar/Rightbar'
export default function Register() {
  return (
    <>
        <div className = 'Attributes'>
        <p> Register </p>
        </div>
        <form action="">
        <div className="centerContainer">
            <div className="JobPostTitle">
            <p className="mx-2.5"> PHONE NUMBER</p>
            <input class="shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
            </div>
           
            <div className="flex justify-between">
            <div className="EmployersContact">
            <p className="mx-2.5"> PASSWORD</p>
            <input class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
            </div>
            <div className="EmployersContact">
            <p className="mx-2.5">CONFIRM  PASSWORD</p>
            <input class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
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
