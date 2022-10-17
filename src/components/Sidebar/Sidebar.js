import React from "react";
import './Sidebar.scss'
import Logo from '../../assets/img/Logo.png'
import Navbar from '../Navbar/Navbar'

export default function Sidebar() {
    const hello = () => {
    console.log('hello')
    }
    return (
       
        <div className="container">
            <img src = {Logo} alt = 'logo'></img>
            <div className ='jobCategories'> Job categories</div>
            <div className= 'JobList'>
            <ul>
            <li>
                <p class="button" onClick = { hello }>All (2,356)</p>
            </li>
            <li>
                <p class="button">Drivers (20)</p>
            </li>
            <li>
                <p class="button">Cooks (12)</p>
            </li>
            <li>
                <p class="button">Woodwork (5)</p>
            </li>
            <li>
                <p class="button">Construction(3)</p>
            </li>
            <li>
                <p class="button">Electricals (12)</p>
            </li>
            <li>
                <p class="button">Cleaning (30)</p>
            </li>
            <li>
                <p class="button">Nannies (18)</p>
            </li>
            <li>
                <p class="button">Professional services (34)</p>
            </li>
            <li>
                <p class="button">Outside catering (4)</p>
            </li>
            <li>
                <p class="button">Pets Services (20)</p>
            </li>
            <li>
                <p class="button">Farming (20)</p>
            </li>
            <li>
                <p class="button">Hotels (20)</p>
            </li>
            <li>
                <p class="button">Internships (8)</p>
            </li>
            <li>
                <p class="button">Cooks (12)</p>
            </li>
            <li>
                <p class="button">Woodwork (5)</p>
            </li>
            <li>
                <p class="button">Office jobs (24)</p>
            </li>
            <li>
                <p class="button">Part-time jobs (9)</p>
            </li>
      
        <li>
                <p class="button">Retail & Shops (12)</p>
            </li>
            <li>
                <p class="button">Sales & Marketing (23)</p>
            </li>
            <li>
                <p class="button">Teaching(23)</p>
            </li>
            </ul>
            </div>
        </div>
       
        
    );
}