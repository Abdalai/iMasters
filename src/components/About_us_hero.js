import AboutHero from "./About_Hero_Display";


export default function About_Us_Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content-container container">
        <div className="hero-content">
          <h1 className="main-heading">
            About Us 
          </h1>
          <p className="main-body">
             iMasters is your reevaluated IT division, focused on assisting you with prevailing through combination of development consultancy, business coherence and IT support. By reducing expenses and further developing efficiency through innovation, we give your business the opportunity to go about your best inventive responsibilities.
          </p>
        </div>
        <AboutHero /> 
      </div>
    </section>
  );
}
