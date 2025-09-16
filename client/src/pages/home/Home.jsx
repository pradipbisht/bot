import React from "react";
// import TestimonialsSection from "./TestiMonialSection";
// import HeroSection from "./hero/HeroSection";
import About from "../About";
import BoltHero from "../../components/test/blot/BoltHero";
import Showcase from "./showcase/ShowCase";
// import Hero from "../../components/test/HeroSEction";

function Home() {
  return (
    <div>
      {/* <HeroSection /> */}
      {/* <Hero /> */}
      <BoltHero />
      <Showcase />
      {/* <TestimonialsSection /> */}
      <About />
    </div>
  );
}

export default Home;
