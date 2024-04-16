import React, { useEffect } from "react";
import "./Sponsors.css";
import { TitleSponsData, PlatSponsData, GoldSponsData, DiamSponsData,  CoSponsData, PartnerData } from "./SponsData";

export default function Sponsors() {
  return (
    <div id="about" style={{flexDirection: "column", textShadow:"none"}}>
        <div id="speakers-content">
        <h1 className="orbitron">Title Sponsors</h1>
          <div>
            {TitleSponsData.map((about, index) => {
              return <Card key={index} about={about} />;
            })}
          </div>
          <h1 className="orbitron">Platinum Sponsors</h1>
          <div>
            {PlatSponsData.map((about, index) => {
              return <Card key={index} about={about} />;
            })}
          </div>
          <h1 className="orbitron">Diamond Sponsors</h1>
          <div>
            {DiamSponsData.map((about, index) => {
              return <Card key={index} about={about}/>;
            })}
          </div>
          <h1 className="orbitron">Gold Sponsors</h1>
          <div>
            {GoldSponsData.map((about, index) => {
              return <Card key={index} about={about}/>;
            })}
          </div>
          <h1 className="orbitron">Co Sponsors</h1>
          <div>
            {CoSponsData.map((about, index) => {
              return <Card key={index} about={about}/>;
            })}
          </div>
          <h1 className="orbitron">Partners</h1>
          <div>
            {PartnerData.map((about, index) => {
              return <Card key={index} about={about}/>;
            })}
          </div>
        </div>
      </div>

  );
}

const Card = ({ about }) => {
  return (
    <div className="about-card">
      <img className="common-image" src={about.image} alt={about.name} />
      <h3 className="poppins">{about.name}</h3>
      </div>
  );
};
