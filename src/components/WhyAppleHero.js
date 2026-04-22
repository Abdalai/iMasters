import React from "react";


function WhyAppleHero() {
  return (
    <picture className="hero-image" id="hero-image">
      <source
        srcSet="../../images/whyus.jpeg"
        type="image/png"
      />
      <source
        srcSet="../../images/whyus.jpeg"
        type="image/jpg"
      />
      <img
        src="../../images/whyus.jpeg"
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