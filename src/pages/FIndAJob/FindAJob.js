import './FindAJob.scss'
import Looking from '../../assets/img/looking.png'
import Jobvacancies from '../../components/Jobvacancies/Jobvacancies';
import Help from '../../components/Help/Help'
import Searchbar from '../../components/SearchBar/Searchbar';
import JobofTheDay from '../../components/JobofTheDay/JobOfTheDay';
import Rightbar from '../../components/Rightbar/Rightbar';
export default function FindAJob() {
    const jobs = [<Jobvacancies id = {1} type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>, <Jobvacancies  type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>];
    return (
       <div className='flex'>
      
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


<Jobvacancies id = {1} type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>
<Jobvacancies type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>
<Jobvacancies type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>
<Jobvacancies type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>

<Jobvacancies type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>
<Jobvacancies type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>
<Jobvacancies type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>
<Jobvacancies type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>

<Jobvacancies type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>
<Jobvacancies type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>
<Jobvacancies type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>
<Jobvacancies type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>

</div>
<Rightbar/>
       </div>
        );
    }