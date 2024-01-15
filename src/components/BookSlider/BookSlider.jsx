import React, { useContext, useState } from 'react';
import './BookSlider.css'
import Rating from '../Rating/Rating.jsx';
import CartContext from '../../Context/CartContext.js';
import Modal from '../Modal/Modal.jsx';

const BookSlider = ({books}) => {
    const [index,setIndex] = useState(0);
    const [openModal,setOpenModal] = useState(false);
    const [bookData,setBookData] =useState(null);
    const {addToCart}=useContext(CartContext);

    // Handle Click
    const clickHandler = (direction) => {
        if(direction === "left"){
            setIndex( index - 1 )
        } else {
            setIndex(index + 1)
        }
    }

    // Handle Modal
    const openModalHandler = (item) => {
        setOpenModal(true);
        setBookData(item)
    }

  return (
    <div className='book-slider-container'>
        { index >= 0 && 
            <i className='bi bi-chevron-left' onClick={()=>clickHandler("left")}></i>
        }
        <div className='book-slider-wrapper' style={{transform : `translateX(${index * - 227}px)`}}>
            {books.map((book)=>(
                <div className='book-slider-item' key={book.id}>
                    <div className='book-slider-item-img'>
                        <img src={`/books/${book.image}`} alt={book.title}/>
                        <div className='book-slider-item-layer'>
                            <h4 className='book-slider-item-title'>{book.title}</h4>
                            <Rating rating={book.rating}  reviews={book.reviews}/>
                            <span className='book-slider-item-price'>${book.price}</span>
                            <p className='book-slider-item-stock'>
                                {book.inStock ? "in Stock" : "Not in Stock"}
                            </p>
                        </div>
                    </div>
                    <div className='book-slider-item-icons'>
                        <i className='bi bi-eye-fill book-slider-item-icon' onClick={()=>openModalHandler(book)}></i>
                        <i className='bi bi-cart-plus book-slider-item-icon' onClick={()=>addToCart({...book,quantity:1})}></i>
                    </div>
                </div>
            ))}
        </div>
        {index <= books.length - 1 && <i className='bi bi-chevron-right' onClick={()=>clickHandler("right")}></i>}
        {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal}/>}
    </div>
  )
}

export default BookSlider
