// eslint-disable-next-line no-unused-vars
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
// import About from './About';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import SignUp from './SignUp';
import Footers from './Footers';
import './App.css'


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      {/* <Route path='/about' element={<About />} /> */}
      <Route path='/contact' element={<Contact />}/>
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    <Footers />
      
    </>
  )
}

export default App