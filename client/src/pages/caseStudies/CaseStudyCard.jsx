import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

function CaseStudyCard({ study }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 border border-gray-200 hover:border-teal-500 overflow-hidden max-w-xs mx-auto">
      {/* Images */}
      <div className="grid grid-cols-2 h-28">
        <div className="relative">
          <img
            src={study.beforeImage}
            alt="Before"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-1 left-1 bg-red-500 text-white px-1.5 py-0.5 rounded text-[10px] font-medium">
            Before
          </span>
        </div>
        <div className="relative">
          <img
            src={study.afterImage}
            alt="After"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-1 left-1 bg-teal-600 text-white px-1.5 py-0.5 rounded text-[10px] font-medium">
            After
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="inline-block bg-teal-100 text-teal-600 px-2 py-0.5 rounded-full text-[11px] font-medium mb-2">
          {study.industry}
        </span>
        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
          {study.title}
        </h3>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {Object.entries(study.results)
            .slice(0, 2)
            .map(([key, value]) => (
              <div key={key} className="text-center p-1.5 bg-gray-50 rounded">
                <div className="text-sm font-bold text-teal-600">{value}</div>
                <div className="text-[10px] text-gray-600 capitalize">
                  {key}
                </div>
              </div>
            ))}
        </div>
        <Link
          to="/contact"
          className="text-teal-600 hover:text-teal-700 font-medium text-xs inline-flex items-center">
          View Case Study <ExternalLink size={12} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default CaseStudyCard;
