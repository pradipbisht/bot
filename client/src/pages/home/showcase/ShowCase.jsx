// import AnimatedBackground from "../AnimatedBackground";
// import ShowcaseHeader from "./ShowcaseHeader";
// import ResultsList from "./ResultsList";
// import MetricsCard from "./MetricsCard";

import AnimatedBackground from "../../../components/test/blot/BoltAnimation";
import MetricsCard from "./MetricCard";
import ResultsList from "./ResultList";
import ShowcaseHeader from "./ShowcaseHeader";

const Showcase = () => {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-500">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ShowcaseHeader />
              <ResultsList />
              <div className="mt-8">
                <a
                  href="/case-studies"
                  className="inline-flex items-center bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Read Full Case Study
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <MetricsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
