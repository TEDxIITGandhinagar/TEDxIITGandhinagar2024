// // Team.js
// import React, { useEffect, useState } from 'react';
// import './Team.css';
// import Parallax from './Parallax';
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import Card from './Cards';


// function Team() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, [])

//   useEffect(() => {
//     let text = document.querySelector('#text');
//     text.setAttribute('data-text', text.innerHTML);
//     var lr = document.querySelector('html');
//     window.addEventListener('click', () => {
//       var newone = lr.cloneNode(true);
//       // lr.parentNode.replaceChild(newone, lr);
//       lr = newone;
//     });
//   }, []);


//   return (
//     <div className='size'>
//       
//       {/* <div className='texti'>OUR TEAM</div> */}
//       <div className='flexto'>
//         {/* <Parallax /> */}
//         <div className='vraj'>
//           <Card name='Shreyans Jain' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
//           image='/team/sj.jpeg'/>
//           <Card name='Pratham Sharda' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
//           image='/team/ps.jpeg'/>
//           <Card name='Parth Govale' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
//           image='/team/pg.jpg'/>
//           <Card name='Balagopal ki Maakabhosda' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
//           image='/team/Bg.jpg'/>
//           <Card name='Parag Sahu' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
//           image='/team/parag.jpg'/>
//           <Card name='Saransh Sharma' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
//           image='/team/Saransh.jpg'/>
//           <Card name='Tilak Maheshwari' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
//           image='/team/Tilak.jpg'/>
//           <Card name='Dhruvi Sisodia' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
//           image='/team/dhruvi.jpg'/>
//           <Card name='Darshan Zhala' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.n an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
//           image='/team/darshan.jpg'/>
// 
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Team;

import React, { useEffect } from "react";
import "./Team.css";
import { CoreData, TechTeamData } from "./AboutData";

export default function About() {
  useEffect(() => {
        let text = document.querySelector('#text');
        text.setAttribute('data-text', text.innerHTML);
        var lr = document.querySelector('html');
        window.addEventListener('click', () => {
          var newone = lr.cloneNode(true);
          // lr.parentNode.replaceChild(newone, lr);
          lr = newone;
        });
      }, []);
  return (
    <div id="about" style={{flexDirection: "column", textShadow:"none"}}>
      <div className='text-size'>
        <div div id="text"><div className="text-in">OUR TEAM</div></div>
    </div>
        <div id="speakers-content">
          <h1 className="oswald">CORES</h1>
          <div>
            {CoreData.map((about, index) => {
              return <Card key={index} about={about} />;
            })}
          </div>
          <h1 className="oswald">TECH TEAM</h1>
          <div>
            {TechTeamData.map((about, index) => {
              return <Card key={index} about={about} github={true} />;
            })}
          </div>
        </div>
      </div>

  );
}

const Card = ({ about, github = false }) => {
  return (
    <div className="about-card">
      <img src={about.imgSrc} alt={about.name} />

      <h3 className="poppins">{about.name}</h3>

      <span className="montserrat" >{about.designation}</span>

      <span className="montserrat" style={{ fontSize: "0.85rem" }}>
        {about.number}
      </span>

      <div className="about-links-container">
        <a href={about.linkedin} rel="noreferrer" target="_blank">
          <img
            alt="linkedIn profile link"
            src="/linkedin.svg"
            className="about-links"
          />
        </a>
        <a href={about.insta} rel="noreferrer" target="_blank">
          <img
            alt="instagram profile link"
            src="/instagram.svg"
            className="about-links"
          />
        </a>
        {github === true ? (
          <a href={about.github} rel="noreferrer" target="_blank">
            <img
              alt="github profile link"
              src="/github.svg"
              className="about-links"
            />
          </a>
        ) : (
          <a href={`mailto:${about.email}`} rel="noreferrer" target="_blank">
            <img
              alt="mail id"
              src="/envelope.svg"
              className="about-links"
            />
          </a>
        )}
      </div>
    </div>
  );
};