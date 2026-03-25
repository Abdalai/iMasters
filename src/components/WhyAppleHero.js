import React from "react";


function WhyAppleHero() {
  return (
    <picture className="hero-image" id="hero-image">
      <source
        srcSet="../../images/why-apple.png"
        type="image/png"
      />
      <source
        srcSet="../../images/why-apple.png"
        type="image/jpg"
      />
      <img
        src="../../images/why-apple.png"
        alt=""
        loading="lazy"
        className="hero-img"
        width="1920"
        height="1080"
      />
    </picture>
  );
}




export default WhyAppleHero;