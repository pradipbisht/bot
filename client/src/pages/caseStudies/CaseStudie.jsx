// import HeroBanner from "./HeroBanner";
import CaseStudyCarousel from "./CaseStudyCarousel";
import CaseStudiesGrid from "./CaseStudiesGrid";
// import CTABanner from "./CTABanner";

function CaseStudies() {
  return (
    <div className="min-h-screen">
      {/* <HeroBanner /> */}
      <CaseStudyCarousel />
      <CaseStudiesGrid />
      {/* <CTABanner /> */}
    </div>
  );
}

export default CaseStudies;

