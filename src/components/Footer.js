import React from 'react'
import './FooterStyles.css'
import {Link} from 'react-router-dom'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className = "footer">
            <div className = "footer-container">
                <div className = "left">
                    <div className = "locaiton">
                        <h4><FaSearchLocation size = {20} style = {{color: "white", marginRight: '2rem'}} /> Chapel Hill, NC</h4>
                    </div>
                    <div className = "phone">
                        <h4><FaPhone size = {20} style = {{color: "white", marginRight: '2rem'}} /> (704) 670-7133</h4>
                    </div>
                    <div className = "email">
                        <h4><FaMailBulk size = {20} style = {{color: "white", marginRight: '2rem'}} /> duokonkwo.unc@gmail.com</h4>
                    </div>
                </div>
                <div className = "right">
                    <h4>Connect with me on social media!</h4>
                    <div>
                        <Link to = "https://www.instagram.com/destiny.okw/"><FaInstagram size = {30} style = {{color: "white", marginRight: '1rem'}} /></Link>
                        <Link to = "https://www.facebook.com/destiny.okonkwo.908"><FaFacebook size = {30} style = {{color: "white", marginRight: '1rem'}} /></Link>
                        <Link to = "https://www.linkedin.com/in/destiny-okonkwo/"><FaLinkedin size = {30} style = {{color: "white", marginRight: '1rem'}} /></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer