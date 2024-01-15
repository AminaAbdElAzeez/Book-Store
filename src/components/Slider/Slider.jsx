import React, { useState } from 'react';
import firstImg from '../../images/book1.png';
import secondImg from '../../images/book2.png';
import thirdImg from '../../images/book3.png';
import './Slider.css'

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0)

    // Handle Click
    const clickHandler = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

  return (
    <div className='slider-container'>
        <i className='bi bi-chevron-double-left' onClick={()=>clickHandler("left")}></i>
        <div className='slider-wrapper' style={{transform:`translateX(${slideIndex * -100}vw)`}}>
            <div className='slide first-slide' >
                <div className='slide-img'>
                    <img src={firstImg} alt='slide-img'/>
                </div>
                <div className='slide-info'>
                    <h2 className='slide-info-title'>book store</h2>
                    <p className='slide-info-desc'>It's not just reading, It's living the adventure.</p>
                </div>
            </div>
            <div className='slide second-slide'>
                <div className='slide-img'>
                    <img src={secondImg} alt='slide-img'/>
                </div>
                <div className='slide-info'>
                    <h2 className='slide-info-title'>The Book For Everyone</h2>
                    <p className='slide-info-desc'>You can read at the Book Store or at home.</p>
                </div>
            </div>
            <div className='slide third-slide'>
                <div className='slide-img'>
                    <img src={thirdImg} alt='slide-img'/>
                </div>
                <div className='slide-info'>
                    <h2 className='slide-info-title'>check out the new titles</h2>
                    <p className='slide-info-desc'>We send you the book you want at home.</p>
                </div>
            </div>
        </div>
        <i className='bi bi-chevron-double-right' onClick={()=>clickHandler("right")}></i>
    </div>
  )
}

export default Slider
