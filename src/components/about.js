import React from "react";


const Box = ({ icon, heading, description }) => {
    return (
      <div className="box-work">
        <div className="icon-wrapper">
          <img src={icon} alt="icon" className="icon" width={"50px"}/>
        </div>
        <div className="box-content"><h2 className="heading">{heading}</h2>
        <p className="description">{description}</p></div>
      </div>
    );
  };
  const Boxes = () => {
    return (
      <div className="container-work">
        <div className="boxes">
          <Box
            icon="images/work1.png"
            heading="Land to our Website"
            description="open the website and explore the website."
          />
          <Box
            icon="images/work2.png"
            heading="Explore different categories"
            description="Explore different categories and find the best one for you which matches your interest."
          />
          <Box
            icon="images/work3.png"
            heading="Start your learning journey"
            description="once you find the best course for you, you will get all the resources of what to do and how to do."
          />
        </div>
        <div className="vector-work">
          <img src="images/work.png" alt="vector" />
        </div>
      </div>
    );
  };


function About() {
  return (
    <div>
      <div className="work-heading">
        <img src="images/howitwork.png" alt="logo name" height={"50px"}  />
    </div>
    <Boxes />
    
           
    </div>
  );
}

export default About;
