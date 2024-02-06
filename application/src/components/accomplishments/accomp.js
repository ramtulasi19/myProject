import {InfoContainerExp} from "../infoSectionLight/infoElements";
import React from "react";
import Card from "./card";
import {ServicesWrapper} from "../services/ServicesElements";


const Accomp = () => {
    return (
        <div id= "accomp">
            <div>
                <h1 className="pride">We Take Pride in Our Numbers</h1>
            </div>
            <InfoContainerExp  className="bg-white">
                   <Card num= "10+" tag= "Years of Experience" />
                   <Card num= "30+" tag= "Business Partners" />
                   <Card num= "50+" tag= "Projects Completed" />
            </InfoContainerExp>
        </div>
);
}

export default Accomp;