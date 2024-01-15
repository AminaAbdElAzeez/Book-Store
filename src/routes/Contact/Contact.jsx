import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
      <div className='container'>
        <div className='contact-wrapper'>
          <div className='contact-item'>
            <i className='bi bi-house-fill'></i>
            <h4 className='contact-item-title'>Address</h4>
          </div>
          <div className='contact-item'>
            <i className='bi bi-phone-fill'></i>
            <h4 className='contact-item-title'>123-456-789</h4>
          </div>
          <div className='contact-item'>
            <i className='bi bi-envelope-fill'></i>
            <h4 className='contact-item-title'>info@fakeemail.com</h4>
          </div>
        </div>
        <form className='contact-form' onSubmit={(e)=>e.preventDefault()}>
          <h2>Contact us Form</h2>
          <div className='contact-form-wrapper'>
            <input type='text' placeholder='name *'/>
            <input type='text' placeholder='subject *'/>
            <input type='email' placeholder='email *'/>
          </div>
          <textarea placeholder='your message *' rows='5'></textarea>
          <button className='contact-btn'>send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
