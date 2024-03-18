import About from "../About/About";
import './Home.css'
// import HorizontalScrollGallery from "./memory";
import MainPageVideobg from "../MainPageVideobg";

function Home(){

    return(
        <>
        <MainPageVideobg/>

        <div className="release">
        <div className="suspense">
            <h1>Revealing The Theme of</h1>
        </div>
        
        <div className="tubelight">
            <h1>
                <span className="red-ted">T
                <span className="flick d1">E</span>D
                <span className="flick d2">X</span>
                </span> <span className="iitgn">IIT
                <span className="flick d3">G</span>ANDHI
                <span className="flick d4">N</span>AGA
                <span className="flick d5">R</span> 202
                <span className="flick d6">4</span>
                </span>
            </h1>
        </div>
        </div>
        <div className="theme">

            <h1 id="theme-text">Reimagining Reality.</h1>
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