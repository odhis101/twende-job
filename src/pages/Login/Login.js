import React from 'react'

export default function Login() {
  return (
    <>
     <div className = 'Attributes'>
        <p> Login </p>
        </div>
    <form action="">
    <div className="centerContainer">
       
        <div className="JobDescription">
        <p className=""> Job Post Title</p>
        <input class="shadow appearance-none  border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
        </div>
        <div className="JobDescription">
        <p className=""> Job Description</p>
        <input class=" JobInputDescription  shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
        </div>
        <button type="submit" class="bg-[#FFB246] rounded-md  hover:bg-orange-400 w-full my-5 rounded text-black  py-3  hover:border-blue-500 rounded">
          Login
</button>
        
        


</div>
</form>





     </>
  )
}
