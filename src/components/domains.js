import React from "react";
import CategoryPage from "./categoryPage";


function Domains() {
  return (
    <div>
    <div className="container domains">
      <div className="row heading">
        <div className="col-12">
          <h1>Explore Various Domains</h1>
        </div>
        <div className="col-12">
          <p className="subheading">
            Choose your preferred domain and receive a comprehensive roadmap, as
            well as the necessary resources, to help you achieve your goals
            effectively.
          </p>
        </div>
        <div className="col-12"><CategoryPage /></div>
      </div>

    </div>
    
    
    </div>
  );
}

export default Domains;




