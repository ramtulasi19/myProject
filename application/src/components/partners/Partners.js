import {InfoContainerExp} from "../infoSectionLight/infoElements";
import Icon8 from "../../images/Group 17.webp";
import Icon9 from "../../images/Group 20.webp";
import Icon10 from "../../images/Group 28.webp";
import Icon11 from "../../images/Micron.webp";
import React from "react";
import PartnersCard from "./PartnersCard";
import {AccompContainer, AccompH1} from "../accomplishments/styel";
import {ServicesCard, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper} from "../services/ServicesElements";
import Icon5 from "../../images/undraw_powerful_re_frhr.svg";
import Icon6 from "../../images/undraw_business_deal_re_up4u.svg";
import Icon7 from "../../images/undraw_project_completed_re_jr7u.svg";
import {PartnerIcon} from "./Style";


const Partners = () => {
    return (
        <AccompContainer id= "partners">
            <div>
                <AccompH1>Our Partners</AccompH1>
            </div>
            <ServicesWrapper>
                <ServicesCard>
                    <PartnerIcon src={Icon11} />
                    <ServicesH2>Mikron</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon9} />
                    <ServicesH2>Garmoosh</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon10} />
                    <ServicesH2>Pomegranate</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon8} />
                    <ServicesH2>Velocity</ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
        </AccompContainer>
    );
}

export default Partners;