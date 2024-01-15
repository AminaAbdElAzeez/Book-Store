import React from 'react'
import './Rating.css';

const Rating = ({rating,reviews}) => {
  return (
    <div className='rating'>
        {rating >= 1 ? (<i className='bi bi-star-fill'></i>)
            : rating >= 0.5 ? (<i className='bi bi-star-half'></i>)
            : (<i className='bi bi-star'></i>)
        }
        {rating >= 2 ? (<i className='bi bi-star-fill'></i>)
            : rating >= 1.5 ? (<i className='bi bi-star-half'></i>)
            : (<i className='bi bi-star'></i>)
        }
        {rating >= 3 ? (<i className='bi bi-star-fill'></i>)
            : rating >= 2.5 ? (<i className='bi bi-star-half'></i>)
            : (<i className='bi bi-star'></i>)
        }
        {rating >= 4 ? (<i className='bi bi-star-fill'></i>)
            : rating >= 3.5 ? (<i className='bi bi-star-half'></i>)
            : (<i className='bi bi-star'></i>)
        }
        {rating >= 5 ? (<i className='bi bi-star-fill'></i>)
            : rating >= 4.5 ? (<i className='bi bi-star-half'></i>)
            : (<i className='bi bi-star'></i>)
        }
        <span><b>Rating : </b> {rating}</span>
        <span><b>Reviews : </b> {reviews}</span>
    </div>
  )
}

export default Rating
