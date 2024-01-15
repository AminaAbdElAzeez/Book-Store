import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import {books} from '../../data/books.js'
import Rating from '../../components/Rating/Rating';
import CartContext from '../../../src/Context/CartContext.js';
import './Book.css';

const Book = () => {
  const [qty , setQty] = useState(1);
  const {addToCart}= useContext(CartContext);
  const {id}=useParams();
  const book = books.find((b)=>b.id === +id)

  return (
    <section className='book'>
      <div className='container'>
        <div className='book-wrapper'>
          <img src={`/books/${book.image}`} alt={book.title}/>
          <div className='book-content-info'>
            <h2 className='book-title'>{book.title}</h2>
            <p className='book-author'>by <b>{book.author}</b></p>
            <Rating rating={book.rating} reviews={book.reviews}/>
            <div className='book-add-to-cart'>
              <input className='book-add-to-cart-input' type='number' min='1' max='100' value={qty} onChange={e=>setQty(e.target.value)} />
              <button className='book-add-to-cart-btn' onClick={()=>addToCart({...book,quantity:qty})}>
                <i className='bi bi-cart-plus'></i>
                add to cart
              </button>
            </div>
          </div>
        </div>
        <p className='book-desc'>
          Aliqua officia consectetur non minim. Culpa enim cillum aute amet sunt dolore. Do labore nostrud occaecat sint ad ipsum est proident elit in sunt. Sint pariatur ad esse sunt dolor deserunt reprehenderit do.
          Aliqua officia consectetur non minim. Culpa enim cillum aute amet sunt dolore. Do labore nostrud occaecat sint ad ipsum est proident elit in sunt. Sint pariatur ad esse sunt dolor deserunt reprehenderit do.
        </p>
        <div className='book-icons'>
          <div className='book-icon'>
            <h6>print length</h6>
            <i className='bi bi-file-earmark-break'></i>
            <b>{book.printLength}</b>
          </div>
          <div className='book-icon'>
            <h6>language</h6>
            <i className='bi bi-globe'></i>
            <b>{book.language}</b>
          </div>
          <div className='book-icon'>
            <h6>publication date</h6>
            <i className='bi bi-calendar3'></i>
            <b>{book.PublicationDate}</b>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Book
