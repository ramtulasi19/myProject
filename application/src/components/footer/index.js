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
            <FooterLink>123-456-7890</FooterLink>
            <FooterLink href="mailto:info@nezlabs.com">info@nezlabs.com</FooterLink>
            <FooterLink>14550 NE 35 ST</FooterLink>
            <FooterLink>Bellevue, WA 98007</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Follow Us</FooterH2>
            <FooterLink href="https://www.linkedin.com/company/nezlabs/?viewAsMember=true">LinkedIn</FooterLink>
          </div>
          <div>
            <p>Copyright 2021 Nez Labs, LLC</p>
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
