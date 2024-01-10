// Team.js
import React, { useEffect,useState } from 'react';
import './Team.css';
import Parallax from './Parallax';


function Team() {
  
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
      
      <Parallax/>
    </div>
  );
}

export default Team;
