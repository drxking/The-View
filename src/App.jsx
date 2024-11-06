import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="overlay bg-[url('./assets/beckground_04min.jpeg')] blur-sm bg-cover bg-center bg-no-repeat fixed top-0 -z-10 h-full w-full"></div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
