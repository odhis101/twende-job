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
            <Link to="/"  ><p class="button">All </p></Link>
            </li>
            <li>
            <Link to="/category/Driver" > <p class="button">Drivers </p></Link>
            </li>
            <li>
            <Link to="/category/Cooks" ><p class="button">Cooks </p></Link>
            </li>
            <li>
            <Link to="/category/Woodwork" > <p class="button">Woodwork </p></Link>
            </li>
            <li>
            <Link to="/category/Construction" > <p class="button">Construction</p></Link>
            </li>
            <li>
            <Link to="/category/Electricals"><p class="button">Electricals </p></Link>
            </li>
            <li>
            <Link to="/category/Cleaning"><p class="button">Cleaning </p></Link>
            </li>
            <li>
            <Link to="/category/Nannies">  <p class="button">Nannies </p></Link>
            </li>
            <li>
            <Link to="/category/Profesional_Service"><p class="button">Professional services </p></Link>
            </li>
            <li>
            <Link to="/category/Catering" >  <p class="button">Outside catering </p></Link>
            </li>
            <li>
            <Link to="/category/PetService" >   <p class="button">Pets Services </p></Link>
            </li>
            <li>
            <Link to="/category/Farming" >   <p class="button">Farming </p></Link>
            </li>
            <li>
            <Link to="/category/Hotels" >   <p class="button">Hotels </p></Link>
            </li>
            <li>
            <Link to="/category/Internships" >   <p class="button">Internships </p></Link>
            </li>
         
            <li>
            <Link to="/category/Woodwork" >   <p class="button">Woodwork </p></Link>
            </li>
            <li>
            <Link to="/category/Office_jobs" >  <p class="button">Office jobs </p></Link>
            </li>
            <li>
            <Link to="/category/Part-time" >  <p class="button">Part-time jobs </p></Link>
            </li>
      
        <li>
        <Link to="/category/retail" >  <p class="button">Retail & Shops </p></Link>
            </li>
            <li>
            <Link to="/category/sales" > <p class="button">Sales & Marketing </p></Link>
            </li>
            <li>
            <Link to="/category/teaching" > <p class="button">Teaching</p></Link>
            </li>
            </ul>
            </div>
        </div>
       
        
    );
}