import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = ({toggle , setToggle}) => {

  return (
    <div className='sidebar' style={{left:toggle && "0"}} >
      <ul>
        <li>
            <Link to='/' className='sidebar-link' onClick={()=>setToggle(false)}><i className="bi bi-house-door-fill"></i>home</Link>
        </li>
        <li>
            <Link to='authors' className='sidebar-link' onClick={()=>setToggle(false)}><i className="bi bi-people-fill"></i>authors</Link>
        </li>
        <li>
            <Link to='about' className='sidebar-link' onClick={()=>setToggle(false)}><i className="bi bi-file-earmark-person-fill"></i>about</Link>
        </li>
        <li>
            <Link to='contact' className='sidebar-link' onClick={()=>setToggle(false)}><i className="bi bi-telephone-fill"></i>contact</Link>
        </li>
        <li>
            <Link to='register' className='sidebar-link' onClick={()=>setToggle(false)}><i className="bi bi-card-text"></i>register</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
