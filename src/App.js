import React, { Component } from "react";

// Component Imports
import Nav from "./components/nav";
import Tagline from "./components/taglinePage";
import Domains from "./components/domains";
// import Work from "./components/workPage";
// import Testimonial from "./components/testimonial";
// import newsletter from "./components/newsletter";
// import Footer from "./components/footer";


function App() {
    return (
      <div>
        <Nav />
        <Tagline />
        <Domains />
        {/* <Work />
        <Testimonial />
        <newsletter />
        <Footer /> */}
        
      </div>
    );
  }
  
  export default App;