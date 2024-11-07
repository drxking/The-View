import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Zoomeffect from "./components/Zoomeffect";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="overlay bg-[url('./assets/beckground_04min.jpeg')] blur-sm bg-cover bg-center bg-no-repeat fixed top-0 -z-10 h-full w-full"></div>
      <Navbar />
      <Hero />
      {/* <Zoomeffect /> */}
    </div>
  );
};

export default App;
