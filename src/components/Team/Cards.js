// Card.js
import React from 'react';
import './Cards.css';

const Card = (props) => {
  return (
    <div className="card-container" style={{backgroundImage: `url(${props.image})`}}>
      <div className="card">
        <div className="overlay">
          <p className='name'>{props.name}</p>
          <p className='description'>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;