import React from "react";

export default function SlideData({ src }) {
  let imgStyles = {
    width: 100 + "%",
    height: "auto",
  };
  return (
    <div>
      <img src={src} alt="Slide-Img" style={imgStyles}></img>
    </div>
  );
}
