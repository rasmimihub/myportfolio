import './Footer.css';
import { FaRegCopyright } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer () {
    return (
        <>
        <footer className='footer'>
        <p><FaRegCopyright/>All rights reserved.
        Made with <FaRegHeart /> by Rashmi. </p>
        <div className="social-icons">
        <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
        </footer>
        </>
    );
}

export default Footer;