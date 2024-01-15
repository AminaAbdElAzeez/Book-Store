import React, { useContext,useState } from 'react'
import Navbar from '../Navbar/Navbar';
import './Header.css'
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import CartContext from '../../Context/CartContext';

const Header = () => {
    const [toggle , setToggle] = useState(false)
    const {cartItemsLength} = useContext(CartContext);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-wrapper'>
            <button className='header-menu' onClick={()=>setToggle(prev=>!prev)}>
                {toggle ? <i className='bi bi-x'></i> : <i className='bi bi-list'></i>}
            </button>
            <Link to='/' className='logo'>
                <b>book</b>
                <i className='bi bi-book'></i>
                <b>store</b>
            </Link>
            <Navbar/>
            <Link to='cart' className='header-cart'>
              {cartItemsLength > 0 && (
                <b className='cart-notification'>{cartItemsLength}</b>
              )}
              <i className='bi bi-cart2'></i>
            </Link>
        </div>
      </div>
      <Sidebar toggle={toggle} setToggle={setToggle}/>
    </header>
  )
}

export default Header
