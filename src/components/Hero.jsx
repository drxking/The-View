import React, { useReducer, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useContext } from "react";
import ClickContext from "./ClickContext";
gsap.registerPlugin(useGSAP);

const Hero = () => {
  let [rotX, setrotX] = useState(0);
  let [rotY, setrotY] = useState(0);

  const { clicked } = useContext(ClickContext);

  let star = useRef(null);
  let effect = useRef(null);

  useEffect(() => {
    let hoverer = effect.current;
    let width = hoverer.getBoundingClientRect().width / 2;
    let height = hoverer.getBoundingClientRect().height / 2;

    hoverer.addEventListener("mousemove", (e) => {
      setrotX(e.clientX - width);
      setrotY(e.clientY - height);
    });
    hoverer.addEventListener("mouseleave", () => {
      setrotX(0);
      setrotY(0);
    });
    star.current.addEventListener("mousedown", () => {
      star.current.style.scale = 0.7;
    });
    star.current.addEventListener("mouseup", () => {
      star.current.style.scale = 1;
    });
    star.current.addEventListener("mouseleave", () => {
      star.current.style.scale = 1;
    });
  });

  useGSAP(() => {
    gsap.to("#animate", {
      transform: `rotateY(${rotX / 300}deg) rotateX(${-(
        rotY / 300
      )}deg) translateY(${-(rotY / 20)}px) translateX(${-(rotX / 20)}px)`,
    });
  }, [rotX, rotY]);

  useGSAP(() => {
    let time = gsap.timeline();
    time.from(".start-anim div", {
      y: `100%`,
      delay: 0.2,
      stagger: 0.1,
    });
    time.from(".para", {
      opacity: 0,
    });
    time.from(".star", {
      scale: 0,
    });
  }, [clicked]);

  return (
    <>
      <div
        ref={effect}
        style={{ perspective: "1000px" }}
        className="hero-container flex items-center flex-col pt-20 px-20 relative"
      >
        <div
          ref={star}
          className="stars duration-300   absolute top-[15%]   z-10 left-[20%]"
        >
          <img src="/star.png" className="h-40 star w-40 pointer-events-none" />
        </div>
        <div id="animate">
          <div className="text-[9vw] leading-[0.9] font-light text-[rgba(0,0,0,0.95)]  uppercase hero-text">
            <div className="wrapper overflow-hidden">
              <div className="start-anim flex justify-between">
                <div>DESign</div> <div>that</div> <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="wrapper overflow-hidden">
              <div className="start-anim flex justify-between gap-6">
                <div>Elevates</div>
                <div className="flex vid-wrapper w-full max-h-28 overflow-hidden rounded-xl">
                  <video
                    autoPlay
                    muted
                    loop
                    className=" w-full object-cover"
                    src="/square.mp4"
                  ></video>
                </div>
                <div>Your</div>
              </div>
            </div>
            <div className="wrapper overflow-hidden">
              <div className="start-anim flex justify-between">
                <div>Digital </div>
                <div> presence</div>
              </div>
            </div>
          </div>
        </div>
        <div className="para w-[85%]  flex justify-end">
          <p className="text-sm mt-5 w-[22%] font-[poppins]">
            We build Bridges, connecting people to brands through interactive
            digital experiences.
          </p>
        </div>
        <div className="arrow font-[poppins] uppercase font-light text-sm flex flex-col items-center">
          <p>Scroll</p>
          <i className="ri-arrow-down-s-line text-xl animate-bounce mt-2"></i>
        </div>
      </div>
    </>
  );
};

export default Hero;
