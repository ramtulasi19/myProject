import React from "react";
import {
  FooterContainer,
  FooterH2,
  FooterLink,
  FooterWrapper,
} from "./FooterElements";
import "./../../App.css";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-5 px-4 gy-4">
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Nez Labs</FooterH2>
            <FooterLink href="#">123-456-7890</FooterLink>
            <FooterLink href="#">info@nezlabs.com</FooterLink>
            <FooterLink href="#">14550 NE 35 ST</FooterLink>
            <FooterLink href="#">Bellevue, WA 98007</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Follow Us</FooterH2>
            <FooterLink href="https://www.linkedin.com/company/nezlabs/?viewAsMember=true">LinkedIn</FooterLink>
          </div>
          <div>
            <p>© 2020 Nez Labs.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <h1 className="logo-text gray-text center-align">- Nez Labs -</h1>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
