import React from 'react';
import resume from '../assets/resume.pdf'


import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaEnvelopeOpen} from "react-icons/fa";


export default function Contact() {
    return(
    <div className = "container">
        <h2>Let's Connect!</h2>
        
        <nav className="nav" id="contact-info">
            <ul className="links">
            <li>
                    <a style={{"fontSize":"45px"}}  href="mailto:taliitacamargo@icloud.com"><FaEnvelopeOpen className= "grow"/></a>
                    <small>Email</small>
                    
                </li>
                <li>
                    <a  style={{"fontSize":"45px"}}  href = {resume}><FaUserTie className= "grow"/></a>
                    <small>Resume</small>
                    
                </li>
                <li>
                    <a  style={{"fontSize":"45px"}} href="https://www.linkedin.com/in/talita-camargo-03a40a52/"><FaLinkedin className= "grow"/></a>
                    <small>LinkedIn</small>
                    
                </li>
                <li>
                    <a style={{"fontSize":"45px"}}  href="https://github.com/taliitacamargo"><FaGithubSquare className= "grow"/></a>
          
                    <small>GitHub</small>
                   
                </li>
              
            </ul>
        </nav>
    </div>
    );
}