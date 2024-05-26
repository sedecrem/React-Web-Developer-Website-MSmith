import React from 'react'
import './Skills.css'
import { FaCss3, FaHtml5, FaJava, FaPython, FaAngular, FaReact, FaVuejs, FaNodeJs, FaGithub, FaPhp, FaFigma, FaWordpress, } from 'react-icons/fa'
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { IoIosBowtie } from "react-icons/io";

const Skills = () => {
    return (
        <div className='skills'>
            <br></br>
            <br></br>

            <h1>My Skills</h1> 
            <h2>Welcome to my Toolbox</h2>
            <p>The skills, tools and technologies I use to bring my work to life.</p>

            <br></br>

            <div className='ticker-wrapper'>
            <div className='ticker'>
            <div className='icons'>
                <div className='icons-row'>
                    <div>
                        <FaHtml5 className='icon' />
                        <span>HTML</span>
                    </div>
                    <div>
                        <FaCss3 className='icon' />
                        <span>CSS</span>
                    </div>
                    <div>
                        <FaVuejs className='icon' /> 
                        <span>Vue.js</span>
                    </div>
                    <div>
                        <FaReact className='icon' />
                        <span>React</span>
                    </div>
                    <div>
                        <FaAngular className='icon' />
                        <span>Angular</span>
                    </div>
                    <div>
                        <FaWordpress className='icon' />
                        <span>WordPress</span>
                    </div>
                    <div>
                        <SiMysql className='icon' />
                        <span>MySql</span>
                    </div>
                    <div>
                        <BiLogoTypescript className='icon'/>
                        <span>TypeScript</span>
                    </div>
                </div>

                <br></br>

                <div className='icons-row'>
                    <div>
                        <FaNodeJs className='icon' />
                        <span>Node.js</span>
                    </div>
                    <div>
                        <FaGithub className='icon' />
                        <span>Github</span>
                    </div>
                    <div>
                        <FaJava className='icon' />
                        <span>Java</span>
                    </div>
                    <div>
                        <FaPython className='icon' />
                        <span>Python</span>
                    </div>
                    <div>
                        <FaPhp className='icon' />
                        <span>Php</span>
                    </div>
                    <div>
                        <FaFigma className='icon' />
                        <span>Figma</span>
                    </div>
                    <div>
                        <IoIosBowtie className='icon' />
                        <span>JHipster</span>
                    </div>
                    <div>
                        <BiLogoJavascript className='icon'/>
                        <span>Javascript</span>
                    </div>
                </div>
            </div>
            </div>
            </div>


        </div>
        
    )
}

export default Skills