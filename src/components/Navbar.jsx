import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";

let links = [
  { name: "Work", link: "/work" },
  { name: "Our Story", link: "/our-story" },
  { name: "Labs", link: "/labs" },
  { name: "Insights", link: "/insights" },
  { name: "Connect", link: "/connect" },
];
let lat_projets = [
  { name: "Aquatic biden", link: "/work" },
  { name: "Ateriod Destroyer", link: "/our-story" },
  { name: "Chopstick", link: "/connect" },
];
const Navbar = () => {
  // let bar = useRef(null);
  let wide_menu = useRef(null);
  let close = useRef(null);

  let [changes, setchanges] = useState(false);
  useEffect(() => {
    let stss = false;
    // bar.current.addEventListener("click", () => {
    //   setchanges(true);
    // });
    close.current.addEventListener("click", () => {
      setchanges(false);
    });
  });
  useGSAP(() => {
    let tl = gsap.timeline();
    if (changes) {
      tl.to(
        wide_menu.current,
        {
          top: `0%`,
          duration: 0.2,
        },
        "a"
      );
      tl.to(
        wide_menu.current,
        {
          borderRadius: `0`,
          duration: 0.2,
        },
        "a"
      );
    } else {
      tl.to(
        wide_menu.current,
        {
          top: `-100%`,
          duration: 0.2,
        },
        "a"
      );
      tl.to(
        wide_menu.current,
        {
          borderRadius: `50%`,
          duration: 0.2,
        },
        "a"
      );
    }
  }, [changes]);
  return (
    <>
      <div
        ref={wide_menu}
        className="wide-menu overflow-hidden h-screen w-screen text-white px-10 py-6  z-40  rounded-b-full duration-500 bg-[rgba(57,11,66,0.8)] backdrop-blur-md fixed top-[-100%] left-0"
      >
        <div className="top flex justify-between border-b py-4">
          <div className="logo">The View</div>
          <div
            ref={close}
            className="close h-9 w-9 flex items-center justify-center bg-white rounded-full text-black cursor-pointer"
          >
            <i className="ri-close-fill text-3xl"></i>
          </div>
        </div>
        <div className="bottom flex w-full h-full">
          <div className="w-1/2 border-r left p-10">
            <ul className="flex  flex-col text-6xl gap-5">
              {links.map((link, index) => (
                <a href={link.link} key={index}>
                  {link.name}
                </a>
              ))}
            </ul>
          </div>
          <div className="w-1/2 right p-10 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl mb-8">Latest Projects</h1>
              <ul className="flex flex-col text-4xl gap-4">
                {lat_projets.map((link, index) => (
                  <a href={link.link} key={index}>
                    - {link.name}
                  </a>
                ))}
              </ul>
            </div>
            <div className="pb-10 pt-5 flex gap-4 border-t">
              <a className="hover:underline uppercase text-sm tracking-widest" href="FaceBook">FaceBook</a>
              -
              <a className="hover:underline uppercase text-sm tracking-widest" href="Instagram">Instagram</a>
              -
              <a className="hover:underline uppercase text-sm tracking-widest" href="Twitter">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <div  className="flex justify-between items-center py-8  px-10">
      <div className="logo">The Agency</div>

        <ul className="flex gap-20 font-light">
        {links.map((link, index) => (
                <a className="font-[poppins] " href={link.link} key={index}>
                  {link.name}
                </a>
              ))}

          {/* <li
            ref={bar}
            className="Bar flex flex-col bg-black h-9 w-9 cursor-pointer justify-center items-center rounded-full gap-1"
          >
            <div className="h-[2px] pointer-events-none rounded-lg bg-white w-5 top"></div>
            <div className="h-[2px] pointer-events-none rounded-lg bg-white w-5 center"></div>
            <div className="h-[2px] pointer-events-none rounded-lg bg-white w-5 bottom"></div>
          </li> */}
          {/* <li ref={bar} className="text-xl cursor-pointer">Menu</li> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
