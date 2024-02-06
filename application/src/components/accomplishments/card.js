
import React from "react";
import {ExperienceCards} from "../services/ServicesElements";


const Card = ({num, tag}) => {
    return (
        <ExperienceCards>
            <h1>{num}</h1>
            <p>{tag}</p>
        </ExperienceCards>
);
}

export default Card;