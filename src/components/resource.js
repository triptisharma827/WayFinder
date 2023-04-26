import React, { useState } from "react";
import FullStackDeveloper from "../data/FullStackDeveloper";
import SoftwareDeveloper from "../data/SoftwareDeveloper";
import ArtificialIntelligence from "../data/ArtificialIntelligence";
import CyberSecurity from "../data/CyberSecurity";
import DataScience from "../data/DataScience";
import AndroidDeveloper from "../data/AndroidDeveloper";


function Resource() {
  const [name, setName] = useState("");
  const [state, setState] = useState(FullStackDeveloper);
  const [divState, setdivState] = useState("");

  function changehandler(e) {
    setName(e.target.value);
  }

  function submitAction(e) {
    e.preventDefault();
    console.log({ name });
    setdivState(name);
    switch (divState) {
      case "FULL STACK DEVELOPER":
        setState(FullStackDeveloper);
        break;
      case "SOFTWARE DEVELOPER":
        setState(SoftwareDeveloper);
        break;
      case "ARTIFICIAL INTELLIGENCE":
        setState(ArtificialIntelligence);
        break;
      case "CYBER SECURITY":
        setState(CyberSecurity);
        break;
      case "DATA SCIENCE":
        setState(DataScience);
        break;
      case "ANDROID DEVELOPER":
        setState(AndroidDeveloper);
        break;
    }
  }

  return (
    <section id="resource">
      <div className="resource-section">
      <h1>Domain Analysis</h1>
      <div className="resource-form">
        <form>
          <input
            className="search-bar"
            type="text"
            value={name}
            placeholder="Enter category name"
            onChange={changehandler}
          />
          <button type="submit" onClick={submitAction}>
            Search
          </button>
        </form>
      </div>
      <div className="scroll-resource">
        <div className="main-page">
          <div className="heading"><img src={state.titleImage1} alt="vector1" className="vectorimgleft" />
          <div  className="vectorimgcenter"><h1>{state.title}</h1></div>
          <img
            src={state.titleImage2}
            alt="vector2"
            className="vectorimgright"
          /></div>
          <ul type="none" className="desc">
            <li>{state.highlights.item1}</li>
            <li>{state.highlights.item2}</li>
            <li>{state.highlights.item3}</li>
          </ul>
          
          <div className="row boxes">
            <div className="boxBlue col-3">
              <h2>Choose your Tech Stack</h2>
            </div>
            <div className="boxGreen col-3">
              <h2>Learn from the best Resources</h2>
            </div>
            <div className="boxBlue col-3">
              <h2>Build Innovative Projects</h2>
            </div>
            <div className="boxGreen col-3">
              <h2>Prepare yourself for corporate</h2>
            </div>
          </div>
        </div>
        <div className="second-page">
        
          <img src={state.titleImage4} alt="techStack" className="techHeading" />
          <img src={state.titleImage3} className="techVector" alt="..."></img>
          <div className="row tech">
            <div className="col-4 technology">
              <img src={state.techStack.tech1} alt="..." height={"50px"} width={"50px"} />
              <h2>{state.techStack.text1}</h2>
            </div>
            <div className="col-4 technology">
              <img src={state.techStack.tech2} alt="..." height={"50px"} width={"50px"} />
              <h2>{state.techStack.text2}</h2>
            </div>
            <div className="col-4 technology">
              <img src={state.techStack.tech3} alt="..." height={"50px"} width={"50px"} />
              <h2>{state.techStack.text3}</h2>
            </div>
          </div>
          <div className="row">
          <div className="col-4 technology">
              <img src={state.techStack.tech4} alt="..." height={"50px"} width={"50px"} />
              <h2>{state.techStack.text4}</h2>
            </div>
            <div className="col-4 technology">
              <img src={state.techStack.tech5} alt="..." height={"50px"} width={"50px"} />
              <h2>{state.techStack.text5}</h2>
            </div>
            <div className="col-4 technology">
              <img src={state.techStack.tech6} alt="..." height={"50px"} width={"50px"} />
              <h2>{state.techStack.text6}</h2>
            </div>
          </div>
          
        </div>
        <div className="third-page">
          <h1 className="best-res">GET THE BEST LEARNING RESOURCE</h1>
          <div className="row blog-link">
            <div className="col-6">
              <h3>Blog Links</h3>
              <ul className="list" type="none">
                <li><a href={state.blogs.blog1} target="blank">{state.blogs.blog1}</a></li>
                <li><a href={state.blogs.blog2} target="blank">{state.blogs.blog2}</a></li>
                <li><a href={state.blogs.blog3} target="blank">{state.blogs.blog3}</a></li>
                <li><a href={state.blogs.blog4} target="blank">{state.blogs.blog4}</a></li>
                <li><a href={state.blogs.blog5} target="blank">{state.blogs.blog5}</a></li>
                <li><a href={state.blogs.blog6} target="blank">{state.blogs.blog6}</a></li>
              </ul>
            </div>
            <div className="col-6">
              <h3>Tutorials</h3>
              <ul className="list" type="none">
                <li><a href={state.tutorials.link1} target="blank">{state.tutorials.tutorial1}</a></li>
                <li><a href={state.tutorials.link2} target="blank">{state.tutorials.tutorial2}</a></li>
                <li><a href={state.tutorials.link3} target="blank">{state.tutorials.tutorial3}</a></li>
                <li><a href={state.tutorials.link4} target="blank">{state.tutorials.tutorial4}</a></li>
                <li><a href={state.tutorials.link5} target="blank">{state.tutorials.tutorial5}</a></li>
                <li><a href={state.tutorials.link6} target="blank">{state.tutorials.tutorial6}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Resource;