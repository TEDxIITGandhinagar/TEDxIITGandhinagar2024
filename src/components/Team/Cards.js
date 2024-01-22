import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cards.css'; // Create a separate CSS file



const Card = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 600,
    });
  }, []);

  return (
    <div className="card-container" data-aos="fade-up"data-aos-offset="600">
       
      <div className="card">
      <div className="overlay">
<p className='name'
>{props.name}</p>
<p className='description'>
{props.description}
  </p>

       </div>
      </div>
    </div>
  );
};

export default Card;

