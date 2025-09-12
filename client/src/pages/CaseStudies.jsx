import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Users,
  Target,
  Award,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Brand: 300% Traffic Increase",
      industry: "E-commerce",
      challenge: "Low organic traffic and poor conversion rates",
      solution: "Complete SEO overhaul, content marketing, and CRO",
      results: {
        traffic: "+300%",
        conversions: "+180%",
        revenue: "+250%",
        timeframe: "6 months",
      },
      beforeImage:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
      afterImage:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
    },
    {
      id: 2,
      title: "SaaS Startup: From 0 to 10K Users",
      industry: "Technology",
      challenge: "New product launch with zero brand awareness",
      solution: "Content marketing, LinkedIn ads, and PR campaigns",
      results: {
        users: "10,000+",
        leads: "+500%",
        mrr: "$50K",
        timeframe: "8 months",
      },
      beforeImage:
        "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
      afterImage:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
    },
    {
      id: 3,
      title: "Local Restaurant: 400% Online Orders",
      industry: "Food & Beverage",
      challenge: "COVID-19 impact on dine-in customers",
      solution:
        "Local SEO, social media marketing, and delivery app optimization",
      results: {
        orders: "+400%",
        followers: "+200%",
        revenue: "+150%",
        timeframe: "4 months",
      },
      beforeImage:
        "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
      afterImage:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner - Deep blue background */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped companies
            across various industries achieve remarkable growth through
            strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Featured Case Study Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Before/After Images */}
                <div className="relative">
                  <div className="grid grid-cols-2 h-full">
                    <div className="relative">
                      <img
                        src={caseStudies[currentSlide].beforeImage}
                        alt="Before"
                        className="w-full h-64 lg:h-96 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={caseStudies[currentSlide].afterImage}
                        alt="After"
                        className="w-full h-64 lg:h-96 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                        After
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study Details */}
                <div className="p-8 lg:p-12">
                  <div className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {caseStudies[currentSlide].industry}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {caseStudies[currentSlide].title}
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-600">
                      {caseStudies[currentSlide].challenge}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-600">
                      {caseStudies[currentSlide].solution}
                    </p>
                  </div>

                  {/* Results Grid */}
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
                            {key.replace("_", " ")}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <Link
                    to="/contact"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center">
                    Get Similar Results
                    <ExternalLink size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl">
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl">
              <ChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentSlide === index
                      ? "bg-teal-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid Cards - All case studies with teal borders and hover effects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Explore our complete portfolio of client transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-teal-600 overflow-hidden">
                {/* Before/After Comparison */}
                <div className="grid grid-cols-2 h-48">
                  <div className="relative">
                    <img
                      src={study.beforeImage}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={study.afterImage}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-teal-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      After
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {study.industry}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {study.title}
                  </h3>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-teal-600">
                        {Object.values(study.results)[0]}
                      </div>
                      <div className="text-xs text-gray-600">
                        {Object.keys(study.results)[0].replace("_", " ")}
                      </div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-teal-600">
                        {Object.values(study.results)[1]}
                      </div>
                      <div className="text-xs text-gray-600">
                        {Object.keys(study.results)[1].replace("_", " ")}
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center">
                    View Full Case Study
                    <ExternalLink size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Additional placeholder cards */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-teal-600 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-gray-400" />
              </div>
              <div className="p-6">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Healthcare
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Medical Practice: 250% Patient Increase
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="text-lg font-bold text-teal-600">+250%</div>
                    <div className="text-xs text-gray-600">patients</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="text-lg font-bold text-teal-600">+400%</div>
                    <div className="text-xs text-gray-600">appointments</div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center">
                  View Full Case Study
                  <ExternalLink size={14} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-teal-600 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <Users className="w-12 h-12 text-gray-400" />
              </div>
              <div className="p-6">
                <div className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Professional Services
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Law Firm: 500% Lead Generation
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="text-lg font-bold text-teal-600">+500%</div>
                    <div className="text-xs text-gray-600">leads</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="text-lg font-bold text-teal-600">+300%</div>
                    <div className="text-xs text-gray-600">clients</div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center">
                  View Full Case Study
                  <ExternalLink size={14} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-teal-600 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <Award className="w-12 h-12 text-gray-400" />
              </div>
              <div className="p-6">
                <div className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Real Estate
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Real Estate: 200% Sales Increase
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="text-lg font-bold text-teal-600">+200%</div>
                    <div className="text-xs text-gray-600">sales</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="text-lg font-bold text-teal-600">+150%</div>
                    <div className="text-xs text-gray-600">inquiries</div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center">
                  View Full Case Study
                  <ExternalLink size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - Centered teal button */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want Results Like These?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Every business is unique, but the results speak for themselves.
            Let's create your success story together.
          </p>
          <Link
            to="/contact"
            className="bg-white text-teal-600 hover:bg-gray-100 px-12 py-4 rounded-lg font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block">
            Let's Talk About Your Goals
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
