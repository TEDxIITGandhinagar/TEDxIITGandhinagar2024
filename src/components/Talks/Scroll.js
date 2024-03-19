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
      
      <ul className="scroll-toggle__list" ref={listRef}>
        
        <PreviousTalks description='description' image='/images/vidyadharoke.webp' link='https://www.youtube.com/watch?v=ipYLnhC5YDo'/>
        <PreviousTalks description='description' image='/images/roburt.jpg'link='https://www.youtube.com/watch?v=9CpJE2_cSuo'/>
        <PreviousTalks description='amitabh' image='/images/amitabhsingh.webp'link='https://www.youtube.com/watch?v=dI7xo5tyAag&pp=ygUjYW1pdGFiaCBzaW5naCB0ZWR4IHRhbGsgZ2FuZGhpbmFnYXI%3D
'/>
        <PreviousTalks description='rajat nagpal' image='/images/rajatnagpal.webp'link='https://www.youtube.com/watch?v=uNAF90ImMOE&pp=ygUicmFqYXQgbmFncGFsIHRlZHggdGFsayBnYW5kaGluYWdhcg%3D%3D
'/>
        <PreviousTalks description='Khurshed Batliwala' image='/images/Khurshed.webp'link='https://www.youtube.com/watch?v=zHwMHHWwYWc&pp=ygUea2h1cnNoZWQgdGVkeCB0YWxrIGdhbmRoaW5hZ2Fy'/>
        <PreviousTalks description='Reema' image='/images/reema.webp'link='https://www.youtube.com/watch?v=h9B506gzxkk&pp=ygUecmVlbWEgbmFudmF0eSB0YWxrIGdhbmRoaW5hZ2Fy
'/>
        <PreviousTalks description='description' image='/images/andrew.jpg'link='https://www.youtube.com/watch?v=ipYLnhC5YDo'/>
        
        
      </ul>
      
    </div>
  );
};

export default ScrollToggle;


