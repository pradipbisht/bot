import React from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  Zap,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";

export default function ServicePackages() {
  const packages = [
    {
      icon: Target,
      title: "E-commerce Growth Package",
      description:
        "Complete solution for online stores including Shopify/WooCommerce optimization, product advertising, and conversion optimization.",
      features: [
        "Store Optimization",
        "Product Photography",
        "Conversion Funnels",
        "Ad Campaigns",
      ],
      popular: false,
    },
    {
      icon: Users,
      title: "B2B Growth Package",
      description:
        "LinkedIn marketing, cold email campaigns, CRM automation, and lead nurturing specifically designed for B2B businesses.",
      features: [
        "LinkedIn Automation",
        "Email Sequences",
        "CRM Setup",
        "Lead Scoring",
      ],
      popular: true,
    },
    {
      icon: Zap,
      title: "Startup Launch Package",
      description:
        "Everything you need to launch: branding, website development, marketing funnel setup, and initial campaign management.",
      features: [
        "Brand Identity",
        "Website Build",
        "Marketing Setup",
        "Campaign Launch",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Specialized Solutions
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialized Growth Packages
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored solutions for specific business needs, designed to
            accelerate your growth with proven strategies.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md border p-8 ${
                  pkg.popular
                    ? "border-teal-200 ring-2 ring-teal-100"
                    : "border-gray-200"
                }`}>
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="mb-4">
                    <div className="inline-block bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Simple icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-teal-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {pkg.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {pkg.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`block w-full text-center font-medium py-3 rounded-lg ${
                    pkg.popular
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                  }`}>
                  <div className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find the right package? We'll create a custom solution for
            your business.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800">
            Discuss Custom Solution
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}


