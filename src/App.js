import React from 'react';
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Portfolio from './Components/Portfolio'
import Services from './Components/Services'
import Team from './Components/Team'
import Testimonials from './Components/Testimonials'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Portfolio />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
