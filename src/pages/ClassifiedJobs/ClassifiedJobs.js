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

const { user} = useSelector((state) => state.auth);
 const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:5000/jobs/getClassifiedJobs')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  

console.log(data);
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
