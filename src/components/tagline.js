import React from "react";
import vector1 from "../images/vector1.png";
import vector2 from "../images/vector2.png";
import tagline from "../images/tagline.png";

function Tagline() {
  return (
    <div className="container tagline">
      <div className="row">
        <div className="boxV1 col-3"><img src={vector1} alt="vector1" /></div>
        <div className="box col-6"><img src={tagline} alt="tagline" />
        <a href="#" class="buttonClass">Get Started</a>
        </div>

        <div className="boxV2 col-3"><img src={vector2} alt="vector2" /></div>
      </div>
      
    </div>
  );
}

export default Tagline;
