import React from "react";
import WorkFlowImage from "../Images/WorkFlow.jpg";

const WorkFlow = () => {
  return (
    <div className="work-flow-contatiner">
      <img className="work-flow-image" src={WorkFlowImage} alt="" />
      <div className="work-flow">
        Soromma’s approach to IT problem solving is what differentiates us. Our
        highly trained IT professionals integrate business thinking, technology
        expertise and security into every solution we deliver.
      </div>
    </div>
  );
};

export default WorkFlow;
