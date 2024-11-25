import React from "react"; 


function HeroDisplay() {
  return (
    <picture className="hero-image" id="hero-image">
      <source
        srcSet="../../images/hero.gif"
        type="image/gif"
      />
      <source
        srcSet="../../images/hero.gif"
        type="image/gif"
      />
      <img
        src="../../images/hero.gif"
        alt=""
        loading="lazy"
        className="hero-img"
        width="1920"
        height="1080"
      />
    </picture>
  );
}



export default HeroDisplay;


