
import React, { useRef, useEffect, useState } from 'react';
import './Talks.css'
import Playbutton from './Playbutton'
import PreviousTalks from './PreviousTalks'
import ScrollToggle from './Scroll'
import Autoscroll from './Autoscroll';

const carouselItems = [
  {
    description: "He wanted to be Spiderman when he was a child, cause at that time he was the only superhero who wore his underwear inside",
    image: '/images/vidyadharoke.webp',
    link: 'https://www.youtube.com/watch?v=ipYLnhC5YDo',
    name: 'Vidyadhar Oke'
  },
  {
    description: "She dreamed of flying with the birds, feeling the wind tangle her hair, and the sun kiss her skin.",
    image: '/images/roburt.jpg',
    link: 'https://www.youtube.com/watch?v=9CpJE2_cSuo',
    name: 'Harun Robert'
  },
  {
    description: "In the depths of the forest, amongst the tall trees and gentle streams, she found peace.",
    image: '/images/amitabhsingh.webp',
    link: 'https://www.youtube.com/watch?v=dI7xo5tyAag&pp=ygUjYW1pdGFiaCBzaW5naCB0ZWR4IHRhbGsgZ2FuZGhpbmFnYXI%3D',
    name: 'Amitabh Singh'
  },
  {
    description: "He wanted to be Spiderman when he was a child, cause at that time he was the only superhero who wore his underwear inside",
    image: '/images/rajatnagpal.webp',
    link: 'https://www.youtube.com/watch?v=uNAF90ImMOE&pp=ygUicmFqYXQgbmFncGFsIHRlZHggdGFsayBnYW5kaGluYWdhcg%3D%3D',
    name: 'Rajat Nagpal'
  },
  {
    description: "She dreamed of flying with the birds, feeling the wind tangle her hair, and the sun kiss her skin.",
    image: '/images/Khurshed.webp',
    link: 'https://www.youtube.com/watch?v=zHwMHHWwYWc&pp=ygUea2h1cnNoZWQgdGVkeCB0YWxrIGdhbmRoaW5hZ2Fy',
    name: 'Khurshed Batliwala'
  },
  {
    description: "She dreamed of flying with the birds, feeling the wind tangle her hair, and the sun kiss her skin.",
    image: '/images/reema.webp',
    link: 'https://www.youtube.com/watch?v=h9B506gzxkk&pp=ygUecmVlbWEgbmFudmF0eSB0YWxrIGdhbmRoaW5hZ2Fy',
    name: 'Reema Nanavaty'
  }
];

export default function Talks() {

  const TO_SCROLL = window.innerWidth;
  
    const [scrolled, setScrolled] = useState(0);
    const [timer, setTimer] = useState(0);
    const handleSlide = () => {
      const container = document.querySelector("#selected");
      const nextElement = container.children[scrolled / TO_SCROLL];
    
      setTimeout(() => {
        nextElement.scrollIntoView({ behavior: "smooth", block: "start" });
        setScrolled((prev) => prev + 1);
      }, 5000);
    };
    
  
    // useEffect(() => {
    //   const container = document.querySelector("#selected");
    //   const containerContent = container.innerHTML;
    //   const width = container.scrollWidth;
    //   console.log(width);
    //   console.log({ scrolled });
    //   setTimeout(() => {
    //     container.scrollLeft = scrolled + TO_SCROLL;
    //     setScrolled((prev) => prev + TO_SCROLL);
    //     if (scrolled > width / 2 - 100) {
    //       // setScrolled(0);
    //       // container.scrollLeft = 0;
    //       container.insertAdjacentHTML("beforeend", containerContent);
    //       setTimer((prev) => prev + 1);
    //       console.log("else");
    //     }
    //     setTimer((prev) => prev + 1);
    //   }, 4000);
    // }, [timer]);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentItemIndex((currentItemIndex + 1) % carouselItems.length);
      }, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(interval);
    }, [currentItemIndex]);

  
  return (
    <div >
    <div className="carousel">
      <div className="carousel-items">
        {carouselItems.map((item, index) => (
          <div key={index} style={{ display: index === currentItemIndex ? 'block' : 'none' }}>
            <Autoscroll {...item} />
          </div>
        ))}
      </div>
    </div>
      {/* <div className='container' id="selected" >
    
    <Autoscroll description={`He wanted to be spiderman
when he was a child, cause at
that time he was the only
superhero who wore his
underwear inside`} image='/images/vidyadharoke.webp' link='https://www.youtube.com/watch?v=ipYLnhC5YDo' name='Vidyadhar Oke' />
        <Autoscroll description="She dreamed of flying\nwith the birds,\nfeeling the wind\ntangle her hair,\nand the sun kiss\nher skin." name=' Harun Robert'image='/images/roburt.jpg'link='https://www.youtube.com/watch?v=9CpJE2_cSuo'/>
        <Autoscroll description="In the depths of\nthe forest,\namongst the tall trees\nand gentle streams,\nshe found peace." name='Amitabh Singh'image='/images/amitabhsingh.webp'link='https://www.youtube.com/watch?v=dI7xo5tyAag&pp=ygUjYW1pdGFiaCBzaW5naCB0ZWR4IHRhbGsgZ2FuZGhpbmFnYXI%3D
'/>
        <Autoscroll description='He wanted to be spiderman when he was a child,cause atthat time he was the only\nsuperhero who wore his underwear inside'name='Rajat Nagpal' image='/images/rajatnagpal.webp'link='https://www.youtube.com/watch?v=uNAF90ImMOE&pp=ygUicmFqYXQgbmFncGFsIHRlZHggdGFsayBnYW5kaGluYWdhcg%3D%3D
'/>
        <Autoscroll description='She dreamed of flying\nwith the birds,\nfeeling the wind\ntangle her hair,\nand the sun kiss\nher skin.' image='/images/Khurshed.webp'link='https://www.youtube.com/watch?v=zHwMHHWwYWc&pp=ygUea2h1cnNoZWQgdGVkeCB0YWxrIGdhbmRoaW5hZ2Fy' name='Khurshed Batliwala '/>
        <Autoscroll description='She dreamed of flying\nwith the birds,\nfeeling the wind\ntangle her hair,\nand the sun kiss\nher skin.' image='/images/reema.webp'link='https://www.youtube.com/watch?v=h9B506gzxkk&pp=ygUecmVlbWEgbmFudmF0eSB0YWxrIGdhbmRoaW5hZ2Fy
'name='Reema Nanavaty '/>
        
    
    </div> */}
        <div className='centerbelow'>
          <div className='textbelow'>
            Previous Talks
          </div>
          <div className='previoustalks'>
            
            <ScrollToggle/>
          </div>

        </div>
        </div>
        
  )
}





