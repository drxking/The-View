import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Zoomeffect from "./components/Zoomeffect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      repeat: 2,
      delay: 0.4,
      onComplete: () => {
        gsap.to(".loader", {
          top: `-100%`,
          delay: 0.4,
          borderBottomLeftRadius: `50%`,
          borderBottomRightRadius: `50%`,
        });
      },
    });

    tl.to(".loader", {
      fontFamily: "Oswald",
      duration: 0.1,
    });
    tl.to(".loader", {
      fontFamily: "Sour Gummy",
      duration: 0.1,
    });
    tl.to(".loader", {
      fontFamily: "Doto",
      duration: 0.1,
    });
    tl.to(".loader", {
      fontFamily: "Hubot Sans",
      duration: 0.1,
    });
    tl.to(".loader", {
      fontFamily: "Dancing Script",
      duration: 0.1,
    });
  });
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="loader flex items-center justify-center text-4xl fixed h-screen w-screen bg-[#390a3f] z-40 text-white ">
        The View
      </div>
      <div
        style={{ filter: `hue-rotate(30deg)`, transform: `scale(2)` }}
        className=" origin-center overlay bg-[url('./assets/beckground_04min.jpeg')] blur-lg bg-cover bg-center bg-no-repeat fixed top-0 -z-10 h-full w-full"
      ></div>
      <Navbar />
      <Hero />
      {/* <Zoomeffect /> */}
    </div>
  );
};

export default App;
