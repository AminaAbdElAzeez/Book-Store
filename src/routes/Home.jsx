import React from 'react'
import Slider from '../components/Slider/Slider'
import BookSlider from '../components/BookSlider/BookSlider'
import HeadingTitle from '../components/HeadingTitle/HeadingTitle'
import Services from '../components/Services/Services'
import { books } from '../data/books.js'

const Home = () => {
  return (
    <section>
      <Slider/>
      <Services/>
      <HeadingTitle title={"most gifted"}/>
      <BookSlider books={books}/> 
      <HeadingTitle title={"best seller"}/>
      <BookSlider books={books}/> 
      <HeadingTitle title={"most wished"}/>
      <BookSlider books={books}/>   
    </section>
  )
}

export default Home
