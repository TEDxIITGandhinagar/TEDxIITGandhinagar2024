import React, { Component } from 'react'
import Playbutton from './Playbutton'
import PreviousTalks from './PreviousTalks'
export default function Autoscroll(props) {
  
    const redirectToYouTube = () => {
        window.location.href = props.link; 
    
      };
    return (
      <div>
        <div className="center" onClick={redirectToYouTube}>

        <div className="photocenter" onClick={redirectToYouTube} style={{
  backgroundImage: `url(${props.image})`
}}>

</div>
<div className="centercontent" onClick={redirectToYouTube}>
    <div className='textcenter' onClick={redirectToYouTube}>
    {props.description}
    </div>

<div className='redline'></div>
<div className='playside'>
<div className='sidecontent'>
<div className='talkname'>
{props.name}'s 
</div>
<div className='tedtalk'>
    TED Talk
</div>
</div>
<div className='Playbutton'onClick={redirectToYouTube}>

<Playbutton/>
</div>
</div>
</div>
</div>
      </div>
    )
  }


