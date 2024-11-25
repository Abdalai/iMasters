import React from "react";


function AboutHero() {
  return (
    <picture className="hero-image" id="hero-image">
      <source
        srcSet="../../images/5127311.jpg"
        type="image/jpg"
      />
      <source
        srcSet="../../images/5127311.jpg"
        type="image/jpg"
      />
      <img
        src="../../images/5127311.jpg"
        alt=""
        loading="lazy"
        className="hero-img"
        width="1920"
        height="1080"
      />
    </picture>
  );
}




export default AboutHero;