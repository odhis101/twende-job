import React, {useState, useEffect} from "react";
import "./PostAJob.scss";
import Rightbar from "../../components/Rightbar/Rightbar";
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts';
import { useNavigate } from 'react-router-dom'
import { createGoal} from '../../features/jobs/jobSclice'
import BottomNav from '../../components/BottomNav/BottomNav';
import TopNav from "../../components/TopNav/TopNav";
import axios from "axios";

export default function PostAJob() {
  const API_URL = process.env.REACT_APP_API_URL
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user} = useSelector((state) => state.auth);

  const [postData, setPostData] = useState({ Location:"",Employers_Name :'', jobDescription: '', EMPLOYER_EMAIL:'',Employers_contact: '', jobTitle: '', DeadlineDate: '' ,Category:'', });
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
    // code for classified jobs 
    else if (postData.Category === 'Classified'){
       if (postData.Employers_Name === '' || postData.jobDescription === '' || postData.EMPLOYER_EMAIL === '' || postData.Employers_contact === '' || postData.jobTitle === '' || postData.DeadlineDate === '' || postData.Category === '') {
        alert('Please fill all fields')
      }
      else {
        // create a axios post 
        axios.post(`${API_URL}/jobs/setClassifiedJob`, postData)
      }
    }
    else if (postData.Employers_Name === '' || postData.jobDescription === '' || postData.EMPLOYER_EMAIL === '' || postData.Employers_contact === '' || postData.jobTitle === '' || postData.DeadlineDate === '' || postData.Category === '') {
      alert('Please fill all fields')
    } else {
      dispatch(createGoal(postData))
      alert('Job Posted Successfully')
      navigate('/')

    }

  console.log(postData)
    }
  

    return (
         <>
         <TopNav/>
     <div className = 'Attributes mb-4'>
        <p><strong> HOME | POST A JOB </strong></p>
        </div>
      
        <div className="centerContainer">
        

        <form  onSubmit ={handleSubmit}>
            <div className="flex mt-5">
            <div className="PostCategory col-6">
            <label for="categories" class="Selectcategory mx-3.5 mt-2"><x> Job</x> Category </label>
            <select id="categories" name='category' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block
              w-full my-1 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" onChange ={(e) => setPostData({...postData,Category: e.target.value})}>
            <option selected>Category</option>
            <option value="Construction">Construction</option>
            <option value="Cooks">Cooks</option>
            <option value="Drivers">Drivers</option>
            <option value="Woodwork">Woodwork</option>
            <option value="Electricals">Electricals</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Nannies">Nannies</option>
            <option value="Professional services">Professional services</option>
            <option value="Outside catering">Outside catering</option>
            <option value="Pets Services">Pets Services</option>
            <option value="Farming">Farming</option>
            <option value="Internships">Internships</option>
            <option value="Cooks">Cooks</option>
            <option value="Classified">Classified</option>
            <option value="Professionals local">Professionals local</option>
            <option value="Professionals abroad">Professionals abroad</option>
            <option value="Casual jobs">Casual jobs</option>
            <option value="Internships">Internships</option>
            <option value="Casual long term">Casual long term</option>
            <option value="Freelance jobs">Freelance jobs</option>
</select>

            </div>
            
            <div className="employers-name col-6" >
            <p className="mx-1.5 mt-1 mb-0.5"> Employers Name</p>
            <input 
            name='Employers_Name'
            id='Employers_Name'
            value = {postData.Employers_Name} 
            onChange ={(e) => setPostData({...postData,Employers_Name: e.target.value})}
            class="shadow appearance-none border rounded-sm  w-full my-1 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Name"></input>
            </div>
            </div>
            <div className="JobDescription mt-5">
            <p className="mx-2.5"> Job Post Title</p>
            <input  
             type='text'
             name='jobTitle'
             id='jobTitle'
             value = {postData.jobTitle} 
             onChange ={(e) => setPostData({...postData,jobTitle: e.target.value})}
           
            class="shadow appearance-none  border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   placeholder="Maximum 100 characters "></input>
            </div>
            <div className="JobDescription mt-5">
            <p className="mx-2.5"> Job Description</p>
            <textarea 
            name='jobDescription'
            id='jobDescription'
            value = {postData.jobDescription} 
            onChange ={(e) => setPostData({...postData,jobDescription: e.target.value})}
            rows={8} // set the number of rows to 5
            class=" JobInputDescription  shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Max 500 characters "></textarea>
           
            </div>
            <div className="flex justify-between">
              <div className="EmployersContact mt-5">
                <p className="mx-2.5"> Employers Contact</p>
                <input 
                name='Employers_contact'
                id='Employers_contact'
                value = {postData.Employers_contact} 
                onChange ={(e) => setPostData({...postData,Employers_contact: e.target.value})}
                class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Phone Number"
                
                ></input>
              </div>
              <div className="EmployersContact mt-5">
                <p className="mx-2.5"> Employer’s  Email</p>
                <input 
                name='EMPLOYER_EMAIL'
                id='EMPLOYER_EMAIL'
                value = {postData.EMPLOYER_EMAIL} 
                onChange ={(e) => setPostData({...postData,EMPLOYER_EMAIL: e.target.value})}
                class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Employer Email Address for applications"></input>
              </div>
            </div>
            <div className="flex">
              <div className="EmployersContact mt-5">
              <p className="mx-2.5"> Location</p>
              <input 
              name='Location'
              id='Location'
              value = {postData.Location} 
              onChange ={(e) => setPostData({...postData,Location: e.target.value})}
              class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  type="text" placeholder="Job County"></input>
              </div>
            </div>
            <div className="flex">
              <div className="EmployersContact mt-5">
              <p className="mx-2.5"> APPLICATIONS DEADLINE DATE</p>
              <input 
              name='DeadlineDate'
              id='DeadlineDate'
              value = {postData.DeadlineDate} 
              onChange ={(e) => setPostData({...postData,DeadlineDate: e.target.value})}
              class=" JobInputDescription shadow appearance-none border rounded-sm  w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  type="date" data-date="" data-date-format="DD MMMM YYYY" placeholder=""></input>
              </div>
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

    );

}