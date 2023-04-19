// import React, { useState } from "react";
// import FullStackDeveloper from "../data/FullStackDeveloper";
// import SoftwareDeveloper from "../data/SoftwareDeveloper";
// import ArtificialIntelligence from "../data/ArtificialIntelligence";
// import CyberSecurity from "../data/CyberSecurity";
// import DataScience from "../data/DataScience";
// import AndroidDeveloper from "../data/AndroidDeveloper";


// function Resource() {
//   const [name, setName] = useState("");
//   const [state, setState] = useState(FullStackDeveloper);
//   const [divState, setdivState] = useState("");

//   function changehandler(e) {
//     setName(e.target.value);
//   }

//   function submitAction(e) {
//     e.preventDefault();
//     console.log({ name });
//     setdivState(name);
//     switch (divState) {
//       case "FULL STACK DEVELOPER":
//         setState(FullStackDeveloper);
//         break;
//       case "SOFTWARE DEVELOPER":
//         setState(SoftwareDeveloper);
//         break;
//       case "ARTIFICIAL INTELLIGENCE":
//         setState(ArtificialIntelligence);
//         break;
//       case "CYBER SECURITY":
//         setState(CyberSecurity);
//         break;
//       case "DATA SCIENCE":
//         setState(DataScience);
//         break;
//       case "ANDROID DEVELOPER":
//         setState(AndroidDeveloper);
//         break;
//     }
//   }

//   return (
//     <div className="resource-section">
//       <h1>Resource</h1>
//       <div className="resource-form">
//         <form>
//           <input
//             className="search-bar"
//             type="text"
//             value={name}
//             placeholder="Enter category name"
//             onChange={changehandler}
//           />
//           <button type="submit" onClick={submitAction}>
//             Submit
//           </button>
//           <h1>{divState}</h1>
//         </form>
//       </div>
//       <div className="scroll-resource">
//         <div className="main-page">
//           <div className="heading"><img src="images/cuate.png" alt="vector1" className="vectorimgleft" />
//           <h1 className="vectorimgcenter">FULL STACK DEVELOPMENT</h1>
//           <img
//             src="images/amico.png"
//             alt="vector2"
//             className="vectorimgright"
//           /></div>
//           <ul type="none" className="desc">
//             <li>Scope : Increasing {state.scope} every year (Acc. to linkedin report)</li>
//             <li>{state.salary}</li>
//             <li>More info : (refer to the articles) click here</li>
//           </ul>
          
//           <div className="row boxes">
//             <div className="boxBlue col-3">
//               <h2>Choose your Tech Stack</h2>
//             </div>
//             <div className="boxGreen col-3">
//               <h2>Learn from the best Resources</h2>
//             </div>
//             <div className="boxBlue col-3">
//               <h2>Build Innovative Projects</h2>
//             </div>
//             <div className="boxGreen col-3">
//               <h2>Prepare yourself for corporate</h2>
//             </div>
//           </div>
//         </div>
//         <div className="second-page">
        
//           <img src="images/techStack.png" alt="techStack" className="techHeading" />
//           <img src="images/bro.png" className="techVector"></img>
//           <div className="row tech">
//             <div className="col-4 technology">
//               <img src="images/html-5.png" height={"50px"} width={"50px"} />
//               <h2>HTML</h2>
//             </div>
//             <div className="col-4 technology">
//               <img src="images/html-5.png" height={"50px"} width={"50px"} />
//               <h2>HTML</h2>
//             </div>
//             <div className="col-4 technology">
//               <img src="images/html-5.png" height={"50px"} width={"50px"} />
//               <h2>HTML</h2>
//             </div>
//           </div>
//           <div className="row">
//           <div className="col-4 technology">
//               <img src="images/html-5.png" height={"50px"} width={"50px"} />
//               <h2>HTML</h2>
//             </div>
//             <div className="col-4 technology">
//               <img src="images/html-5.png" height={"50px"} width={"50px"} />
//               <h2>HTML</h2>
//             </div>
//             <div className="col-4 technology">
//               <img src="images/html-5.png" height={"50px"} width={"50px"} />
//               <h2>HTML</h2>
//             </div>
//           </div>
          
//         </div>
//         <div className="third-page">
//           <h1 className="best-res">GET THE BEST LEARNING RESOURCE</h1>
//           <div className="row blog-link">
//             <div className="col-6">
//               <h3>Blog Links</h3>
//               <ul type="none">
//                 <li>Blog 1</li>
//                 <li>Blog 2</li>
//                 <li>Blog 3</li>
//                 <li>Blog 4</li>
//                 <li>Blog 5</li>
//                 <li>Blog 6</li>
//               </ul>
//             </div>
//             <div className="col-6">
//               <h3>Tutorials</h3>
//               <ul type="none">
//                 <li>Blog 7</li>
//                 <li>Blog 8</li>
//                 <li>Blog 9</li>
//                 <li>Blog 10</li>
//                 <li>Blog 11</li>
//                 <li>Blog 12</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Resource;






























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
            Submit
          </button>
        </form>
      </div>
      <div className="scroll-resource">
        <div className="main-page">
          <div className="heading"><img src={state.titleImage1} alt="vector1" className="vectorimgleft" />
          <h1 className="vectorimgcenter">{state.title}</h1>
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
              <ul type="none">
                <li>{state.blogs.blog1}</li>
                <li>{state.blogs.blog2}</li>
                <li>{state.blogs.blog3}</li>
                <li>{state.blogs.blog4}</li>
                <li>{state.blogs.blog5}</li>
                <li>{state.blogs.blog6}</li>
              </ul>
            </div>
            <div className="col-6">
              <h3>Tutorials</h3>
              <ul type="none">
                <li>{state.tutorials.tutorial1}</li>
                <li>{state.tutorials.tutorial2}</li>
                <li>{state.tutorials.tutorial3}</li>
                <li>{state.tutorials.tutorial4}</li>
                <li>{state.tutorials.tutorial5}</li>
                <li>{state.tutorials.tutorial6}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resource;