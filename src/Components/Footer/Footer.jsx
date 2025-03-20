import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.jpg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="fotter-top">
        <div className="fotter-top-left">
          <img className='changeFooterLogo' src={footer_logo} alt="" />
          <p>I am a full-stack web devloper based in India.</p>
        </div>
        <div className="footer-top-right">
          <div className="fotter-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email'name="" id="" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy;2024 Anmol Raturi. All rights reserved </p>
        <div className="footer-bottom-right">
          <p>Term of Servies</p>
          <p>Privacy Policy</p>
          <p>Connect With me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
