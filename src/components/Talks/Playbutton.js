import React from 'react'
import './Playbutton.css'

export default function Playbutton() {

  const divStyle={cursor: 'pointer',}
  
  return (
    <div style={divStyle}>
      <div className="wrapper">
      <div className="circle pulse">
        <div className="circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <polygon points="40,30 65,50 40,70" />
          </svg>
        </div>
      </div>
    </div>
    </div>
  )
}
