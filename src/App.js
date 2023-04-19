import React, { Component } from "react";

// Component Imports
import Nav from "./components/nav";
import Tagline from "./components/taglinePage";
import Domains from "./components/domains";
import Work from "./components/about";
import Testimonials from "./components/testimonial";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
import Resource from "./components/resource";



function App() {
    return (
      <div>
        <Nav />
        <Tagline />
        <Work />
        <Domains />
        <Resource />
        <Testimonials />
        <Newsletter />
        <Footer />
        
      </div>
    );
  }
  
  export default App;