import React  from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = ["Home" , "Authors" , "About" , "Contact" , "Register"];

  return (
    <nav>
      <ul className='nav-links'>
        {links.map((link) => (
            <li key={link}>
                <Link to={`/${link.toLowerCase()}`} className='nav-link'>{link}</Link>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
