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
        <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Our Partners"
        text="Phasellus porta sagittis sapien. Nam quis odio eu libero tempus rutrum. Suspendisse nec eros eget ex cursus rhoncus. Proin at velit quis ante pretium porta. Quisque pulvinar, elit et tincidunt ultricies, mauris odio luctus risus, vitae auctor elit risus a tortor. Nunc pulvinar purus id est rutrum vulputate. Mauris venenatis lectus vel nisi semper scelerisque."
      />
        <Services />
        <Accomp/>
        <Guest/>
        <Footer />
    </>
  );
};
