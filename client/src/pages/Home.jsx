import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Users,
  TrendingUp,
  Target,
  Award,
  Zap,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with primary and secondary CTAs */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Grow Your Business with
                <span className="text-teal-300"> Digital Marketing</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                We help businesses scale with proven digital marketing
                strategies. From SEO to social media, we deliver results that
                matter.
              </p>

              {/* Primary and Secondary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-center">
                  Get My Free Growth Plan
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center">
                  Explore Our Work
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-300">500+</div>
                  <div className="text-sm text-blue-200">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-300">98%</div>
                  <div className="text-sm text-blue-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-300">2.5x</div>
                  <div className="text-sm text-blue-200">Avg ROI Increase</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=500&h=400"
                  alt="Digital Marketing Team"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot - Six interactive cards with teal icons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-teal-600">Digital Marketing</span>{" "}
              Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to grow your business
              and dominate your market
            </p>
          </div>

          {/* Interactive service cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Services */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SEO Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                Improve your search rankings and drive organic traffic with our
                proven SEO strategies.
              </p>
              <Link
                to="/services"
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Social Media Marketing */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Social Media Marketing
              </h3>
              <p className="text-gray-600 mb-4">
                Build your brand presence and engage customers across all social
                platforms.
              </p>
              <Link
                to="/services"
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* PPC Advertising */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                PPC Advertising
              </h3>
              <p className="text-gray-600 mb-4">
                Get immediate results with targeted paid advertising campaigns
                that convert.
              </p>
              <Link
                to="/services"
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Content Marketing */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Content Marketing
              </h3>
              <p className="text-gray-600 mb-4">
                Create compelling content that attracts, engages, and converts
                your audience.
              </p>
              <Link
                to="/services"
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Web Design */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Web Design & Development
              </h3>
              <p className="text-gray-600 mb-4">
                Beautiful, responsive websites that convert visitors into
                customers.
              </p>
              <Link
                to="/services"
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* AI Solutions */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Automate customer service and lead generation with AI chatbots
                and CRM systems.
              </p>
              <Link
                to="/ai-solutions"
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip - Client logos and testimonial slider on silver background */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Client Logos */}
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-gray-600 mb-8">
              Trusted by 500+ Companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              <div className="text-2xl font-bold text-gray-400">ACME Corp</div>
              <div className="text-2xl font-bold text-gray-400">TechFlow</div>
              <div className="text-2xl font-bold text-gray-400">StartupX</div>
              <div className="text-2xl font-bold text-gray-400">GrowthCo</div>
              <div className="text-2xl font-bold text-gray-400">ScaleTech</div>
              <div className="text-2xl font-bold text-gray-400">
                InnovateNow
              </div>
            </div>
          </div>

          {/* Testimonial Slider */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-xl text-gray-800 font-medium mb-6">
                "DigitalGrow transformed our online presence completely. Our
                website traffic increased by 300% and leads by 250% in just 6
                months!"
              </blockquote>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    Sarah Johnson
                  </div>
                  <div className="text-gray-600">CEO, TechStart Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Three highlight points with teal underlines on silver background */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="text-teal-600 border-b-4 border-teal-600">
                DigitalGrow
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Data-Driven Results */}
            <div className="text-center">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                <span className="border-b-2 border-teal-600">
                  Data-Driven Results
                </span>
              </h3>
              <p className="text-gray-600 text-lg">
                Every strategy is backed by comprehensive analytics and data
                insights to ensure maximum ROI for your investment.
              </p>
            </div>

            {/* Expert Team */}
            <div className="text-center">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                <span className="border-b-2 border-teal-600">Expert Team</span>
              </h3>
              <p className="text-gray-600 text-lg">
                Our certified specialists have years of experience in digital
                marketing across various industries and platforms.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="text-center">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                <span className="border-b-2 border-teal-600">24/7 Support</span>
              </h3>
              <p className="text-gray-600 text-lg">
                Round-the-clock support and monitoring to ensure your campaigns
                perform optimally at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner - Full-width teal background with white text */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that trust DigitalGrow to
            accelerate their growth. Get your free consultation today!
          </p>
          <Link
            to="/contact"
            className="bg-white text-teal-600 hover:bg-gray-100 px-12 py-4 rounded-lg font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
