import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './routes/About'

function App() {
  return (
    <BrowserRouter>
    <Navbar /> 
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
