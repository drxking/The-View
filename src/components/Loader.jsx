import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState,useContext } from "react";
import ClickContext from "./ClickContext";
gsap.registerPlugin(useGSAP);

const Loader = () => {
  let [click, setclick] = useState(false);
  let enter = useRef(null);

  const { setClicked } = useContext(ClickContext);

  useEffect(() => {
    enter.current.addEventListener("click", () => {
      setclick(true);
      setClicked(true);
    });
  }, []);

  useGSAP(() => {
    if (click) {
      gsap.to(".loader", {
        y: `-100%`,
      });
    }
  }, [click]);
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(
      ".text-right",
      {
        x: `-100%`,
        duration: 0.6,
      },
      "a"
    );
    tl.from(
      ".text-left",
      {
        x: `100%`,
        duration: 0.6,
      },
      "a"
    );
    tl.from(
      ".starts",
      {
        // height:0,
        // width:0,
        delay: 1,
        duration: 0.4,
        scale: 0,
      },
      "b"
    );
    tl.from(
      ".center",
      {
        width: 0,
        delay: 0.8,
        duration: 0.4,
      },
      "b"
    );
  });
  return (
    <div className="loader flex items-center justify-center text-4xl fixed h-screen w-screen bg-[#c78cb6] z-40 text-black ">
      <div className="flex uppercase text-[8vw] gap-3 items-center justify-center whitespace-nowrap">
        <div className="left ">
          <div className="wrapper overflow-hidden h-24 flex items-center ">
            <p className="font-[Dunk] text-left ">Immerse</p>
          </div>
        </div>
        <div className="center flex items-center justify-center">
          <div
            ref={enter}
            className="h-32 w-32 border starts overflow-hidden flex items-center justify-center rounded-full bg-white cursor-pointer"
          >
            <div className="h-[93%] w-[93%] border border-gray-300 rounded-full bg-white flex items-center justify-center">
              <p className="text-xs tracking-widest">Start</p>
            </div>
          </div>
        </div>
        <div className="right flex ">
          <div className="wrapper h-24 flex overflow-hidden items-center ">
            <p className="font-[Dunk] text-right flex items-center">
              ME In{" "}
              <img
                className="h-16 invert"
                src="https://labs.noomoagency.com/images/icons/arrowNext.svg"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
