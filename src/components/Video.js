import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import bubbleVideo from '../assets/bubble_video.mov'

const Video = () => {
    return (
        <div className = "hero">
            <video autoPlay loop muted id = "video">
                <source src = {bubbleVideo} type = "video/mp4" />
            </video>
        <div className = "content">
            <h1><strong>Code. Theory. Applications.</strong></h1>
            <p>Working on projects to change communities.</p>
            <Link to = "/about" className = "btn">About</Link>
        </div>
        </div>
    )
}

export default Video