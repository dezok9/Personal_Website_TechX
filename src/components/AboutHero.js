import React from 'react'
import headshot from '../assets/headshot.jpg'
import './AboutHero.css'


const AboutHero = () => {
    return (
        <div className = "about-container">
                <h1 className = "title">About Me</h1>
                <div className = "about-content">
                    <img src = {headshot} id = "headshot" alt = "Headshot" />
                    <div className = "info">
                        <h1 className = "name">Destiny Okonkwo</h1>
                        <h3>Computer Science (B.S.), Psychology (B.S.)</h3>
                        <h5>The University of North Carolina at Chapel Hill, Class of 2026</h5>
                        <p>Destiny is an undergraduate student at the University of North Carolina at Chapel Hill.
                        Originally from Gastonia, North Carolina, a small town outside of Charlotte, Destiny grew up with a passion for STEM and 
                        began her career in Computer Science in her sophomore year of high school.</p>
                        <p>In her free time, Destiny enjoys hanging out with friends, trying new things, and playing volleyball.</p>
                    </div>
                </div>
        </div>
    )
} 

export default AboutHero