import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Zoomeffect = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrappers",
        start: "top top",
        end: `+=3500`,
        pin: true,
        scrub: 1,
      },
    });
    tl.to(
      ".box-left",
      {
        scale: 2,
        x: `-300%`,
        y: `100%`,
        duration: 1,
      },
      "a"
    );
    tl.to(
      ".box-left",
      {
        filter: `blur(10px)`,
        duration: 1,
        delay: 0.4,
      },
      "a"
    );

    tl.to(
      ".box-right",
      {
        scale: 2.5,
        x: `500%`,
        y: `100%`,
        duration: 1,
      },
      "a"
    );
    tl.to(
      ".box-right",
      {
        filter: `blur(10px)`,
        duration: 1,
        delay: 0.4,
      },
      "a"
    );

    tl.to(
      ".box-left-top",
      {
        scale: 2.5,
        x: `-450%`,
        y: `-50%`,
        duration: 1,
      },
      "a"
    );
    tl.to(
      ".box-left-top",
      {
        filter: `blur(10px)`,
        duration: 1,
        delay: 0.4,
      },
      "a"
    );
    tl.to(
      ".box-right-top",
      {
        scale: 2.5,
        x: `350%`,
        y: `-100%`,
        duration: 1,
      },
      "a"
    );
    tl.to(
      ".box-right-top",
      {
        filter: `blur(10px)`,
        duration: 1,
        delay: 0.4,
      },
      "a"
    );
  });

  return (
    <div className="wrappers h-screen flex items-center justify-center">
      <div className="box-left h-96 w-96 scale-[0.1] absolute left-[30%] bottom-[10%]">
        <img
          src="https://www.lifewire.com/thmb/Qz_zhnE7utRpaXKJiSE-fwNYtbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/001-preparing-images-for-mobile-devices-4034432-60952dad14fd46fdbc1f205c72ff1de8.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="box-left-top h-96 w-72 scale-[0.7] absolute left-[20%] top-[10%]">
        <img
          src="https://www.lifewire.com/thmb/rRKYYGdQN-TQX0U6TkGmsq0sbGA=/360x240/filters:no_upscale():max_bytes(150000):strip_icc()/photog-56e0b1355f9b5854a9f86481.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="box-right-top h-96 w-72 scale-[0] absolute bottom-[20%] left-[40%]">
        <img
          src="https://plus.unsplash.com/premium_photo-1680553491319-4cd0dcd6a3b9?q=80&w=1367&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="box-right h-96 w-72 scale-[0.4] absolute left-[50%]">
        <img
          src="https://plus.unsplash.com/premium_photo-1680553492288-6d92d833a110?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Zoomeffect;
