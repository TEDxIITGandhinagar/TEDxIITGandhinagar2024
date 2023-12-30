import About from "../About/About";
import './Home.css'
import MainPageVideobg from "../MainPageVideobg";
function Home(){
    return(
        <>
        <MainPageVideobg/>
        
        <div id="about-section">
            <About/>
        </div>
        </>
    )
}

export default Home;