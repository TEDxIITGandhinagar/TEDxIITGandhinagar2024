import React, { useState, useRef } from 'react';
import './Scroll.css'; // Import your CSS file
import PreviousTalks from './PreviousTalks';

const ScrollToggle = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const listRef = useRef(null);

  const move = (direction) => {
    const scrollStep = 4;
    const interval = setInterval(() => {
      if (direction === 'right') {
        listRef.current.scrollLeft += scrollStep;
      } else {
        listRef.current.scrollLeft -= scrollStep;
      }
    }, 1);

    return interval;
  };

  const handleMouseDown = (direction) => {
    const interval = move(direction);
    document.addEventListener('mouseup', () => stop(interval), { once: true });
  };

  const stop = (interval) => {
    if (listRef.current.scrollLeft > 0) {
      setScrollValue(listRef.current.scrollLeft);
    }
    clearInterval(interval);
  };

  return (
    <div className="scroll-toggle">
      <button
        className="scroll-toggle__button scroll-toggle__buttonleft"
        onMouseDown={() => handleMouseDown('left')}
      >
        
      </button>
      <ul className="scroll-toggle__list" ref={listRef}>
        <PreviousTalks/>
        <PreviousTalks/>
        <PreviousTalks/>
        <PreviousTalks/>
        <PreviousTalks/>
        <PreviousTalks/>
        <PreviousTalks/>
        <PreviousTalks/>
        <PreviousTalks/>
        <PreviousTalks/>
        <PreviousTalks/>
        <PreviousTalks/>
      </ul>
      <button
        className="scroll-toggle__button scroll-toggle__buttonright"
        onMouseDown={() => handleMouseDown('right')}
      >
        
      </button>
    </div>
  );
};

export default ScrollToggle;


