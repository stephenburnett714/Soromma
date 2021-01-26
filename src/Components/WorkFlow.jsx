import React from "react";
import WorkFlowImage from "../Images/WorkFlow.JPEG";

const WorkFlow = () => {
  return (
    <div className="work-flow-contatiner">
      <img className="work-flow-image" src={WorkFlowImage} alt="" />
      <div className="work-flow">
        <div className="pb-4 text-font">Soromma’s approach to IT problem solving is what differentiates us.</div>

        <div className="text-font">Our highly trained IT professionals integrate business thinking,
        technology expertise and security into every solution we deliver.</div>
      </div>
    </div>
  );
};

export default WorkFlow;
