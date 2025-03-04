import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import Sticky from "./AboutSection.jsx";
import ContactMe from "./ContactMe.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  useLenis(); // Get the Lenis instance

  return (
    <div className="Main">
      <ReactLenis root options={{ lerp: 0.1,duration	: 1}}>
        <NavBar />
        <Home />
        <Sticky />
        <ContactMe />
        <Footer />
      </ReactLenis>
    </div>
  );
}

export default App;
