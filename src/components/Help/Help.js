import React from "react";
import "./Help.scss";
import { BsFacebook } from 'react-icons/bs';

import { SocialIcon } from 'react-social-icons';
 



export default function Help() {
    return (
        <div className="jobofthedayContainer">
            <p className ='text-xl text-sky-500 px-3.5'> Need help?</p>
            <p className ="text-cyan-900 px-3.5"> Call us on</p>
            <p className ="px-3.5 text-cyan-900 text-2xl"><a href="tel:0721123456"> +254 742 303030</a></p>
            <p className ="text-cyan-900 px-3.5">Or find us here </p>
            <div className="SocialsContainer">
            <div className="Socials">
            <SocialIcon url="https://www.facebook.com/profile.php?id=100086151296719" />
            </div>
            <SocialIcon url="https://www.instagram.com/twendejob/?igshid=ZDdkNTZiNTM%3D" />
            <div className="Socials">
            <SocialIcon url="mailto:info@twendejob.co.ke" />
            </div>
      

        </div>
     
        </div>

        
    );
}