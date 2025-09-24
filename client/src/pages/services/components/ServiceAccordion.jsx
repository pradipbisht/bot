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
      <div className="space-y-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md border border-gray-200">
            {/* Accordion Header */}
            <button
              onClick={() =>
                setOpenAccordion(openAccordion === index ? -1 : index)
              }
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center">
                {/* Simple icon */}
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <div className="text-teal-600">
                    {service.icon}
                  </div>
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Expand icon */}
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
              <div className="px-8 pb-6 border-t border-gray-200">
                <div className="pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    What's Included:
                  </h4>

                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {service.services.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 text-center">
                      Request a Quote
                    </Link>

                    <Link
                      to="/case-studies"
                      className="px-6 py-3 border border-teal-600 text-teal-600 font-medium rounded-lg hover:bg-teal-600 hover:text-white text-center">
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


