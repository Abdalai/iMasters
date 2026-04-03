import React from "react";
import "../styles/home.css";
import Hero from "../components/Hero";


const Home = () => {

  return (
    <div className="home-page">
      <Hero />
      <div className="body-container">
        <section className="Technologies">
          <h1 className="main-heading">Technologies We Have Mastered</h1>
              <div class="wrapper">
                <div class="item item1">
                  <img src="/images/Apple_Tech_Partner_Logo_2ln_Blk_CI_050725.svg" alt="Logo 1" />
                </div>
                <div class="item item2">
                  <img src="/images/logo2.png" alt="Logo 2" />
                </div>
                <div class="item item3">
                  <img src="/images/logo3.png" alt="Logo 3" />
                </div>
                <div class="item item4">
                  <img src="/images/logo4.png" alt="Logo 4" />
                </div>
                <div class="item item5">
                 <img src="/images/Apple_Tech_Partner_Logo_2ln_Blk_CI_050725.svg" alt="Logo 1" />
                </div>
                <div class="item item6">
                  <img src="/images/logo2.png" alt="Logo 2" />

                </div>
                <div class="item item7">
                  <img src="/images/logo3.png" alt="Logo 3" />
                </div>
                <div class="item item8">
                  <img src="/images/logo4.png" alt="Logo 4" />
                </div>
              </div>
        
        </section> 
        
        <section  className="hero-section" id="container-top1">
          <img className="hero-image" id="hero-image"  alt="iMasters" src="/images/Productivity_and_Peace_of_Mind.png"></img>
          <div className="hero-content-container container ">
            <div className="hero-content">
              <h1 className="main-heading">Productivity and Peace of Mind</h1>
              <p className="main-body">At the point when you work with iMasters , you can have confidence that we are taking care of your IT. We accomplish the specialized work so you can zero in on additional important, useful undertakings that advance business development and benefit.</p>
            </div>
          </div>
        </section>
        
        <section  className="hero-section" id="container-top2">
          
          <div className="hero-content-container container">
            <div className="hero-content">
              <h1 className="main-heading">Personalised Service and Personnel</h1>
              <p className="main-body">We’ll dole out you an individual specialist. As your chief resource, their top to bottom information on your business will permit them to make an innovation blend explicitly took care of your requirements.</p>
              
            </div>
            <img className="hero-image" id="hero-image"  alt="iMasters" src="/images/20943584-Converted-1536x1536.gif"></img>
          </div>
        </section>
        
        
        <section  className="hero-section" id="container-top3">
          <img className="hero-image" id="hero-image"  alt="iMasters" src="/images/20945101-Converted-1.png"></img>
          <div className="hero-content-container container">
            <div className="hero-content">
              
              <h1 className="main-heading">Performance and Pricing</h1>
              <p className="main-body">We eliminate the specialized snags, assisting you with benefiting from your innovation. We likewise guarantee the end product tends to reflect its price at a fair cost.</p>
            </div>
          </div>
        </section>
            

        <section className="Choose_iMasters" id="container-top4">
          <h1 className="main-heading">Why Choose iMasters?</h1>
             
            <div className="cards_Container">
                <div className="cards">
                  <img  alt="iMasters"  src="/images/020-support-3.gif"></img>
                  <h2>We’re Apple Focused</h2>
                  <p className="main-body">We have mastered the Apple echo system and can guide through every part. We also have established a great hybrid environment when a Windows PC is needed. <br/> <br/>We have mastered the Apple echo system and can guide through every part. We also have established a great hybrid environment when a Windows PC is needed.</p>
                  
                </div>
                <div className="cards">
                  <img  alt="iMasters" src="/images/010-laptop.gif"></img>
                  <h2>We’re Up To Date</h2>
                  <p className="main-body">We train our staff on the latest betas and kits so we study the pros and cons of every system. We learn the lesson so you don’t have to.</p>
                </div>
                <div className="cards">
                  <img  alt="iMasters" src="/images/017-clipboard.gif"></img>
                  <h2>We Boost Time Efficiency</h2>
                  <p className="main-body">We understand that time is money. Therefore we design our services to increase your productivity to assist your show while lowering expenses.</p>
                </div>
            </div>
        </section>
      </div>
      
    </div>
  );
};

export default Home;
