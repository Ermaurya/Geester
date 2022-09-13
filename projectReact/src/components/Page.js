import React, { useEffect, useState } from "react";
// import SliderContent from "./SliderContent";
import Dots from "./Dots";
// import Arrows from "./Arrows";
import Data from "./Data";
// import "./slider.css";
import'./Profile.css';
// import './Proimg.css';

const len = Data.length - 1;

function Page(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      {/* <SliderContent activeIndex={activeIndex} sliderImage={Data} /> */}
      {/* <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      /> */}
      <Dots
        activeIndex={activeIndex}
        sliderImage={Data}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Page;