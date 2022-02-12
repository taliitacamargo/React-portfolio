import React from 'react';
import resume from '../assets/resume.pdf'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return(
    <div className = "container">
        <h1>Let's Connect!</h1>
        <nav className="links d-block ms-auto text-center" id="contact-info">
            <ul className="links-list flex-row d-flex justify-content-center gap-3 ">
                <li>
                    <a className="fa fa-user " style={{"fontSize":"33px"}}  href = {resume}>Resume</a>
                    
                </li>
                <li>
                    <a className="fa fa-linkedin-square" style={{"fontSize":"33px"}} href="https://www.linkedin.com/in/talita-camargo-03a40a52/">LinkedIn</a>
                    
                </li>
                <li>
                    <a className="fa fa-github" style={{"fontSize":"33px"}}  href="https://github.com/taliitacamargo">GitHub</a>
                   
                </li>
                <li>
                    <a className="fa fa-envelope" style={{"fontSize":"33px"}}  href="mailto: taliitacamargo@icloud.com">Email</a>
                    
                </li>
            </ul>
        </nav>
    </div>
    );
}