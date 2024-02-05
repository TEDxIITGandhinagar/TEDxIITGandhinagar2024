import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
// import About from './components/About/About'; 
import Speakers from './components/Speakers/Speakers';
import Talks from './components/Talks/Talks'; 
import Team from './components/Team/Team';
import Tickets from './components/Tickets/Tickets'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/"
      element={
      <>
        <Home/>
      </> 
      }></Route>

      <Route path="/speakers" element={<Speakers/>} />
      <Route path="/talks" element={<Talks/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/schedule" element={<Talks/>} />
      <Route path="/tickets" element={Tickets} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
