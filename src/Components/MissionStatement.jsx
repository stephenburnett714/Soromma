import React from "react";
import video from "../Images/GoalsVideo.mp4";

export default function MissionStatement() {
  return (
    <div id="about" className="mission-statment-contatiner">
      <video className="video-tag" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
      <div className="mission-statement text-left">
      <h1 className="header-font text-left">Soromma means guardianship. </h1>
        <p className="header-font">Through our suite of Guardian IT Solutions™, we give peace of mind to
        managers and executives who engage us to protect their most important
        and valuable information and technology assets.</p>
      </div>
      <div className="minority-owned-text text-left">
      <p className="header-font text-left left-border pl-minority">We are a minority-owned technology consulting firm with the primary
        focus of providing Guardian IT Solutions™ to small business, corporate
        and public sector clients.</p>
        </div>
    </div>
  );
}
