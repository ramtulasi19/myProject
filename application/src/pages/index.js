import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";
import Guest from "../components/Forms/Guest";
import Accomp from "../components/accomplishments/accomp";
import Partners from "../components/partners/Partners";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection
        image={Image1}
        id="about"
        subtitle="Unleash Your Business's Potential with Nez Labs"
        text="At Nez Labs, we provide customized solutions that help you leverage the power of technology to drive business growth. Our services include cloud analytics modernization, data science acceleration, and full customer experience service. We pride ourselves on delivering unprecedented velocity with impeccable reliability, enabling you to stay ahead of the curve in today's fast-paced business landscape."
      />
        <Partners/>
        <Services />
        <Accomp />
        <Guest/>
        <Footer />
    </>
  );
};
