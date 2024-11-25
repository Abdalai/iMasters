import "../styles/hero.css"; 
import HeroDisplay from "./HeroDisplay.js";
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content-container container">
        <div className="hero-content">
          <h1 className="main-heading">
            iMasters provides IT support, services and consultancy to promote growth for your business.
          </h1>
          <p className="main-body">
            iMasters offers IT support, services, and consultation to help your business flourish. iMasters will help
            your company to succeed in IT. We provide specialized and business-specific IT approaches that let you
            concentrate on amazing innovation and development and feel free from tedious tasks. Additionally, iMasters
            has a long experience helping small companies and big enterprises in both private and public sectors.
            Whatever your business is set to achieve, iMasters will always keep your IT systems On!
          </p>
        </div>
        <HeroDisplay /> 
      </div>
    </section>
  );
}


