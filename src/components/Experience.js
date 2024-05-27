import React, {useEffect} from 'react'
import './Experience.css'
import resume from '../assets/resume.pdf'

const Experience = () =>{
    useEffect(() => {
        const sr = window.ScrollReveal();

        if (window.innerWidth < 768) {
            document.querySelectorAll('.timeline-content').forEach((item) => {
                item.classList.remove('js--fadeInLeft');
                item.classList.add('js--fadeInRight');
            });

            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
        } else {
            sr.reveal('.js--fadeInLeft', {
                origin: 'left',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });

            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
        }
    }, []);

    return (
        <div id='experience' className='exp'>
            <br></br>
            <br></br>

            <h1>Experience</h1>
            <h2>Let's take a walk down my journey in this field</h2>

            <br></br>
            <br></br>

            <section className='timeline'>

                <div className='container'>
                    <div className='timeline-item'>

                        <div class="timeline-img"></div>
                        <div className='timeline-content js--fadeInLeft'>
                            <h2>Programmer</h2>
                            <h3>eGov Jamaica</h3>
                            <div className='date'>Sept 2023 - Present</div>

                                <br></br>
                                <p>• Develop robust web applications using JHipster and utilizing the full-stack capabilities of Spring Boot on the backend and Angular on the frontend. </p>
                                <p className='mobile'>• Design and implement architecture for projects to illustrate the flow of data between different components.</p>
                                <p className='mobile'>• Create detailed developer documentation, providing insights into project setup and deployment procedures</p>
                        </div>
                    </div>

                    <div className='timeline-item'>

                        <div class="timeline-img"></div>
                        <div className='timeline-content js--fadeInRight mobile-right'>
                            <br></br>
                            <h2>Application Engineer Intern</h2>
                            <h3>eGov Jamaica</h3>
                            <div className='date-right'>May 2023 - Sept 2023</div>
                            
                                <br></br>
                                <p>• UI/UX design using Figma and Adobe XD.</p>
                                <p>• Implementation of designs using Angular Framework and JHipster Development Platform.</p>
                        </div>
                    </div>

                    <div className='timeline-item'>

                        <div class="timeline-img"></div>
                        <div className='timeline-content js--fadeInLeft'>
                            <h2 className='third-head'>Web Dev Intern</h2>
                            <h3>Mona GeoInformatics Institute</h3>
                            <div className='date'>June 2022 - Sept 2022</div>
            
                                <br></br>
                                <p className='mobile'> • UI/UX design and implementation using Figma .</p>
                                <p> • Implementation of designs using React Framework.</p>
                                <p> • Development and maintenance of website using WordPress.</p>
                                <p className='mobile'> • Facilitate learning as a tutor for the International Gaming Technology 2022 Summer Coding Camp.</p>

                        </div>
                    </div>

                    <br></br>
                </div>
            </section>

            <section className='resume'>
                <h2>Want more in depth details?</h2>
                    <p>Check out my Resume below</p>
                    <br></br>
                    <a href={resume} class="button">Download my Resume</a>
            </section>

            <br></br>
            <br></br>
        </div> 
    )
}

export default Experience