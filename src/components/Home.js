// import React from 'react'
// import './Home.css'
// import { Link } from 'react-scroll';
// import { FaArrowDown } from 'react-icons/fa';

// const Home = () => {
//     return (

//         <div className='home-header'>
//             <h1 className='typed'>Hi, I'm Mercedes.</h1>
//                 <div className='text-container'>
//                     <p class='text t1'>Software Developer</p>
//                     <p class='text t2'>Web Developer</p>
//                     <p class='text t3'>UI/UX Designer</p>
//                 </div> 

//                 {/* Flower Design */}
//                 <div class="flower-content">
//                     <div class="flower">
//                     <div class="small-petal small-petal1"></div>
//                     <div class="small-petal small-petal2"></div>
//                     <div class="small-petal small-petal3"></div>
//                     <div class="small-petal small-petal4"></div>
//                     <div class="small-petal small-petal5"></div>
//                     <div class="small-petal small-petal6"></div>
//                     <div class="small-petal small-petal7"></div>
//                     <div class="small-petal small-petal8"></div>
//                     </div>
//                 </div>

//                 {/* Arrow to scroll to next page */}
//                 <div class="arrow bounce">
//                     <a href='/about' className="faArrowDown">
//                         <Link to='about'>
//                             <FaArrowDown />
//                         </Link>
//                     </a>
//                 </div>
                
//         </div>
//     )
// }

// export default Home


import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.text');
        elements.forEach(element => {
            element.style.display = 'none';
            // Trigger a reflow using a function call
            const reflow = element.offsetHeight;
            element.style.display = '';
        });
    }, []);

    return (
        <div className='home-header'>
            <h1 className='typed'>Hi, I'm Mercedes.</h1>
            <div className='text-container'>
                <p className='text t1'>Software Developer</p>
                <p className='text t2'>Web Developer</p>
                <p className='text t3'>UI/UX Designer</p>
            </div> 

            {/* Flower Design */}
            <div className="flower-content">
                <div className="flower">
                    <div className="small-petal small-petal1"></div>
                    <div className="small-petal small-petal2"></div>
                    <div className="small-petal small-petal3"></div>
                    <div className="small-petal small-petal4"></div>
                    <div className="small-petal small-petal5"></div>
                    <div className="small-petal small-petal6"></div>
                    <div className="small-petal small-petal7"></div>
                    <div className="small-petal small-petal8"></div>
                </div>
            </div>

            {/* Arrow to scroll to next page */}
            <div className="arrow bounce">
                <a href='/about' className="faArrowDown">
                    <Link to='about'>
                        <FaArrowDown />
                    </Link>
                </a>
            </div>
        </div>
    );
};

export default Home;