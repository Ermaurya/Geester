import React from "react";

function Dots({ activeIndex, onclick, Data }) {

  return (
    <div className=" only-web">
    <div className="css-student-main">
    <div className="css-student-main d-flex flex-col justify-between h-100">
    <div className=" d-flex justify-between">
      {Data.map((slide, index) => (
        <div
          key={index}
          className={`${activeIndex === index ? "stu-image stu-image-active" : "image"}`}
          onClick={() => onclick(index)}
        >  
         <img className=" stu-image"src={slide.image} />
         </div>
      ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default Dots;
