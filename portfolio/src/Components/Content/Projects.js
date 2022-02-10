import React from 'react';

export default function Contact() {
    return(
    <div>
        <h1>Let's Connect!</h1>
        <nav class="links d-block ms-auto text-center" id="contact-info">
            <ul class="links-list flex-row d-flex justify-content-center gap-3 ">
                <li>
                    {/* <a class="fa fa-user " style="font-size:33px" href="./Assets/PDF/resume.pdf"></a> */}
                    <p >Resume</p>
                </li>
                <li>
                    {/* <a class="fa fa-linkedin-square" style="font-size:33px" href="https://www.linkedin.com/in/talita-camargo-03a40a52/"></a> */}
                    <p>LinkedIn</p>
                </li>
                <li>
                    {/* <a class="fa fa-github" style="font-size:33px" href="https://github.com/taliitacamargo"></a> */}
                    <p>GitHub</p>
                </li>
                <li>
                    {/* <a class="fa fa-envelope" style="font-size:33px" href="mailto: taliitacamargo@icloud.com"></a> */}
                    <p>Email</p>
                </li>
            </ul>
        </nav>
    </div>
    );
}