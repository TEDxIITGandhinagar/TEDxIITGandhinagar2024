import About from "../About/About";
import './Home.css'
// import HorizontalScrollGallery from "./memory";
import MainPageVideobg from "../MainPageVideobg";
import Countdown from "./Countdown/Countdown";
function Home(){

    return(
        <>
        <MainPageVideobg/>

        <div className="suspense">
            <h1>Revealing The Theme of</h1>
        </div>

        <div className="tubelight">
            <h1>
                <span className="red-ted">TEDX</span>IITGANDHINAGAR 2024
            </h1>
        </div>

        {/* <Countdown/> */}
                
        {/* <div id="about-section">
            <SectionSlider sections={sections}/>
        </div> */}
        <div id="about-section">
            <About/>
        </div>
        
        {/* <div id="memory-lange">
            <HorizontalScrollGallery images={['realleusable.svg','realleusable.svg','realleusable.svg','realleusable.svg']}/>
        </div> */}

        {/* <div>
            <AnimatedSection/>
        </div> */}


        </>
    )
}

export default Home;