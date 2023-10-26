// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footers = () => {
  return (
    <div className='container-fluid'>
        <footer className='bg-success text-white w-100' >
          <div className='row p-lg-5 p-md-3 p-3 justify-content-center' style={{marginTop:'100px'}}>
            <div className='col-lg-6 col-md-6'>
              <h4>Ease Logistics</h4>
              <p className='w-75'>Your Trusted Partner In Logistics And Supply Chain Management.</p>
            </div>
            <div className='col-lg-6 col-md-6'>
              <h4>Quick Links</h4>
              <ul className='list-unstyled'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            
          </div>
        </footer>
    </div>
  )
}

export default Footers