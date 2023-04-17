import React from "react";
import SuccessButton from "./button";

function Tagline() {

  return (
    
    <div className="container tagline">
      <div className="row">
        <div className="boxV1 col-3"><img src="images/vector1.png" alt="vector1" /></div>
        <div className="box col-6"><img src="images/tagline.png" alt="tagline" />
        <SuccessButton  label="Get Started" />        </div>
        <div className="boxV2 col-3"><img src="images/vector2.png" alt="vector2" /></div>
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
