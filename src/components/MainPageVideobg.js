import React from 'react';
import './MainPageVideobg.css';

function MainPageVideobg() {
  return (
    <div className="container">
      <div className="video-container">
      <video autoPlay muted loop id="myVideo">
        <source src='draft4.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className="text-overlay">
        <h1 id='tedx'>TEDx</h1>
        <h1 id='gn'>IIT Gandhinagar</h1>
      </div>
      <div className="image-container">
        <img className='imagevec imagevec1' src='Vector1.svg' alt='vectorimg' />
        <img className='imagevec imagevec2' src='Vector.svg' alt='vectorimg' />
      </div>
    </div>
  );
}

export default MainPageVideobg;
