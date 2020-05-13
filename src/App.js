import React from 'react';
import About from './Components/About'
import Cotact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Portfolio from './Components/Portfolio'
import Team from './Components/Team'
import Testimonials from './Components/Testimonials'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
