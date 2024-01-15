import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = ["Home" , "Authors" , "About" , "Contact" , "Register"];

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-top'>
          <h2 className='footer-top-title'>Follow us</h2>
          <div className='footer-top-icons'>
            <i className="bi bi-facebook" style={{background:"#1976d2"}}></i>
            <i className="bi bi-instagram" style={{background:"#c9184a"}}></i>
            <i className="bi bi-twitter" style={{background:"skyBlue"}}></i>
            <i className="bi bi-telegram" style={{background:"#2980b9"}}></i>
            <i className="bi bi-youtube" style={{background:"red"}}></i>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-bottom-item'>
            <h3 className='footer-bottom-item-title'>useful links</h3>
            <ul className='footer-links'>
              {links.map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} className='footer-nav-link'>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='footer-bottom-item'>
            <h3 className='footer-bottom-item-title'>contact information</h3>
            <ul className='footer-links'>
              <li><i className="bi bi-geo-alt-fill"></i>Tanta-AlGharbiah-Egypt</li>
              <li><i className="bi bi-telephone-fill"></i>123-456-789</li>
              <li><i className="bi bi-envelope-fill"></i>info@fakeemail.com</li>
            </ul>
          </div>
          <div className='footer-bottom-item'>
            <h3 className='footer-bottom-item-title'>about us</h3>
            <p className='footer-bottom-desc'>
              Cupidatat reprehenderit qui reprehenderit ullamco sunt. Deserunt laboris sunt Lorem quis. Anim est pariatur irure aute irure nostrud laboris aute.
              Cupidatat reprehenderit qui reprehenderit ullamco sunt. Deserunt laboris sunt Lorem quis. Anim est pariatur irure aute irure nostrud laboris aute. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
