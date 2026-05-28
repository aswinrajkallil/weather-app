import React from 'react'
import './Footer.css'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='footer'>
        <footer className="footer">

        <div className="footer-links">

            <a href="https://aswinraj.dev" target="_blank" rel="noopener noreferrer">
            <FiExternalLink />
            
            </a>

            <a href="https://www.linkedin.com/in/aswinrajkallil" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            
            </a>

            <a href="mailto:aswinrajcholakuzhi@gmail.com">
            <MdEmail />
            
            </a>

            <a href="https://instagram.com/aswinraj.dev" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            
            </a>

            <a href="https://github.com/aswinrajkallil" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            
            </a>

        </div>

        <p>© 2026 Aswin. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer;
