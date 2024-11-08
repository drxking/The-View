import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import { ClickProvider } from "./components/ClickContext";

const App = () => {
  return (
    <ClickProvider>
      <div className="relative min-h-screen overflow-hidden">
        <div
          style={{ filter: `hue-rotate(30deg)`, transform: `scale(2)` }}
          className=" origin-center overlay bg-[url('./assets/beckground_04min.jpeg')] blur-lg bg-cover bg-center bg-no-repeat fixed top-0 -z-10 h-full w-full"
        ></div>
        <Loader />
        <Navbar />
        <Hero />
      </div>
    </ClickProvider>
  );
};

export default App;
