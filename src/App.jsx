import { useEffect, useLayoutEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradientPrimary1 from "./components/LineGradient1";
import LatestSchedule from "./scenes/LatestSchedule.jsx";
import PreviousSchedule from "./scenes/PreviousSchedule.jsx";
import PriorityNotices from "./scenes/PriorityNotices.jsx";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) {
        window.scroll(0, el.offsetTop);
      }
    }, 200);
  }, []);

  return (
    <div className="">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 md:4/6 mx-auto">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradientPrimary1 />
      <div className="w-5/6 sm:w-3/5  mx-auto">
        <PriorityNotices setSelectedPage={setSelectedPage} />
      </div>
      <LineGradientPrimary1 />
      <div className="w-5/6 sm:w-3/5 mx-auto">
        <LatestSchedule setSelectedPage={setSelectedPage} />
      </div>
      <LineGradientPrimary1 />
      <div className="w-5/6 sm:w-3/5  mx-auto">
        <PreviousSchedule setSelectedPage={setSelectedPage} />
      </div>
      <Footer setSelectedPage={setSelectedPage} className="z-10 mt-auto" />
    </div>
  );
}

export default App;
