
import React from 'react'
import './Talks.css'
import Playbutton from './Playbutton'
import PreviousTalks from './PreviousTalks'
import ScrollToggle from './Sroll'

export default function Talks() {
  return (
    <div>
    <div className="center">
            <div className="photocenter">

            </div>
            <div className="centercontent">
                <div className='textcenter'>
                "He wanted to be spiderman <br/>
                 when he was a child,cause at <br/>
                 that time he was the only<br/> superhero
                  who wore his<br/> underwear inside"
                </div>

            <div className='redline'></div>
            <div className='playside'>
            <div className='sidecontent'>
            <div className='talkname'>
                Harun Robert's 
            </div>
            <div className='tedtalk'>
                TED Talk
            </div>
            </div>
            <Playbutton/>
            </div>
            </div>
        </div>
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





