import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/space.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"
import Icon4 from "../../images/undraw_nature_on_screen_xkli.svg"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Cloud Analytics Modernization</ServicesH2>
          <ServicesP>
            Cloud analytics services help in transforming organization's data into insights that drive growth and innovation.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Data Science Acceleration</ServicesH2>
          <ServicesP>
            Our data science acceleration services help you leverage the power of data to drive business growth.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>
            Versatility in Application</ServicesH2>
          <ServicesP>
            we have experience working with a wide range of industries and applications, and we can help you develop solutions.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>
            Full Customer Experience Service</ServicesH2>
          <ServicesP>
            Our full customer experience service helps you optimize your customer interactions across all touch-points.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
