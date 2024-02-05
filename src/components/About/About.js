import "./About.css";
import React, { useEffect } from "react";
import Plx from "react-plx";
function About(){
    useEffect(() => {
        const s = window.skrollr.init();
    
        return () => {
          s.destroy();
        };
      }, []);
    return (
        <>
        <div className="about-container">
            <img data-600="opacity: 0;" data-1000="opacity: 1;" src="Vector2.svg"></img>
            <div className="info">
                <h1 data-600="opacity: 0;" data-1000="opacity: 1;" data-1400="opacity: 0;" id="about">About TED</h1>
                <span data-600="opacity: 0;" data-1000="opacity: 1;" data-1400="opacity: 0;" id="ted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc.
                </span>
                {/* <h1 data-1200="opacity: 0;" data-1700="opacity: 1;" id="about">About TEDx</h1>
                <span data-1200="opacity: 0;" data-1700="opacity: 1;" id="ted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, quis aliquam nisl nisl vitae nunc.
                </span> */}
            </div>
        </div>
        </>
    )
};

export default About;