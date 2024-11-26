import React from "react"; 
import { Link } from "react-router-dom"; 
import "../styles/footer.css"; 


const Footer = () => {
  return (
    <footer className="footer" role="contentinfo"> 
      {/* Mobil footer */}
      <div className="footer-mobile"> 
        <div className="footer-links">
          <details>
            <summary>Address</summary> 
            <div className="footer-text-container">
              <p>
                Company number: 11303532 
              </p>
              <p>
                71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ.
              </p>
            </div>
          </details>
   
        </div>
        <div className="social-media"> 
          <img src="/images/imasters-logo.jpeg"
              alt="imasters_logo" ></img>
        </div>
        <p className="copyright">Copyright ©2025 iMasters Solutions LTD</p>
      </div>

      {/* Desktop-footer */}
      <div className="footer-desktop"> 
        <div className="footer-columns"> 
          <div className="footer-logo">
            <img
              src="/images/imasters-logo.jpeg"
              alt="imasters_logo" 
            />
          </div>
          <div className="footer-column">
            <h4>Address</h4> 
            <p>71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ.</p> 
            <p> Company number: 11303532</p> 
          </div>
          <div className="footer-column">
           
          </div>
         
        </div>
        <p className="copyright">Copyright ©2025 iMasters Solutions LTD </p> 
      </div>
    </footer>
  );
};

export default Footer; 