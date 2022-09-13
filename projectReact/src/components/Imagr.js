import React from "react";

function Imagr({ activeIndex, Data }) {
  return (
    <section>
      {Data.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active " : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
          <h1 className="name">{slide.name}</h1>
          <p className="text">{slide.review}</p>

          <img className="slide-image" src={slide.image}/>
        </div>
      ))}
    </section>
  );
}

export default Imagr;
