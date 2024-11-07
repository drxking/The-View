import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
gsap.registerPlugin(useGSAP);
const Hero = () => {
  let [rotX, setrotX] = useState(0);
  let [rotY, setrotY] = useState(0);
  let effect = useRef(null);
  useEffect(() => {
    let hoverer = effect.current;
    let width = hoverer.getBoundingClientRect().width / 2;
    let height = hoverer.getBoundingClientRect().height / 2;

    hoverer.addEventListener("mousemove", (e) => {
      // console.log(e.clientX, e.clientY, width, height);
      setrotX(e.clientX - width);
      setrotY(e.clientY - height);
    });
    hoverer.addEventListener("mouseleave", () => {
      setrotX(0);
      setrotY(0);
    });
  }, []);

  useGSAP(() => {
    gsap.to("#animate", {
      transform: `rotateY(${rotX / 150}deg) rotateX(${-(
        rotY / 100
      )}deg) translateY(${-(rotY / 20)}px) translateX(${-(rotX / 20)}px)`,
    });
    gsap.to(".stars", {
      transform: `rotate(-15deg) translateY(${-(rotY / 10)}px) translateX(${-(rotX / 10)}px)`,
    });
    // gsap.to(".stars-2", {
    //   transform: `rotate(30deg) translateY(${(rotY / 20)}px) translateX(${(rotX / 20)}px)`,
    // });
  }, [rotX, rotY]);

  return (
    <div
      ref={effect}
      style={{ perspective: "1000px" }}
      className="hero-container flex items-center flex-col pt-20 px-20 relative"
    >
      <div className="stars absolute top-[15%] rotate-[-15deg]  z-10 left-[20%]">
        <img src="/star.png" className="h-40 w-40 " />
      </div>
      {/* <div className="stars-2 -z-10 absolute top-[-20%]  rotate-[30deg] blur-lg right-[10%]">
        <img src="/star.png" className="h-[140vh] w-[100vh] " />
      </div> */}
      <div id="animate">
        <div className="text-[9vw] leading-[0.9] font-light  uppercase hero-text">
          <p className="flex justify-between">
            <span>DESign</span> <span>that</span> <span></span>
            <span></span>
            <span></span>
          </p>
          <p className="flex justify-between">
            <span>Elevates</span> <span>Your</span>
          </p>
          <p>Digital presence</p>
        </div>
      </div>
      <div className="w-[85%]  flex justify-end">
        <p className="text-sm mt-5 w-[22%] font-[poppins]">
          We build Bridges, connecting people to brands through interactive
          digital experiences.
        </p>
      </div>
      <div className="arrow font-[poppins] uppercase font-light text-sm flex flex-col items-center">
        <p>Scroll</p>
        <i class="ri-arrow-down-s-line text-xl animate-bounce mt-2"></i>
      </div>
    </div>
  );
};

export default Hero;
