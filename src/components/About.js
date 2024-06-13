import React from 'react'
import './About.css'
import me from '../assets/me.png';

const About = () => {
    return (
        <div className='about'>
            <br></br>
            <br></br>

            <h1>About Me</h1>

            <img src={me} alt="An amazing picture of me :)" className='img-m'/> {/* eslint-disable-next-line */}

            <br></br>
            <br></br>

            <h2>Who is Mercedes?</h2>

            <p> I enjoy developing things for the internet. 
                My interest in web development began in 2020 during my first year of university. 
                After taking my first course in web development I realized how fun it was editing 
                websites using HTML & CSS. Fast-Forward to today where I have had the opportunity 
                to develop and improve these skills in the professional sphere.
            </p>

            <p className='p2'> I am now, almost a year after graduating, hoping to develop more projects to 
                showcase my talents and land more opportunities. I am also developing an interest in work on
                backend systems with my working knowledge of Java, Python, SQL, PHP etc.
            </p>

            <br></br>

            <a href="mailto:mercedessmith7389@gmail.com"> Contact Me</a>

         
            <img src={me} alt="An amazing picture of me :)" className='img'/> {/* eslint-disable-next-line */}
          

            <br></br>
            <br></br>
            <br></br>

        </div> 
    )
}

export default About