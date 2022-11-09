import './FindAJob.scss'
import Looking from '../../assets/img/looking.png'
import Jobvacancies from '../../components/Jobvacancies/Jobvacancies';
import { useSelector, useDispatch  } from 'react-redux';
import Help from '../../components/Help/Help'
import Searchbar from '../../components/SearchBar/Searchbar';
import JobofTheDay from '../../components/JobofTheDay/JobOfTheDay';
import Rightbar from '../../components/Rightbar/Rightbar';
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { getGoals, reset } from '../../features/jobs/jobSclice'
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import BottomNav from '../../components/BottomNav/BottomNav';
export default function FindAJob() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [value, setValue] = useState('')
    const { user } = useSelector((state) => state.auth)
    const { goals, isLoading, isError, message } = useSelector(
        (state) => state.jobs
      )
      useEffect(() => {

        if (isError) {
          console.log('there was an error while loading', message)
        }
    
    
        dispatch(getGoals())
    
       
      }, [user, navigate, isError, message, dispatch])
    console.log(goals)
    console.log("here is goasls",goals)
        return (

      
       <div className="centerContainer">
      <Searchbar/>
<div className='banner rounded-2xl flex flex-wrap text-center'>
    <div className='img'>
    <img src = {Looking} alt="banner" />
    </div>
    <div className='bannerText '>
        <p className='text-2xl'> KSH.10 TU!</p>
        <p className='text-3xl	'> THE EASIEST WAY TO FIND A JOB </p>
        <p className='text-4xl'> SMS JOBS TO 23511</p>
        <p className='text-3xl'> And get daily jobs vacancies updates</p>
       
        </div>
</div>

<p className = "text-cyan-900 px-3.5 "> JOB VACCANCIES</p>
{/*<!-- this code is buggy it wont doesnt wait for the data to be length -> */}

{

goals === undefined ? <p>loading</p> : 
goals.length > 0 ? (
          //goals is greater than 0
          goals.map((goal) => (
          <Jobvacancies key={goal._id} id = {1} type = {goal.jobTitle} date ={goal.DeadlineDate} title={goal.jobTitle} description ={goal.jobDescription}/>
          
          ))
          ) : (
          <h3>You have not set any goals</h3>
        )}
<BottomNav />
</div>

   
        );
    }