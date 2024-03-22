import React, { useEffect } from "react";
import "./Team.css";
import { LicenseeData, CoreData, TechTeamData } from "./AboutData";

export default function About() {
  useEffect(() => {
        let text = document.querySelector('#text');
        text.setAttribute('data-text', text.innerHTML);
        var lr = document.querySelector('html');
        window.addEventListener('click', () => {
          var newone = lr.cloneNode(true);
          lr = newone;
        });
      }, []);
  return (
    <div id="about" style={{flexDirection: "column", textShadow:"none"}}>
      <div className='text-size'>
        <div div id="text"><div className="text-in">OUR TEAM</div></div>
    </div>
        <div id="speakers-content">
        <h1 className="orbitron">License Holders</h1>
          <div>
            {LicenseeData.map((about, index) => {
              return <Card key={index} about={about} />;
            })}
          </div>

          <h1 className="orbitron">CORES</h1>
          <div>
            {CoreData.map((about, index) => {
              return <Card key={index} about={about} />;
            })}
          </div>
          <h1 className="orbitron">TECH TEAM</h1>
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