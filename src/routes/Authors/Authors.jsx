import React, { useState } from 'react';
import {authors} from '../../data/authors'
import './Authors.css'

const Authors = () => {
  const [search,setSearch] = useState("")
  return (
    <section className='authors'>
      <div className='container'>
        <div className='author-search'>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type='search' placeholder='Search in Authors...' />
        </div>
        <div className='authors-wrapper'>
          {authors.filter(a=>a.name.toLowerCase().includes(search)).map((author)=>(
            <div key={author.id} className='author'>
              <div className='img'>
                <img src={author.image} alt={author.name}/>
              </div>
              <h4 className='author-name'>{author.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Authors
