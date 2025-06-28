import './Header.css';
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { IoCall } from "react-icons/io5"; //these are react icons imported to use inside code
import { Link } from 'react-router-dom'; {/** since pages are already imported in app we just use link */}

function Header () {
    
    return (
        <nav className="header-bar">
            <Link className='nav-link' to="/">Home<AiFillHome/></Link>
            <Link className='nav-link' to="/about">About<FaUser/></Link>
            <Link className='nav-link' to="/projects" >Projects<GoProject/></Link>
            <Link className='nav-link' to="/contacts">Contact<IoCall/></Link>
        </nav>
    );
}

export default Header;