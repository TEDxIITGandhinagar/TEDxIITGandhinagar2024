import React from 'react'
import './Parallax.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Parallax() {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
  return (
    <div className='flexto'>
    <div className='redbox' data-aos='fade-right'>
      
    </div>
    <div className='textonbox' data-aos='fade-right'>
      <div className='org'data-aos='fade-right'>ORGANIZERS</div>
      <div className='org'data-aos='fade-right'> WEB TEAM</div>
    </div>
    </div>)
}

