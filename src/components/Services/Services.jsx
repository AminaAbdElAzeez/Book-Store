import React from 'react';
import './Services.css'

const Services = () => {
  return (
    <div className='services'>
        <div className='container'>
            <div className='services-items'>
                <div className='service-item'>
                    <i className='bi bi-truck'></i>
                    <h3 className='service-title'>free shopping</h3>
                </div>
                <div className='service-item' >
                    <i className='bi bi-gift'></i>
                    <h3 className='service-title'>gift card</h3>
                </div>
                <div className='service-item'>
                    <i className='bi bi-arrow-clockwise'></i>
                    <h3 className='service-title'>7 days return</h3>
                </div>
                <div className='service-item'>
                    <i className='bi bi-send'></i>
                    <h3 className='service-title'>contact</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
