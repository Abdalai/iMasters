import React from "react";


function FaqHero() {
  return (
    <picture className="hero-image" id="hero-image">
      <source
        srcSet="../../images/faq.jpg"
        type="image/jpg"
      />
      <source
        srcSet="../../images/faq.jpg"
        type="image/jpg"
      />
      <img
        src="../../images/faq.jpg"
        alt=""
        loading="lazy"
        className="hero-img"
        width="1920"
        height="1080"
      />
    </picture>
  );
}




export default FaqHero;