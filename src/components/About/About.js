import "./About.css";
import React, { useState, useEffect, useRef } from "react";

function About(){

  return(
    <>
      <div className="we-are-block">
        <div id="about-us-section">
          <div className="about-us-image">
            <img src="realleusable.svg" className="img1" style={{ filter: 'grayscale(100%)' }} width="908" height="458" alt="Lobby Image"/>
          </div>
          <div className="about-us-info">
            <h2>ABOUT TED</h2>
            <p>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia.</p>
            <a href="#" title="About Us Button">Explore TEDx </a>
          </div>
        </div>
        <div id="history-section">
          <div className="history-image">            <img src="akshay.jpg" className="img2" style={{ filter: 'grayscale(100%) brightness(50%) contrast(100%)' }} width="951" height="500" alt="Building Pic"/>
          </div>
          <div className="history-info">
            <h2>ABOUT TEDx</h2>
            <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</p>
            <a href="#" title="History Button">Last Year Lineup</a>
          </div>
        </div>
        </div>
    </>
  )
}

export default About;