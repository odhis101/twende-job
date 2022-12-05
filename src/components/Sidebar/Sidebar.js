import React from "react";
import './Sidebar.scss'

import Logo from '../../assets/img/Logo.png'

import { Link, useMatch, useResolvedPath } from "react-router-dom"

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
            <Link to="/Drivers" > <p class="button">Drivers (12)</p></Link>
            </li>
            <li>
            <Link to="/cooks" ><p class="button">Cooks (12)</p></Link>
            </li>
            <li>
            <Link to="/Woodwork" > <p class="button">Woodwork (5)</p></Link>
            </li>
            <li>
            <Link to="/Construction" >  <p class="button">Construction(3)</p></Link>
            </li>
            <li>
            <Link to="/register" >  <p class="button">Electricals (12)</p></Link>
            </li>
            <li>
            <Link to="/register" >  <p class="button">Cleaning (30)</p></Link>
            </li>
            <li>
            <Link to="/register" >  <p class="button">Nannies (18)</p></Link>
            </li>
            <li>
            <Link to="/register" >   <p class="button">Professional services (34)</p></Link>
            </li>
            <li>
            <Link to="/register" >  <p class="button">Outside catering (4)</p></Link>
            </li>
            <li>
            <Link to="/register" >   <p class="button">Pets Services (20)</p></Link>
            </li>
            <li>
            <Link to="/register" >   <p class="button">Farming (20)</p></Link>
            </li>
            <li>
            <Link to="/register" >   <p class="button">Hotels (20)</p></Link>
            </li>
            <li>
            <Link to="/register" >   <p class="button">Internships (8)</p></Link>
            </li>
            <li>
            <Link to="/register" >   <p class="button">Cooks (12)</p></Link>
            </li>
            <li>
            <Link to="/register" >   <p class="button">Woodwork (5)</p></Link>
            </li>
            <li>
            <Link to="/register" >  <p class="button">Office jobs (24)</p></Link>
            </li>
            <li>
            <Link to="/register" >  <p class="button">Part-time jobs (9)</p></Link>
            </li>
      
        <li>
        <Link to="/register" >  <p class="button">Retail & Shops (12)</p></Link>
            </li>
            <li>
            <Link to="/register" > <p class="button">Sales & Marketing (23)</p></Link>
            </li>
            <li>
            <Link to="/register" > <p class="button">Teaching(23)</p></Link>
            </li>
            </ul>
            </div>
        </div>
       
        
    );
}