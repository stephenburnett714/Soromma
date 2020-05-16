import React, { useState } from "react";
import '../slider.scss'
import Slide1 from '../Images/Slide1.jpg'
import Slide2 from '../Images/Slide2.jpg'
import Slide3 from '../Images/Slide3.jpg'
import Slide4 from '../Images/Slide4.jpg'
import Slide5 from '../Images/Slide5.jpg'
import SlideData from './SlideData'


export default function Slider() {

  let sliderArr = [
    {
      source: <SlideData src={Slide1} />,
      title: "Slide 1",
      message: "Information"
    },
    {
      source: <SlideData src={Slide2} />,
      title: "Slide 2",
      message: "Information"
    },
    {
      source: <SlideData src={Slide3} />,
      title: "Slide 3",
      message: "Information"
    },
    {
      source: <SlideData src={Slide4} />,
      title: "Slide 4",
      message: "Information"
    },
    {
      source: <SlideData src={Slide5} />,
      title: "Slide 5",
      message: "Information"
    }
  ]
  const [x, setX] = useState(0)
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
  };

  return (
    <div className="slider" id="home">
      {sliderArr.map((item, index) => {
        return (
          <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
            <div className="home">
              {item.source}
              <div className="home-text">{item.title}<br />
                <div className="home-subtext">{item.message}</div>
              </div>
            </div>
          </div>
        )
      })}
      
      <button id="goLeft" onClick={goLeft}>
      <span style={{color: "white"}}>
        <i class="fas fa-chevron-left fa-3x"></i>
        </span>
        </button>
      
      
      <button id="goRight" onClick={goRight}>
      <span style={{color: "white"}}>
        <i class="fas fa-chevron-right fa-3x"></i>
        </span>
        </button>
        {setTimeout(goRight, 10000)}
    </div>
  );
}