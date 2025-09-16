import { Link } from "react-router-dom";

function CTABanner() {
  return (
    <section className="py-20 bg-teal-600 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6">
          Want Results Like These?
        </h2>
        <p className="text-xl text-teal-100 mb-8">
          Every business is unique, but the results speak for themselves. Let's
          create your success story together.
        </p>
        <Link
          to="/contact"
          className="bg-white text-teal-600 px-12 py-4 rounded-lg font-bold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition">
          Let's Talk About Your Goals
        </Link>
      </div>
    </section>
  );
}

export default CTABanner;
