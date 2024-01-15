import React, { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import './Cart.css'

const Cart = () => {
  const {cartItems,removeFromCart,addToCart}=useContext(CartContext);
  const totalPrice=cartItems.reduce((acc,cur)=>acc + cur.price * cur.quantity,0).toFixed(2)

  return (
    <section className='cart'>
      <div className='container'>
        <div className='top'>
          <h2 className='cart-title'>your shopping cart</h2>
        </div>
        <div className='cart-wrapper'>
          <div className='cart-items'>
            {cartItems.map((item)=>(
              <div key={item.id} className='cart-item'>
                <img src={`/books/${item.image}`} alt={item.title}/>
                <div className='cart-item-info'>
                  <h3 className='cart-item-info-title'><b>Title : </b>{item.title}</h3>
                  <h3 className='cart-item-info-title'><b>Author : </b>{item.author}</h3>
                </div>
                <div className='cart-item-quantity'>
                  <div>
                    <button onClick={()=>addToCart({...item,quantity:item.quantity + 1})} className='bi bi-plus-lg cart-item-info-qty'></button>
                    <b>{item.quantity}</b>
                    <button disabled={item.quantity <= 1} onClick={()=>addToCart({...item,quantity: item.quantity - 1})} className='bi bi-dash-lg cart-item-info-qty'></button>
                  </div>
                  <p className='cart-item-price'>${(item.price * item.quantity).toFixed(2)}</p>
                  <i onClick={()=>removeFromCart(item.id)} className='bi bi-trash-fill'></i>
                </div>
              </div>
            ))}
          </div>
          <div className='cart-order-summary'>
            <h5>order summary</h5>
            <div className='order-summary-item'>
              <span>subtotal</span>
              <span>{totalPrice}</span>
            </div>
            <div className='order-summary-item'>
              <span>shopping cost</span>
              <span>0</span>
            </div>
            <div className='order-summary-item'>
              <span>discount</span>
              <span>0</span>
            </div>
            <div className='order-summary-item'>
              <b>total</b>
              <span>{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
