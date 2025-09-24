import CaseStudyCard from "./CaseStudyCard";
import { DatacaseStudies } from "./DatabaseCaseStudies";
// import { DatacaseStudies } from "./DatabasecaseStudiesData";

function CaseStudiesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">All Success Stories</h2>
          <p className="text-xl text-gray-600">
            Explore our complete portfolio of client transformations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DatacaseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesGrid;

