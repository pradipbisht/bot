// import Process from "./About-Process";
import Team from "./About-Team";
import CTA from "./About-CTA";
import AboutDifference from "./About-Diff";
import HeroAbout from "./Aboutsample";
import HeroAboutS from "./Aboutsample";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* <AboutHero /> */}
      <HeroAboutS />
      <Team />
      <AboutDifference />
      <CTA />
    </div>
  );
};

export default About;
