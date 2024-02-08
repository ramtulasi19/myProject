import React from "react";
import {
    FooterContainer,
    FooterH2,
    FooterLink, FooterWrapper,
} from "./FooterElements";
import "./../../App.css";
import Icon17 from "../../images/LI-Logo.png"

const Footer = () => {
  return (
      <FooterContainer>
          <div className="col-lg-3 col-sm-6">
              <FooterLink href="mailto:info@nezlabs.com">info@nezlabs.com</FooterLink>
          </div>
          <div className= "col-lg-3 col-sm-6">
              <p>Copyright 2021 Nez Labs, LLC</p>
          </div>
          <div className="col-lg-3 col-sm-6">
              <FooterH2>Follow Us</FooterH2>
              <a href="https://www.linkedin.com/company/nezlabs/?viewAsMember=true">
                  <img src={Icon17} style={{width: '100px', height: 'auto'}} alt="Logo"/>
              </a>
          </div>
      </FooterContainer>
  );
};

export default Footer;
