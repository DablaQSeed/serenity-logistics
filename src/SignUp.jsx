// eslint-disable-next-line no-unused-vars
import React from 'react'

const SignUp = () => {
  return (
    <div style={{marginTop:'130px'}}  className='d-flex align-items-center flex-column text-success'>
        <div className='col-11 col-lg-6 col-md-10 text-center text-success py-4 px-2'>
            <h3>Create an Account</h3>
            <p className='fs-6 fw-semibold'>Enter Valid Email</p>

        <form action="#" className='d-flex flex-column  align-items-center justify-content-center py-5  shadow-lg w-100 px-4 px-md-5 px-lg-5 rounded-2'>
            <input type="text" className='rounded-3 p-3 p-md-4 mb-3 w-100 border border-black ' placeholder='First Name' />
            <input type="text" className='rounded-3 p-3 p-md-4 mb-3 w-100 border border-black ' placeholder='Last Name' />
            <input type="text" className='rounded-3 p-3 p-md-4 mb-3 w-100 border border-black ' placeholder='Email' />
            <input type="text" className='rounded-3 p-3 p-md-4 mb-3 w-100 border border-black ' placeholder='Referal Code' />
            <button className='btn btn-success mb-3'>Submit</button>
            <a className='btn btn-outline-success fs-6'>Have an account? Sign In</a>
        </form>
        </div>
    </div>
  )
}

export default SignUp