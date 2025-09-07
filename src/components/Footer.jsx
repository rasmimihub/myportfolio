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
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.linkedin.com/in/rashmi-pariyar-125467302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/rasmimihub/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/rasmimimimi/profilecard/?igsh=bmF1aWR4dTZ2Z25q" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
        </footer>
        </>
    );
}

export default Footer;