import React, {useEffect, useRef} from "react";
import About from "../About/About";
import './Home.css'
// import HorizontalScrollGallery from "./memory";
import MainPageVideobg from "../MainPageVideobg";

function Home(){
    const videoRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          });
        },
        {
          threshold: 0.25
        }
      );
    
      if (videoRef.current) {
        observer.observe(videoRef.current);
      }
    
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }, []);    

    return(
        <>
        <MainPageVideobg/>

        <div className="release">
        <div className="suspense">
            <h1>Revealing The Theme of</h1>
        </div>
        
        <div className="tubelight">
            <h2>
                <span className="red-ted">T
                <span className="flick d1">E</span>D
                <span className="flick d2">X</span>
                </span> <span className="iitgn">IIT
                <span className="flick d3">G</span>ANDHI
                <span className="flick d4">N</span>AGA
                <span className="flick d5">R</span> 202
                <span className="flick d6">4</span>
                </span>
            </h2>
        </div>
        </div>
        <div className="main-theme">
        <div className="theme">
            <video className="theme-video" ref={videoRef} src="/draft4.mp4" muted controls></video>
        </div>
        </div>

        <div id="about-section">
            <About/>
        </div>
        
        {/* <div id="memory-lange">
            <HorizontalScrollGallery images={['realleusable.svg','realleusable.svg','realleusable.svg','realleusable.svg']}/>
        </div> */}
        </>
    )
}

export default Home;