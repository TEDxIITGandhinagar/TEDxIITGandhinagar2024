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
          <Card name='Shreyans Jain' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
          image='/team/sj.jpeg'/>
          <Card name='Pratham Sharda' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
          image='/team/ps.jpeg'/>
          <Card name='Parth Govale' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
          image='/team/pg.jpg'/>
          <Card name='Balagopal ki Maakabhosda' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
          image='/team/Bg.jpg'/>
          <Card name='Parag Sahu' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
          image='/team/parag.jpg'/>
          <Card name='Saransh Sharma' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
          image='/team/Saransh.jpg'/>
          <Card name='Tilak Maheshwari' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
          image='/team/Tilak.jpg'/>
          <Card name='Dhruvi Sisodia' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
          image='/team/dhruvi.jpg'/>
          <Card name='Darshan Zhala' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
          image='/team/darshan.jpg'/>
          {/*
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
          image='/team/sj.jpg'/>
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
          image='/team/sj.jpg'/>
          <Card name='rachit mehta' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
          image='/team/sj.jpg'/> */}
        </div>
      </div>
    </div>
  );
}

export default Team;
