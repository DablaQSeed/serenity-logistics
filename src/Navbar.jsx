// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white shadow px-lg-4 py-lg-4 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-success d-flex align-items-center  fw-medium" href="#">
          <img src="src/img/serenitylogo.jpg" alt="" height='70px' /> Serenity</a>
          <button className="navbar-toggler text-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-success"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
              <li className="nav-item">
                <a className="nav-link active fs-6 fw-semibold" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <Link to='about' className="nav-link fs-6 fw-semibold active" href="#">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to='contact' className="nav-link fs-6 fw-semibold active" href="#">Contact Us</Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success me-3  fs-6 fw-semibold" type="submit">Sign In</button>
              <Link to='/signup' className='btn btn-success  fs-6 fw-semibold'>Sign Up</Link>
            </form>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar