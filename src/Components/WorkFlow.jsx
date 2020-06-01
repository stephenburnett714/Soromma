import React from "react";
import WorkFlowImage from "../Images/WorkFlow.jpg";

const WorkFlow = () => {
  return (
    <div className="work-flow-contatiner">
      <img className="work-flow-image" src={WorkFlowImage} alt="" />
      <div className="work-flow">
        By creating an effective work flow, we service solutions that guarantee
        the security of your information echnology assets.
      </div>
    </div>
  );
};

export default WorkFlow;
