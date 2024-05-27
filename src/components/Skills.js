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

            <div className='icons'>
            <div className='icons-wrapper'>
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

            {/* Icons for mobile display */}
            <div className='mobile-icons'>
                <div className='mobile-icons-wrapper'>
                    <div className='mobile-icons-row'>
                        <div>
                            <FaHtml5 className='mobile-icon' />
                            <span>HTML</span>
                        </div>
                        <div>
                            <FaCss3 className='mobile-icon' />
                            <span>CSS</span>
                        </div>
                        <div>
                            <FaVuejs className='mobile-icon' />
                            <span>Vue.js</span>
                        </div>
                        <div>
                            <FaReact className='mobile-icon' />
                            <span>React</span>
                        </div>
                        <div>
                            <FaAngular className='mobile-icon' />
                            <span>Angular</span>
                        </div>
                        <div>
                            <FaWordpress className='mobile-icon' />
                            <span>WordPress</span>
                        </div>
                        <div>
                            <SiMysql className='mobile-icon' />
                            <span>MySql</span>
                        </div>
                        <div>
                            <BiLogoTypescript className='mobile-icon' />
                            <span>TypeScript</span>
                        </div>
                        <div>
                            <FaNodeJs className='mobile-icon' />
                            <span>Node.js</span>
                        </div>
                        <div>
                            <FaGithub className='mobile-icon' />
                            <span>Github</span>
                        </div>
                        <div>
                            <FaJava className='mobile-icon' />
                            <span>Java</span>
                        </div>
                        <div>
                            <FaPython className='mobile-icon' />
                            <span>Python</span>
                        </div>
                        <div>
                            <FaPhp className='mobile-icon' />
                            <span>Php</span>
                        </div>
                        <div>
                            <FaFigma className='mobile-icon' />
                            <span>Figma</span>
                        </div>
                        <div>
                            <IoIosBowtie className='mobile-icon' />
                            <span>JHipster</span>
                        </div>
                        <div>
                            <BiLogoJavascript className='mobile-icon' />
                            <span>Javascript</span>
                        </div>
                        {/* Duplicate icons for seamless scrolling */}
                        <div>
                            <FaHtml5 className='mobile-icon' />
                            <span>HTML</span>
                        </div>
                        <div>
                            <FaCss3 className='mobile-icon' />
                            <span>CSS</span>
                        </div>
                        <div>
                            <FaVuejs className='mobile-icon' />
                            <span>Vue.js</span>
                        </div>
                        <div>
                            <FaReact className='mobile-icon' />
                            <span>React</span>
                        </div>
                        <div>
                            <FaAngular className='mobile-icon' />
                            <span>Angular</span>
                        </div>
                        <div>
                            <FaWordpress className='mobile-icon' />
                            <span>WordPress</span>
                        </div>
                        <div>
                            <SiMysql className='mobile-icon' />
                            <span>MySql</span>
                        </div>
                        <div>
                            <BiLogoTypescript className='mobile-icon' />
                            <span>TypeScript</span>
                        </div>
                        <div>
                            <FaNodeJs className='mobile-icon' />
                            <span>Node.js</span>
                        </div>
                        <div>
                            <FaGithub className='mobile-icon' />
                            <span>Github</span>
                        </div>
                        <div>
                            <FaJava className='mobile-icon' />
                            <span>Java</span>
                        </div>
                        <div>
                            <FaPython className='mobile-icon' />
                            <span>Python</span>
                        </div>
                        <div>
                            <FaPhp className='mobile-icon' />
                            <span>Php</span>
                        </div>
                        <div>
                            <FaFigma className='mobile-icon' />
                            <span>Figma</span>
                        </div>
                        <div>
                            <IoIosBowtie className='mobile-icon' />
                            <span>JHipster</span>
                        </div>
                        <div>
                            <BiLogoJavascript className='mobile-icon' />
                            <span>Javascript</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Skills