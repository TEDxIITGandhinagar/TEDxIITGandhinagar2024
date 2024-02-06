import React, { useState } from 'react';
import './MainPageVideobg.css';

function MainPageVideobg() {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="container">
      <div className="video-container">
        <video autoPlay muted id="myVideo" onEnded={handleVideoEnd}>
          <source src='draft4.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {videoEnded && (
        <div className="text-overlay">
          <div className='hype'>
            <h1 id='tedx'>TEDx</h1><h1 id='gn'>IITGandhinagar</h1>
          </div>
          <div className='revealing'>
            <h1>Revealing Soon</h1>
          </div>
        </div>
      )}
      <div className="image-container">
        <img className='imagevec imagevec1' src='Vector1.svg' alt='vectorimg' />
        <img className='imagevec imagevec2' src='Vector.svg' alt='vectorimg' />
      </div>
    </div>
  );
}

export default MainPageVideobg;