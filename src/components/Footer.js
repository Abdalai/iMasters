import React from "react"; 
import "../styles/footer.css"; 


const Footer = () => {
  return (
    <footer className="footer" role="contentinfo"> 
      {/* Mobil footer */}
      <div className="footer-mobile"> 
        <p className="copyright"> 71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ. Company number: 11303532 | Copyright ©2025 iMasters Solutions LTD</p>
      </div>

      {/* Desktop-footer */}
      <div className="footer-desktop"> 
        <div className="footer-columns"> 
          <div className="footer-logo">
         
          </div>
          <div className="footer-column">
          
            <p>71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ. Company number: 11303532 | Copyright ©2025 iMasters Solutions LTD</p> 
        
          </div>
          <div className="footer-column">
           
          </div>
         
        </div>
       
      </div>
    </footer>
  );
};

export default Footer; 