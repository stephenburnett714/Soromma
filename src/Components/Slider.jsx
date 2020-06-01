import React from "react";
import SlideData from './SlideData'
import Background from '../Images/slide-background.jpg'

export default function Slider() {



  let sliderArr = [
    {
      source: <SlideData src={Background} />,
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
            </div>
          </div>
        )
      })}
    
    </div>
  );
}