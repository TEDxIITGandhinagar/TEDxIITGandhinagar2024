import "./About.css";
import React, { useState, useEffect } from "react";

function About() {
    return (
        <>
           <div className="big-container" id="my-scrollbar">
                <div className="images-container">
                    <img src="realleusable.jpg" style={{ filter: 'grayscale(100%)' }} className="imgbackabt" alt="backgroundimg" />
                    <div className="text-container">
                        <h1 className="abt top">About TED</h1>
                        <p className="abt para">lorem loremloremloremloremloremloremloremlorem loremloremlorem lorem lorem lorem lorem loremloremlorem lorem loremloremlorem loremlorem loremvloremlorem loremloremlorem loremvv
                        </p>
                    </div>
                </div>
                <div className="over-text">
                    
                </div>
           </div>
        </>
    );
};

export default About;