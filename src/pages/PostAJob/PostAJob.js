import React, {useState, useEffect} from "react";
import "./PostAJob.scss";
import Rightbar from "../../components/Rightbar/Rightbar";
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts';
import { useNavigate } from 'react-router-dom'
import { createGoal} from '../../features/jobs/jobSclice'
import BottomNav from '../../components/BottomNav/BottomNav';
import TopNav from "../../components/TopNav/TopNav";

export default function PostAJob() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user} = useSelector((state) => state.auth);

  const [postData, setPostData] = useState({ Employers_Name :'', jobDescription: '', EMPLOYER_EMAIL:'',Employers_contact: '', jobTitle: '', DeadlineDate: '' ,Category:''});
  const [text, setText] = useState('')

  useEffect(() => {
    console.log(`postData => `, postData);
  }, [postData])

  const handleSubmit=(e) => {
    e.preventDefault();
    if( user === null){
      alert('Please login to post a job')
      navigate('/login')
    }
    else if (postData.Employers_Name === '' || postData.jobDescription === '' || postData.EMPLOYER_EMAIL === '' || postData.Employers_contact === '' || postData.jobTitle === '' || postData.DeadlineDate === '' || postData.Category === '') {
      alert('Please fill all fields')
    } else {
      dispatch(createGoal(postData))
      alert('Job Posted Successfully')
      navigate('/')

    }

  
    }
  

    return (
         <>
         <TopNav/>
     <div className = 'Attributes '>
        <p> HOME | POST A JOB </p>
        </div>
      
        <div className="centerContainer">
        

        <form  onSubmit ={handleSubmit}>
            <div className="flex">
            <div className="PostCategory">
            <label for="categories" class="Selectcategory p-2.5"><x> Job</x> Category </label>
            <select id="categories" name='category' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block
              w-full  my-1 p-2.5 dark:border-gray-600 dak:placeholder-gray-400 dark:text-black" onChange ={(e) => setPostData({...postData,Category: e.target.value})}>
            <option selected>Category</option>
            <option 
            value = "Construction">
              Construction</option>
            <option  value = "Cooks">Cooks</option>
            
            <option  value = "Drivers"
            onChange ={(e) => setPostData({...postData,category: e.target.value})}>Drivers</option>
            
            <option  value = "Woodwork"
            onClick ={(e) => setPostData({...postData,category: e.target.value})}>Woodwork</option>

            <option  value = "Electricals "
            onClick ={(e) => setPostData({...postData,category: e.target.value})}>Electricals </option>
            <option  value = "Cleaning"
            onClick ={(e) => setPostData({...postData,category: e.target.value})}>Cleaning</option>
            <option  value = "Nannies "
            onClick ={(e) => setPostData({...postData,category: e.target.value})}>Nannies </option>
            <option  value = "Professional services"
            onClick ={(e) => setPostData({...postData,category: e.target.value})}>Professional services</option>
            
            <option  value = "Outside catering "
            onClick ={(e) => setPostData({...postData,category: e.target.value})}>Outside catering </option>
             <option  value = "Pets Services"
            onClick ={(e) => setPostData({...postData,category: e.target.value})}>Pets Services</option>
             <option  value = "Farming"
            onClick ={(e) => setPostData({...postData,category: e.target.value})}>Farming</option>
             <option  value = "Internships"
            onClick ={(e) => setPostData({...postData,category: e.target.value})}>Internships</option>
             <option  value = "Cooks "
            onClick ={(e) => setPostData({...postData,category: e.target.value})}>Cooks </option>

          </select>
            </div>
            
            <div className="employers-name " >
            <p className="mx-2.5"> Employers Name</p>
            <input 
            name='Employers_Name'
            id='Employers_Name'
            value = {postData.Employers_Name} 
            onChange ={(e) => setPostData({...postData,Employers_Name: e.target.value})}
            class="shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Name"></input>
            </div>
            </div>
            <div className="JobDescription">
            <p className="mx-2.5"> Job Post Title</p>
            <input  
             type='text'
             name='jobTitle'
             id='jobTitle'
             value = {postData.jobTitle} 
             onChange ={(e) => setPostData({...postData,jobTitle: e.target.value})}
           
            class="shadow appearance-none  border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   placeholder="Maximum 100 characters "></input>
            </div>
            <div className="JobDescription">
            <p className="mx-2.5"> Job Description</p>
            <textarea 
            name='jobDescription'
            id='jobDescription'
            value = {postData.jobDescription} 
            onChange ={(e) => setPostData({...postData,jobDescription: e.target.value})}
            class=" JobInputDescription  shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Max 500 characters "></textarea>
            </div>
            <div className="flex justify-between">
            <div className="EmployersContact">
            <p className="mx-2.5"> Employers Contact</p>
            <input 
            name='Employers_contact'
            id='Employers_contact'
            value = {postData.Employers_contact} 
            onChange ={(e) => setPostData({...postData,Employers_contact: e.target.value})}
            class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Phone Number"
            
            ></input>
            </div>
            <div className="EmployersContact">
            <p className="mx-2.5"> EMPLOYER’S  EMAIL</p>
            <input 
             name='EMPLOYER_EMAIL'
             id='EMPLOYER_EMAIL'
             value = {postData.EMPLOYER_EMAIL} 
             onChange ={(e) => setPostData({...postData,EMPLOYER_EMAIL: e.target.value})}
            class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Employer Email Address for applications"></input>
            </div>
            </div>
            <div className="flex justify-between">
            <div className="EmployersContact">
            <p className="mx-2.5"> APPLICATIONS DEADLINE DATE</p>
            <input 
             name='DeadlineDate'
             id='DeadlineDate'
             value = {postData.DeadlineDate} 
             onChange ={(e) => setPostData({...postData,DeadlineDate: e.target.value})}
            class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  type="date" data-date="" data-date-format="DD MMMM YYYY" placeholder=""></input>
            </div>

            
         
            <div className="EmployersContact">
            <div className="PostJobBTN">
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

    );

}