import {InfoContainerExp} from "../infoSectionLight/infoElements";
import React from "react";
import Card from "./card";
import {ServicesWrapper} from "../services/ServicesElements";


const Accomp = () => {
    return (
        <>
            <div>
                <h1 className="pride">We Take Pride in Our Numbers</h1>
            </div>
            <InfoContainerExp id= "accomp" className="bg-white">
                   <Card num= "10+" tag= "Years of Experience" />
                   <Card num= "30+" tag= "Business Partners" />
                   <Card num= "50+" tag= "Projects Completed" />
            </InfoContainerExp>
        </>
);
}

export default Accomp;