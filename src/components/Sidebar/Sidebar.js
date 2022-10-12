import React from "react";
import './Sidebar.scss'
import Logo from '../../assets/img/Logo.png'
import Navbar from '../Navbar/Navbar'

export default function Sidebar() {
    return (
       
        <div className="container">
            <img src = {Logo} alt = 'logo'></img>
            <div className ='jobCategories'> Job categories</div>
            <div className= 'JobList'>
            <ul>
            <li>
                <p class="button">Click Me</p>
            </li>
            <li>
                <p class="button">Click Me</p>
            </li>
            <li>
                <p class="button">Click Me</p>
            </li>
            <li>
                <p class="button">Click Me</p>
            </li>
            <li>
                <p class="button">Click Me</p>
            </li>
            <li>
                <p class="button">Click Me</p>
            </li>
            <li>
                <p class="button">Click Me</p>
            </li>
            <li>
                <p class="button">Click Me</p>
            </li>
            <li>
                <p class="button">Click Me</p>
            </li>
        </ul>
            </div>
        </div>
       
        
    );
}