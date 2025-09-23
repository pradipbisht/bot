import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedBackground from "../../components/test/blot/BoltAnimation";

const CTA = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden text-center">
      <AnimatedBackground />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to Work with Us?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's discuss how we can help your business grow 🚀
        </p>
        <Link
          to="/contact"
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:scale-105 inline-flex items-center transition-all duration-300">
          Start Your Project
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
