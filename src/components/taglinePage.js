import React from "react";
import SuccessButton from "./button";
import vector1 from "../images/vector1.png";
import vector2 from "../images/vector2.png";
import tagline from "../images/tagline.png";

function Tagline() {

  return (
    
    <div className="container tagline">
      <div className="row">
        <div className="boxV1 col-3"><img src={vector1} alt="vector1" /></div>
        <div className="box col-6"><img src={tagline} alt="tagline" />
        <SuccessButton  label="Get Started" />        </div>
        <div className="boxV2 col-3"><img src={vector2} alt="vector2" /></div>
      </div>
      <div className="row boxes">
        <div className="boxBlue col-3"><h2>Wide range of career opportunities</h2></div>
        <div className="boxGreen col-3"><h2>Most effective Roadmaps to follow </h2></div>
        <div className="boxBlue col-3"><h2>Seek guidance from the Professionals</h2></div>
        <div className="boxGreen col-3"><h2>Get everything at zero expense</h2></div>
      </div>
      
    </div>
  );
}

export default Tagline;
