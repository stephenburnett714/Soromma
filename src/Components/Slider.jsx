import React from "react";
import '../slider.scss'
import Slide from '../Images/Slide5.jpg'
import SlideData from './SlideData'


export default function Slider() {



  let sliderArr = [
    {
      source: <SlideData src={Slide} />,
      title: "Soromma Technologies",
      message: "Guardian IT Solutions"
    }
  ]

  


  return (
    <div className="slider" id="home">
      {sliderArr.map((item, index) => {
        return (
          <div key={index} className="slide">
            <div className="home">
              {item.source}
              <div className="home-text">{item.title}<br />
                <div className="home-subtext">{item.message}</div>
              </div>
            </div>
          </div>
        )
      })}
    
    </div>
  );
}