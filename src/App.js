import React from 'react';
import About from './Components/About'
import Contact from './Components/Contact'
import Slider from './Components/Slider'
import Navbar from './Components/Navbar'
import Solutions from './Components/Solutions'
import Footer from './Components/Footer'
import 'aos/dist/aos.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <About />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
