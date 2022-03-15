import React from "react";
import logo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import call from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import FooterItems from "./FooterItems";
import SocialContainer from "./SocialContainer";

function Footer() {
  return (
    <footer>
      <img className="footer-logo" src={logo} alt="logo" />
      <div className="footer-container">
        <div className="footer-des">
          <FooterItems
            icon={location}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua"
          />
          <FooterItems icon={call} description="+1-543-123-4567" />
          <FooterItems icon={email} description="example@fylo.com" />
        </div>
        <div className="footer-list">
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </div>
        <div className="footer-list">
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </div>
        <SocialContainer />
      </div>
    </footer>
  );
}

export default Footer;
