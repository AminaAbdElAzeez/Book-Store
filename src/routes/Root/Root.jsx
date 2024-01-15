import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import FadeLoader from "react-spinners/FadeLoader";
import './Root.css'
import TopBtn from '../../components/TopBtn/TopBtn';

const Root = () => {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=> {
      setLoading(false)
    },2000)
  },[])

  return (
    <div>
      {
        loading ?
          <FadeLoader color={"#D00216"} loading={loading} size={30} aria-label="Loading Spinner" data-testid="loader" className='spin'/>
        :
        <Fragment>
          <Header/>
          <Outlet/>
          <TopBtn/>
          <Footer/>
        </Fragment>
      }
    </div>
  )
}

export default Root
