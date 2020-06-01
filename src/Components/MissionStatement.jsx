import React from "react";
import video from "../Images/GoalsVideo.mp4"

export default function MissionStatement() {

  return (
    <div className="mission-statment-contatiner">
        
      <video className='video-tag' autoPlay loop muted>
    <source src={video} type='video/mp4' />
</video>
<div className="mission-statement">
        Our goal is to provide for you our gaurdian IT Solutions to secure your
      information technology assets.
      </div>
    </div>
  );
}
