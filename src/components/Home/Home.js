import About from "../About/About";
import './Home.css'
// import HorizontalScrollGallery from "./memory";
import MainPageVideobg from "../MainPageVideobg";
import CountdownTimer from "./Countdown/Countdown";
function Home(){

    return(
        <>
        <MainPageVideobg/>

        <div className="suspense">
            <h1>Revealing The Theme of</h1>
        </div>

        <div className="tubelight">
            <h1>
                <span className="red-ted">TEDX</span> <span className="iitgn">IITGANDHINAGAR 2024</span>
            </h1>
        </div>

        <CountdownTimer/>
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