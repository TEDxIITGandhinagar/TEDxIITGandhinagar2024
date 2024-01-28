// Team.js
import React, { useEffect, useState } from 'react';
import './Team.css';
import Parallax from './Parallax';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from './Cards';


function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  useEffect(() => {
    let text = document.querySelector('#text');
    text.setAttribute('data-text', text.innerHTML);
    var lr = document.querySelector('html');
    window.addEventListener('click', () => {
      var newone = lr.cloneNode(true);
      // lr.parentNode.replaceChild(newone, lr);
      lr = newone;
    });
  }, []);


  return (
    <div className='size'>
      <div className='text-size'>
        <div div id="text"><div className="text-in">OUR TEAM</div></div>
      </div>
      {/* <div className='texti'>OUR TEAM</div> */}
      <div className='flexto'>
        <Parallax />
        <div className='vraj'>
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
        </div>
      </div>
    </div>
  );
}

export default Team;
