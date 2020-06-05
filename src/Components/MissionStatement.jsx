import React from "react";
import video from "../Images/GoalsVideo.mp4";

export default function MissionStatement() {
  return (
    <div id="about" className="mission-statment-contatiner">
      <video className="video-tag" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
      <div className="mission-statement">
      Soromma means guardianship. 
      <br/>
      <br/>
        Through our suite of Guardian IT Solutions™, we give peace of mind to
        managers and executives who engage us to protect their most important
        and valuable information and technology assets.
      </div>
    </div>
  );
}
