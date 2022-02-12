import React from 'react';
import resume from '../assets/resume.pdf'


import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaEnvelopeOpen} from "react-icons/fa";


                    



export default function Contact() {
    return(
    <div className = "container">
        <h1>Let's Connect!</h1>
        <nav className="nav" id="contact-info">
            <ul className="links">
            <li>
                    <a style={{"fontSize":"50px"}}  href="mailto:taliitacamargo@icloud.com"><FaEnvelopeOpen/></a>
                    <small>Email</small>
                    
                </li>
                <li>
                    <a  style={{"fontSize":"50px"}}  href = {resume}><FaUserTie/></a>
                    <small>Resume</small>
                    
                </li>
                <li>
                    <a  style={{"fontSize":"50px"}} href="https://www.linkedin.com/in/talita-camargo-03a40a52/"><FaLinkedin/></a>
                    <small>LinkedIn</small>
                    
                </li>
                <li>
                    <a style={{"fontSize":"50px"}}  href="https://github.com/taliitacamargo"><FaGithubSquare/></a>
                        
                    <small>GitHub</small>
                   
                </li>
              
            </ul>
        </nav>
    </div>
    );
}