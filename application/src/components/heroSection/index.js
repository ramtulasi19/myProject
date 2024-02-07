import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
} from "./HeroElements";
import Video from "../../videos/video2.mp4";
import "../../App.css";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <h1 className="h1-hero">Nez Labs</h1>
        <p className="hero-text">
          We help businesses with digital transformation.
        </p>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
