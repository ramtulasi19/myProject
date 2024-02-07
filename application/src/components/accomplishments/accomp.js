import React from "react";
import Icon5 from "../../images/undraw_powerful_re_frhr.svg"
import Icon6 from "../../images/undraw_business_deal_re_up4u.svg"
import Icon7 from "../../images/undraw_project_completed_re_jr7u.svg"
import Icon8 from "../../images/undraw_nature_on_screen_xkli.svg"
import {
    ServicesCard,
    ServicesH2,
    ServicesIcon, ServicesP,
    ServicesWrapper
} from "../services/ServicesElements";
import {AccompContainer, AccompH1} from "./styel";


const Accomp = () => {
    return (
        <AccompContainer id= "accomp">
            <div>
                <AccompH1>We Take Pride in Our Numbers</AccompH1>
            </div>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>20+</ServicesH2>
                    <ServicesP>
                        Years of experience
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6} />
                    <ServicesH2>30+</ServicesH2>
                    <ServicesP>
                       Business Partners
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon7} />
                    <ServicesH2>50+</ServicesH2>
                    <ServicesP>
                        Projects Completed
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon8} />
                    <ServicesH2>100+</ServicesH2>
                    <ServicesP>
                        Awards
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </AccompContainer>
);
}

export default Accomp;