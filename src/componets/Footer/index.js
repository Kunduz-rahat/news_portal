import React from "react";
import './style.css'

const Footer = () => {
  return (
    <footer className='footer'>

      <div className='row'>
        <div className='col-md-6 d-flex justify-content-between'>

          <div>
            <h6>Themes</h6>
            <p>Europe</p>
            <p>World</p>
            <p>Business</p>
            <p>Sport</p>
          </div>
          <div>
            <h6>Services</h6>
            <p>Live</p>
            <p>Bulletin</p>
            <p>All Weather</p>
            <p>Just In</p>
          </div>
          <div>
            <h6>More</h6>
            <p>About Euronews</p>
            <p>Commercial Services</p>
            <p>EU Coverage</p>
            <p>Temps</p>
          </div>
        </div>
        <div className='col-md-6'>
          <h6>Follow Us ></h6>
          <div className='d-flex mt-4'>
            <div className='icons me-3'>
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className='icons me-3'>
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className='icons me-3'>
              <i className="fab fa-instagram"></i>
            </div>
            <div className='icons me-3'>
              <i className="fab fa-twitter"></i>
            </div>
            <div className=' icons me-2'>
              <i className="fab fa-youtube"></i>
            </div>


          </div>
          <h6 className='mt-4'>Newsletters</h6>
        </div>
      </div>
    </footer>
  )
}
export default Footer