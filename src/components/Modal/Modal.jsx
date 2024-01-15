import React, { useContext, useState } from 'react'
import Rating from '../Rating/Rating';
import CartContext from '../../Context/CartContext';
import './Modal.css'
import { Link } from 'react-router-dom';

const Modal = ({bookData,setOpenModal}) => {
    const [qty,setQty] =useState(1);
    const {addToCart} = useContext(CartContext);
    const {title , image , author , price , rating , reviews , inStock ,id} = bookData;
  return (
    <div className='modal-container' onClick={()=>setOpenModal(false)}>
        <div className='modal-content' onClick={(e)=>e.stopPropagation()}>
            <i className='bi bi-x-circle-fill' onClick={()=>setOpenModal(false)}></i>
            <div className='container'>
                <div className='modal-content-items'>
                    <div className='modal-content-img'>
                        <img src={`/books/${image}`} alt={title}/>
                    </div>
                    <div className='modal-content-info'>
                        <h2 className='modal-content-info-title'>{title}</h2>
                        <p className='modal-content-info-stock'>
                            <b>Stock</b> : {inStock ? "in Stock" : "Not in Stock"}
                        </p>
                        <Rating rating={rating} reviews={reviews}/>
                        <p className='modal-content-info-author'>
                            <b>Author</b> : {author}
                        </p>
                        <p className='modal-content-info-price'>
                            <b>Price</b> : ${price}
                        </p>
                        <div className='modal-add-to-cart'>
                            <input className='modal-add-to-cart-input' type='number' min='1' max='100' value={qty} onChange={e=>setQty(e.target.value)}/>
                            <button className='modal-add-to-cart-btn' onClick={()=>addToCart({...bookData,quantity:qty})}>
                                <i className='bi bi-cart-plus'></i>
                                add yo cart
                            </button>
                        </div>
                        <Link to={`/book/${id}`} className='modal-content-info-link' onClick={()=>setOpenModal(false)}>
                            see more details...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal
