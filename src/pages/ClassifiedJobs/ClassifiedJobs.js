import React from 'react'
import Searchbar from '../../components/SearchBar/Searchbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import ClassifiedModule from '../../components/ClassifiedModule/ClassifiedModule'
import BottomNav from '../../components/BottomNav/BottomNav';
import Jobvacancies from '../../components/Jobvacancies/Jobvacancies';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSubscribers } from '../../features/subscriptions/subscriptionSlice'
import { useNavigate } from 'react-router-dom'

export default function ClassifiedJobs() {
// get data with axios 
const API_URL = process.env.REACT_APP_API_URL
const dispatch = useDispatch()
const navigate = useNavigate()

const { user} = useSelector((state) => state.auth);
const { goals, isLoading, isError, message } = useSelector(
  (state) => state.subscriber
)
useEffect(() => {
  if (isError) {
    console.log('there was an error while loading', message)
  }    
  dispatch(getSubscribers({phoneNumber:user.phoneNumber})) 
}, [user, navigate, isError, message, dispatch])  
console.log(goals)
const currentDate = new Date().toISOString().slice(0, 10)
 let [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${API_URL}/jobs/getClassifiedJobs`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("this is the data", data)
  if (goals === null) {
    console.log('waiting for data')
  }
  else if(goals != null){
    console.log("this is the goals", goals)
    if (goals.subscribers.length === 0  ) {
      alert("You have not subscribed to any plan")
      window.location.href = '/'
  
       }
      else{

        const expiryDate =goals.subscribers[goals.subscribers.length-1].expiry
        console.log("this is the expiry date", expiryDate)

        if (currentDate > expiryDate) {
          alert("Your subscription has expired")
          data = []
          window.location.href = '/'
          // create a dispatch to update the db that the subscription has expired
        }

      }
  
  }

console.log('testing subs', data);
console.log('testing subs goals ', user);
  return (
    <div>
        
      <div className="flex">
      <div className="centerContainer">
      
      <div className = 'Attributes'>
        <p> CLASSIFIEDS JOBS</p>
        </div>
   
        {data.map((item) => (
          <ClassifiedModule
            id = {item._id}
            Employers_Name={item.Employers_Name}
            jobDescription={item.jobDescription}
            EMPLOYER_EMAIL={item.EMPLOYER_EMAIL}
            Employers_contact={item.Employers_contact}
            jobTitle={item.jobTitle}
            DeadlineDate={item.DeadlineDate}
            Category={item.Category}
          />
        ))}

      </div>
  
      </div>
      <BottomNav/>
        
    </div>
  )
}
