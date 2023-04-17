import React, { Component } from "react";

// Component Imports
import Nav from "./components/nav";
import Tagline from "./components/taglinePage";
import Domains from "./components/domains";
import Work from "./components/about";
import Testimonials from "./components/testimonial";
// import newsletter from "./components/newsletter";
// import Footer from "./components/footer";


function App() {
    return (
      <div>
        <Nav />
        <Tagline />
        <Domains />
        <Work />
        <Testimonials />
        
      </div>
    );
  }
  
  export default App;