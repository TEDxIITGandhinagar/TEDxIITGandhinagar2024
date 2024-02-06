import About from "../About/About";
import './Home.css'
import MainPageVideobg from "../MainPageVideobg";
import Countdown from "./Countdown/Countdown";
function Home(){
    return(
        <>
        <MainPageVideobg/>

        <div className="suspense">
            <h1>Revealing Soon</h1>
        </div>
                
        <div id="about-section">
            <About/>
        </div>
        {/* <Countdown/> Add this after either having good countdown*/}
        </>
    )
}

export default Home;