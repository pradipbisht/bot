import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ServiceAccordion({
  services,
  openAccordion,
  setOpenAccordion,
}) {
  return (
    <div className="lg:col-span-3">
      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            {/* Accordion Header */}
            <button
              onClick={() =>
                setOpenAccordion(openAccordion === index ? -1 : index)
              }
              className="w-full px-6 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <div className="text-teal-600">{service.icon}</div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="text-teal-600">
                {openAccordion === index ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </div>
            </button>

            {/* Expandable Content */}
            {openAccordion === index && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    What's Included:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mini CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center">
                      Request a Quote
                    </Link>
                    <Link
                      to="/case-studies"
                      className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center">
                      View Case Studies
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
