import React from "react";
import { Link } from "react-router-dom";
import { Target, Users, Award, CheckCircle, ArrowRight } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner - Page title on deep blue background */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About{" "}
            <span className="border-b-4 border-teal-400">DigitalGrow</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're a team of passionate digital marketing experts dedicated to
            helping businesses achieve remarkable growth through innovative
            strategies and proven results.
          </p>
        </div>
      </section>

      {/* Mission Statement - Centered text with teal underline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our{" "}
            <span className="text-teal-600 border-b-2 border-teal-600">
              Mission
            </span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To empower businesses of all sizes with cutting-edge digital
            marketing strategies that drive measurable results. We believe in
            the power of data-driven decisions, creative excellence, and
            personalized approaches that transform brands and accelerate growth.
          </p>
        </div>
      </section>

      {/* Our Process - Three steps with icons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              How we help your business grow in three simple steps
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Step 1: Discover */}
            <div className="text-center">
              <div className="bg-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Discover
              </h3>
              <p className="text-gray-600">
                We analyze your business, competitors, and market to understand
                your unique challenges and opportunities for growth.
              </p>
            </div>

            {/* Step 2: Build */}
            <div className="text-center">
              <div className="bg-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Build
              </h3>
              <p className="text-gray-600">
                We create customized digital marketing strategies and campaigns
                tailored specifically to your business goals and target
                audience.
              </p>
            </div>

            {/* Step 3: Grow */}
            <div className="text-center">
              <div className="bg-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Grow
              </h3>
              <p className="text-gray-600">
                We execute, monitor, and optimize your campaigns continuously to
                ensure maximum performance and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team - Grid with photos and roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The experts behind your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
                  alt="Team Member"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Michael Chen
              </h3>
              <p className="text-teal-600 font-medium mb-2">
                CEO & Digital Strategy Director
              </p>
              <p className="text-gray-600 text-sm">
                15+ years in digital marketing with expertise in SEO, PPC, and
                growth strategy.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
                  alt="Team Member"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sarah Johnson
              </h3>
              <p className="text-teal-600 font-medium mb-2">
                Head of Content Marketing
              </p>
              <p className="text-gray-600 text-sm">
                Creative content strategist specializing in brand storytelling
                and social media.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
                  alt="Team Member"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                David Rodriguez
              </h3>
              <p className="text-teal-600 font-medium mb-2">
                Technical SEO Specialist
              </p>
              <p className="text-gray-600 text-sm">
                Data-driven SEO expert with a track record of improving organic
                rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different - Comparison with teal highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why We're Different
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Traditional Agencies */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Traditional Agencies
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">
                      One-size-fits-all solutions
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">
                      Limited reporting and transparency
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Slow response times</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">
                      Focus on vanity metrics
                    </span>
                  </li>
                </ul>
              </div>

              {/* DigitalGrow */}
              <div className="bg-teal-50 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-teal-900 mb-6">
                  DigitalGrow
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                    <span className="text-teal-800">
                      Customized strategies for each business
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                    <span className="text-teal-800">
                      Real-time dashboards and detailed reports
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                    <span className="text-teal-800">
                      24/7 support and quick responses
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                    <span className="text-teal-800">
                      Focus on ROI and business growth
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help your business achieve its growth goals
            through strategic digital marketing.
          </p>
          <Link
            to="/contact"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center">
            Start Your Project With Us
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
