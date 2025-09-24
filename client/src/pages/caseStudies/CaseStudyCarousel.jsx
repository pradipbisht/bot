import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { DatacaseStudies } from "./DatabaseCaseStudies";

function CaseStudyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Success Stories
          </h2>
        </div>

        <div className="relative">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Images */}
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src={DatacaseStudies[currentSlide].beforeImage}
                    alt="Before"
                    className="w-full h-64 lg:h-96 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={caseStudies[currentSlide].afterImage}
                    alt="After"
                    className="w-full h-64 lg:h-96 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    After
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-8 lg:p-12">
                <span className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {caseStudies[currentSlide].industry}
                </span>
                <h3 className="text-3xl font-bold mb-4">
                  {caseStudies[currentSlide].title}
                </h3>
                <p className="mb-4 text-gray-700">
                  <strong>Challenge:</strong>{" "}
                  {caseStudies[currentSlide].challenge}
                </p>
                <p className="mb-6 text-gray-700">
                  <strong>Solution:</strong>{" "}
                  {caseStudies[currentSlide].solution}
                </p>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Object.entries(caseStudies[currentSlide].results).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-4 bg-teal-50 rounded-lg">
                        <div className="text-2xl font-bold text-teal-600">
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key}
                        </div>
                      </div>
                    )
                  )}
                </div>

                <Link
                  to="/contact"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center">
                  Get Similar Results{" "}
                  <ExternalLink size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyCarousel;

