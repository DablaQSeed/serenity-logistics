/* eslint-disable no-unused-vars */

import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div style={{marginTop:'130px'}}>
      <div className='container mt-5 py-lg-5'>
        <h3 className='text-center text-success'>Contact Us</h3>
        <div className="row align-items-center justify-content-center mt-4">
        <div className="col-lg-6 col-md-6 shadow-lg">
              <form action="#" className=' w-100 d-grid px-3 py-lg-5 py-4'>
            <div className=' w-100 d-flex mb-2'>
                <div className='d-grid w-50 pe-2'>
                  <label className='fs-6 fw-semibold text-success mb-1'>First Name:</label>
                  <input type="text" placeholder='First Name'
                  className='form-control p-lg-3 border shadow-lg fs-6 fw-medium' />
                </div>
                <div className='d-grid w-50 ps-2'>
                  <label className='fs-6 fw-semibold text-success mb-1'>Last Name:</label>
                  <input type="text" placeholder='Last Name'
                   className='form-control p-lg-3 border shadow-lg fs-6 fw-medium'/>
                </div>
            </div>
            <label htmlFor="#" className='fs-6 fw-semibold text-success mb-1'>Email:</label>
            <input type="text" className='form-control p-lg-3 border shadow-lg fs-6 fw-medium mb-2'
             placeholder='Enter Your Email' />
             <label htmlFor="#" className='fs-6 fw-semibold text-success mb-1' >Message:</label>
             <textarea className='border border-0 shadow-lg fs-6 fw-medium p-3'
             name="" id="" cols="30" rows="5" placeholder='Write Message'></textarea>
              <button className='btn btn-success my-3 w-25'>Submit</button>
              </form>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className='ps-lg-5 ps-md-4 mt-4'>
              <h6 className='mb-3 text-black fw-semibold'>Customer Support Information:</h6>
              <ul className='list-unstyled'>
                <li className='mb-3 fw-semibold'><a href="" className='text-decoration-none text-success'><i className="bi bi-telephone-fill me-3"></i> 2347081768244</a></li>
                <li className='mb-3 fw-semibold'><a href="" className='text-decoration-none text-success'><i className="bi bi-envelope-at-fill me-3"> </i>SupportTeam@Serenity.com.ng </a></li>
                <li className='mb-3 fw-semibold'><a href="" className='text-decoration-none text-success'><i className="bi bi-geo-alt-fill me-3"></i>Olagbemiro Hostel Shopping complex, Ogbomosho </a></li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className='row align-items-center bg-success p-lg-5 p-md-3 p-3 text-white mt-5'>
            <div className='col-lg-6 col-md-6'>
            <a className="navbar-brand text-white py-2 pe-2 fs-4 fw-bolder" href="#">
           Serenity</a>
              <p className='fw-semibold'>Receive Newsletters from us</p>
            </div>
            <form action="#" className='col-lg-6 col-md-6'>
              <input type="text" className='w-75 p-lg-3 p-md-2 rounded-start-3 p-1 border-0 border' placeholder='Enter Email Address' />
              <button  className='w-25 bg-primary fs-6 border-0 fw-semibold text-white p-lg-3 p-md-2 rounded-end-3 p-1 border'>Sign Up</button>
            </form>
          </div>
        
      </div>
    </div>
  )
}










export default Contact