import React from 'react';
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import MissionStatement from './Components/MissionStatement'
import Solutions from './Components/Solutions'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import 'aos/dist/aos.css';
import './App.scss';
import MinorityOwned from './Components/MinorityOwned';
import WorkFlow from './Components/WorkFlow';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <MissionStatement />
      <WorkFlow />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
