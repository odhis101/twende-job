import React from 'react'
import Searchbar from '../../components/SearchBar/Searchbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import ClassifiedModule from '../../components/ClassifiedModule/ClassifiedModule'
import BottomNav from '../../components/BottomNav/BottomNav';
import Jobvacancies from '../../components/Jobvacancies/Jobvacancies';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
export default function ClassifiedJobs() {
// get data with axios 
const API_URL = process.env.REACT_APP_API_URL
const { user} = useSelector((state) => state.auth);
const { goals, isLoading, isError, message } = useSelector(
  (state) => state.subscriber
)
const currentDate = new Date().toISOString().slice(0, 10)
 const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${API_URL}/jobs/getClassifiedJobs`)
   // localhost axios
    // axios.get(`http://localhost:5000/jobs/getClassifiedJobs`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (goals == null) {
    console.log('waiting for data')
  }
  else if(goals != null){
    //console.log("we are here")
    //console.log(goals.subscribers[goals.subscribers.length-1].SubscriptionDate)
    if (goals.subscribers.length === 0  ) {
      alert("You have not subscribed to any plan")
      window.location.href = '/'
  
       }
      else{
        const expiryDate =goals.subscribers[goals.subscribers.length-1].expiry
        console.log("this is the expiry date", expiryDate)
        if (currentDate > expiryDate) {
          alert("Your subscription has expired")
          window.location.href = '/'
          // create a dispatch to update the db that the subscription has expired
        }

      }
  
  }

//console.log(data);
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
