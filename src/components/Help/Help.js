import React from "react";
import "./Help.scss";
import { BsFacebook } from 'react-icons/bs';

import { SocialIcon } from 'react-social-icons';
 



export default function Help() {
    return (
        <div className="jobofthedayContainer">
            <p className ='text-xl text-sky-500 px-3.5'> Need help?</p>
            <p className ="text-cyan-900 px-3.5"> Call us on</p>
            <p className ="px-3.5 text-2xl"> 0721 123 456</p>
            <div className="SocialsContainer">
            <div className="Socials">
            <SocialIcon url="https://www.facebook.com/" />
            </div>
            <div className="Socials">
            <SocialIcon url="https://twitter.com/TwendeJobKE " size ='2x' />
            </div>
            <div className="Socials">
            <SocialIcon url="https://instagram.com/TwendeJobKE " size ='2x' />
            </div>
          

        </div>
     
        </div>

        
    );
}