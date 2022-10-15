import React from "react";
import "./PostAJob.scss";

export default function PostAJob() {
    return (
         <>
        <p> HOME | POST A JOB </p>
        <div className="centerContainer">
            <div className="flex">
            <div className="PostCategory">
            <label for="categories" class="Selectcategory p-2.5">Select Category </label>
            <select id="categories" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block
     w-full  my-1 p-2.5 dark:border-gray-600 dak:placeholder-gray-400 dark:text-black ">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
            </div>
            <div className="employers-name " >
            <p className="mx-2.5"> Employers Name</p>
            <input class="shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
            </div>
            </div>
            <div className="JobPostTitle">
            <p className="mx-2.5"> Job Post Title</p>
            <input class="shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
            </div>
            <div className="JobDescription">
            <p className="mx-2.5"> Job Description</p>
            <input class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
            </div>
            <div className="flex justify-between">
            <div className="EmployersContact">
            <p className="mx-2.5"> Employers Contact</p>
            <input class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
            </div>
            <div className="EmployersContact">
            <p className="mx-2.5"> Employers Contact</p>
            <input class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
            </div>

            </div>


</div>





         </>

    );

}