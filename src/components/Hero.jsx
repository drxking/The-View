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
    let yt = gsap.timeline();
    yt.from(".stok", {
      top: `0%`,
      delay: 0.5,
      duration: 0.6,
    });
    yt.to(".stars", {
      y: `0%`,
      duration: 0.9,
    });
  });
  useGSAP(() => {
    gsap.to("#animate", {
      transform: `rotateY(${rotX / 150}deg) rotateX(${-(
        rotY / 100
      )}deg) translateY(${-(rotY / 20)}px) translateX(${-(rotX / 20)}px)`,
    });
    gsap.to(".stars", {
      transform: `rotateY(${rotX / 80}deg) rotateX(${-(
        rotY / 80
      )}deg) translateY(${rotY / 30}px) translateX(${rotX / 30}px)`,
    });
    gsap.to(".stars-2", {
      transform: `rotate(30deg) translateY(${rotY / 20}px) translateX(${
        rotX / 20
      }px)`,
    });
  }, [rotX, rotY]);

  return (
    <div
      ref={effect}
      style={{ perspective: "1000px" }}
      className="hero-container justify-center min-h-screen flex items-center flex-col pt-5 px-20 relative"
    >
      <div className="stars translate-y-[100%] absolute z-20">
        <img src="/stat.png" className="h-[80vh] object-cover" />
      </div>
      {/* <div className="stars-2 -z-10 absolute top-[-20%]  rotate-[30deg] blur-lg right-[10%]">
        <img src="/star.png" className="h-[140vh] w-[100vh] " />
      </div> */}
      <div id="animate" className="flex flex-col items-center justify-center">
        <div className="text-[10vw] tracking-wider leading-[1.1] relative flex flex-col items-center justify-center  uppercase hero-text">
          <h1 className="stok absolute top-[-100%]">The View</h1>
          <h1 className="font-semibold">The View</h1>
          <h1 className="stok absolute top-[100%]">The View</h1>
        </div>
      </div>
      <div className="w-[90%] absolute bottom-8  flex justify-end">
        <p className="text-sm tracking-widest w-[22%]">
          We build Bridges, connecting people to brands through interactive
          digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Hero;
