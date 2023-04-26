import React, { useState, useEffect } from 'react';
import axios from "axios";

function Resource() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [highlights, setHighlights] = useState(['','','']);
  const [techStack, setTechStack] = useState([['',''],['',''],['',''],['',''],['',''],['','']]);
  const [blogger, setBlogger] = useState(['','','','','','']);
  const [tutorial, setTutorial] = useState([['',''],['',''],['',''],['',''],['',''],['','']]);
  
  function changehandler(e) {
    setName(e.target.value);
  }
  async function getdata(a){
   await axios.post("https://drab-blue-salamander-wear.cyclic.app/", {
        title: a,
      })
      .then((response) => {
        if(response.data[0]._id!="error")
        {
          setTitle(response.data[0]._id);
          setHighlights(response.data[0].highlights);
          setTechStack(response.data[0].techStack);
          setBlogger(response.data[0].blogs);
          setTutorial(response.data[0].tutorials);
        }
        else alert("error");
        
      });
  }
  
  function submitAction(e) {
    e.preventDefault();
    getdata(name);
  }
  useEffect(() => {
    getdata("ANDROID DEVELOPER");
  }, []);
  return (
    <section id="resource" >
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
          <div className="heading"><img src="images/cuate.png" alt="vector1" className="vectorimgleft" />
          <div  className="vectorimgcenter"><h1>{title}</h1></div>
          <img
            src="images/amico.png"
            alt="vector2"
            className="vectorimgright"
          /></div>
          <ul type="none" className="desc">
            <li>Scope : Increasing {highlights[0]} every year (Acc. to linkedin report)</li>
            <li>Salary : {highlights[1]} LPA</li>
            <li>More info : (refer to the linked video)<a  href={highlights[2]} target='blank'> click here </a></li>
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
        
          <img src= "images/techStack.png" alt="techStack" className="techHeading" />
          <img src="images/bro.png"  className="techVector" alt="..."></img>
          <div className="row tech">
            <div className="col-4 technology">
              <img src={techStack[0][0]} alt="..." height={"50px"} width={"50px"} />
              <h2>{techStack[0][1]}</h2>
            </div>
            <div className="col-4 technology">
            <img src={techStack[1][0]} alt="..." height={"50px"} width={"50px"} />
              <h2>{techStack[1][1]}</h2>
            </div>
            <div className="col-4 technology">
            <img src={techStack[2][0]} alt="..." height={"50px"} width={"50px"} />
              <h2>{techStack[2][1]}</h2>
            </div>
          </div>
          <div className="row">
          <div className="col-4 technology">
          <img src={techStack[3][0]} alt="..." height={"50px"} width={"50px"} />
              <h2>{techStack[3][1]}</h2>
            </div>
            <div className="col-4 technology">
            <img src={techStack[4][0]} alt="..." height={"50px"} width={"50px"} />
              <h2>{techStack[4][1]}</h2>
            </div>
            <div className="col-4 technology">
            <img src={techStack[5][0]} alt="..." height={"50px"} width={"50px"} />
              <h2>{techStack[5][1]}</h2>
            </div>
          </div>
          
        </div>
        <div className="third-page">
          <h1 className="best-res">GET THE BEST LEARNING RESOURCE</h1>
          <div className="row blog-link">
            <div className="col-6">
              <h3>Blog Links</h3>
              <ul className="list" type="none">
              <li><a href={blogger[0]} target="blank">{blogger[0]}</a></li>
              <li><a href={blogger[1]} target="blank">{blogger[1]}</a></li>
              <li><a href={blogger[2]} target="blank">{blogger[2]}</a></li>
              <li><a href={blogger[3]} target="blank">{blogger[3]}</a></li>
              <li><a href={blogger[4]} target="blank">{blogger[4]}</a></li>
              <li><a href={blogger[5]} target="blank">{blogger[5]}</a></li>
              </ul>
            </div>
            <div className="col-6">
              <h3>Tutorials</h3>
              <ul className="list" type="none">
                <li><a href={tutorial[0][1]} target="blank">{tutorial[0][0]}</a></li>
                <li><a href={tutorial[1][1]} target="blank">{tutorial[1][0]}</a></li>
                <li><a href={tutorial[2][1]} target="blank">{tutorial[2][0]}</a></li>
                <li><a href={tutorial[3][1]} target="blank">{tutorial[3][0]}</a></li>
                <li><a href={tutorial[4][1]} target="blank">{tutorial[4][0]}</a></li>
                <li><a href={tutorial[5][1]} target="blank">{tutorial[5][0]}</a></li>
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
