import React from 'react'
import './Parallax.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from './Cards'

export default function Parallax() {
  useEffect(() => {
    AOS.init({ duration: 0 });
  }, [])
  return (
    <div className='flexto newdiv'>
      <div className='redbox' data-aos='fade-up' data-aos-duration="1000" data-aos-offset="500">

      </div>
      <div className='textonbox' data-aos='fade-up' data-aos-duration="1000" data-aos-offset="500">
        <div className='org' data-aos='fade-up' data-aos-duration="1000" data-aos-offset="500">ORGANIZERS</div>
        <div className='orgw' data-aos='fade-up' data-aos-duration="1000" data-aos-offset="500"> WEB TEAM</div>
      </div>

    </div>)
}

