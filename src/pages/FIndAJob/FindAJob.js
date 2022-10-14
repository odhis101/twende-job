import './FindAJob.scss'
import Looking from '../../assets/img/looking.png'
import Jobvacancies from '../../components/Jobvacancies/Jobvacancies';
import Help from '../../components/Help/Help'
export default function FindAJob() {
    return (
       <>
       <div className="centerContainer">
       <form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="  text-gray-900 text-sm rounded-lg   block w-full pl-10 p-2.5  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 " placeholder="Search jobs by entering keywords here" required />
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-[#FFB246] rounded-lg border">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>
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

<p className = "text-cyan-900 px-3.5"> JOB VACCANCIES</p>

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
<Jobvacancies type = {'Office Job'} date ={'30/09/2022'} title={'Aramel Transport and logistics'} description ={' Applications are invited from qualified persons for the above vacant position.'}/>

</div>
       </>
        );
    }