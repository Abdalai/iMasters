import React from 'react';
import "../styles/about.css";
import AboutUsHero from "../components/AboutUsHero.js";
import ContactForm from "../components/ContactForm.js";



const About = () => {

  return (
    <div clt_assName="home-page">
      <AboutUsHero/>
      <div className="body-container">
        
        <section className="Choose_iMasters">
          <h1 className="main-heading">How does iMasters help you?</h1>
            <div className="cards_Container">
              <div className="cards">
                <img alt='imasters'  src="/images/011-guide.gif"></img>
                <h2 >IT Helping Hand</h2>
                <p className="main-body">Keep your organisation secure and beneficial round the clock whether you reach us out by email, phone or face to face.</p>
                
              </div>
              <div className="cards">
                <img alt='imasters' src="/images/038-check.gif"></img>
                <h2>Growing Your Business </h2>
                <p className="main-body">We are well aware of the development needs of organisations like yours. <br/>  <br/>Now, use our authoritative knowledge to tailor our IT service to your professional objectives.</p>
              </div>
              <div className="cards">
                <img alt='imasters' src="/images/007-support-7.gif"></img>
                <h2>We Boost Time Efficiency</h2>
                <p className="main-body">We understand that time is money. Therefore we design our services to increase your productivity to assist your show while lowering expenses.</p>
              </div>
            </div>
        </section><br/><br/><br/>
        
        <div className="hero-section-heading">
         <h1 className="main-heading main-h1">What Our Customers Say About Us</h1>
        </div>
        <section  className="hero-section container-top">
          <img alt='imasters' className="hero-image" id="hero-image" src="/images/5236-1536x878 (1).gif"></img>
          <div className="hero-content-container container  ">
            <div className="hero-content">
              <p className="main-body">iMasters have built the IT infrastructure for my company and always offered great support which helped me stay focused on growing my business with zero IT worries. <br/>  <br/>  <br/>  <br/>  <br/>Sarah W.  <br/>Behaviour Consultancy</p>
            </div>
          </div>
        </section>
        
        <section  className="hero-section container-top">
          
          <div className="hero-content-container container">
            <div className="hero-content">
            <p className="main-body">iMasters provided exceptional Mac Infrastructure support for one of our global defence clients. The team has shown great understanding of the enterprise needs and goals.<br/>  <br/>  <br/>  <br/>  <br/>Tom J.  <br/>Technology Agency</p>           
            </div>
            <img alt='imasters' className="hero-image" id="hero-image" src="/images/Wavy_Bus-32_Single-01-Converted-1-1536x1536.gif"></img>
          </div>
        </section>
        
        
        <section  className="hero-section container-top">
          <img alt='imasters' className="hero-image" id="hero-image" src="/images/5236-1536x8781.gif"></img>
          <div className="hero-content-container container">
            <div className="hero-content">
              <p className="main-body">We’ve worked with iMasters in a previous business for years. When we started the new adventure we partnered with them to help us grow yet another business. <br/>  <br/>  <br/>  <br/>  <br/>Alistair H. <br/>Clothing Brand</p>
            </div>
          </div>
        </section>
        {/* 
        <section className="Our_Clients">
          <h1 className="main-heading">Our Clients</h1>
                <div className="Clients">
                  <div>
                   <img src="/images/PBSC_Pres_Logo.png" alt="Logo 1" />

                  </div>
                  <div>
                    <img src="/images/Skarmklipp-1.png" alt="Logo 2" />
                  </div>
                </div>    
        </section> 

        */}
      </div>

      
    
    </div>
  );
};

export default About;

