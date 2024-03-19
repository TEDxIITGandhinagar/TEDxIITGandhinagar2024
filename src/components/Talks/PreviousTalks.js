import React from 'react';
import './PreviousTalks.css';



export default function PreviousTalks(props) {
  const redirectToYouTube = () => {
    window.location.href = props.link;
  };
  return (
    <div onClick={redirectToYouTube}>
      <div className='box' >
      {props.image && <img src={props.image} alt="image" className="my-image-class" />}
      
      </div>
      <div className='des'>
        description: {props.description}
      </div>
    </div>
  );
}
