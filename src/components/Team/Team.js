// Team.js
import React, { useEffect,useState } from 'react';
import './Team.css';
import Parallax from './Parallax';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from './Cards';


function Team() {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
  
  useEffect(() => {
    let text = document.querySelector('#text');
    text.setAttribute('data-text', text.innerHTML);

    document.body.innerHTML += '<div style="position: absolute; bottom: 0; left: 0; right: 0; padding: .5em; font-size: 12px; font-family: monospace; text-align: center; pointer-events: none;">Click anywhere to re-run</div>';

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
     <Parallax/>
     <Card name='rachit mehta'description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
     
    </div>  
      
    </div>
  );
}

export default Team;
