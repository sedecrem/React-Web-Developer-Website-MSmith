import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='header'>
          <h1>✿SEDECREM✿</h1>
          <div className='menu-icon' onClick={toggleMenu}>
            {<FaBars />}
          </div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a className='back-button' onClick={toggleMenu} href="#"><FaTimes /></a>
          <li>
            <Link to='about' onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to='skills' onClick={toggleMenu}>Skills</Link>
          </li>
          <li>
            <Link to='experience' onClick={toggleMenu}>Experience</Link>
          </li>
          <li>
            <Link to='contact' onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='icons-nav'>
        <a href="https://linkedin.com/in/mercedes-smith-"><FaLinkedin /></a>
        <a href="https://github.com/sedecrem"><FaGithub /></a>
        <a href="https://twitter.com/mercedesjs_"><FaTwitter /></a>
      </div>
    </div>
  );
};

export default Navbar;