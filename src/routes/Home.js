import React from 'react'
import Navbar from './../components/Navbar'
import Video from './../components/Video'
import Footer from './../components/Footer'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div styles = {{backgroundColor: '#54A9FE'}}>
            <Video />
        </div>
    )
}

export default Home;