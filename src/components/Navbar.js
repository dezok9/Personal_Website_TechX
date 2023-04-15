import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <div className = "header">
            <Link to = '/'><h1>DESTINY OKONKWO</h1></Link>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to = '/' className = "link">Home</Link>
                </li>
                <li>
                    <Link to = '/about' className = "link">About</Link>
                </li>
            </ul>
            <div className = "hamburger" onClick = {handleClick}>
                {click ? (<FaTimes size = {20} style = {{color: 'white'}} />) : (<FaBars size = {20} style = {{color: 'white'}} />)}

            </div>
        </div>
    )
}

export default Navbar