import About from "../About/About";
import './Home.css'
import MainPageVideobg from "../MainPageVideobg";
import Countdown from "./Countdown/Countdown";
function Home(){
    return(
        <>
        <MainPageVideobg/>
        
        {/* <div id="about-section">
            <About/>
        </div> */}
        <div className="suspense">
            <h1>Revealing Soon</h1>
        </div>
        <Countdown/>
        </>
    )
}

export default Home;