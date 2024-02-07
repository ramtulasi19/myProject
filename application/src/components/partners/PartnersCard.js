import {ExperienceCards, ServicesIcon} from "../services/ServicesElements";
import React from "react";

const PartnersCard = ({img}) => {
    return (
        <ExperienceCards>
            <ServicesIcon src={img} />
        </ExperienceCards>
    );
}

export default PartnersCard;