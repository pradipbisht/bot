import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Users,
  Target,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";

function Services() {
  const [openAccordion, setOpenAccordion] = useState(0);

  // Service categories data
  const services = [
    {
      id: 0,
      title: "Website & Funnel Marketing",
      icon: <Award className="w-6 h-6" />,
      description:
        "Complete website optimization and conversion funnel solutions",
      services: [
        "Website redesign & optimization (UI/UX improvements)",
        "Landing page creation (for ads, offers, lead generation)",
        "Conversion Rate Optimization (CRO)",
        "A/B testing and performance analysis",
      ],
    },
    {
      id: 1,
      title: "Search Marketing",
      icon: <Search className="w-6 h-6" />,
      description: "Dominate search results and drive targeted traffic",
      services: [
        "Search Engine Optimization (SEO: on-page, off-page, technical)",
        "Local SEO (Google My Business optimization, local citations)",
        "Search Engine Marketing (SEM: Google Ads, Bing Ads)",
        "Keyword research and competitive analysis",
      ],
    },
    {
      id: 2,
      title: "Social Media Marketing",
      icon: <Users className="w-6 h-6" />,
      description: "Build your brand presence across all social platforms",
      services: [
        "Social media management (Instagram, Facebook, LinkedIn, Twitter, TikTok)",
        "Paid ads (Meta Ads, LinkedIn Ads, TikTok Ads)",
        "Influencer marketing campaigns",
        "Content creation (graphics, videos, reels, short-form content)",
      ],
    },
    {
      id: 3,
      title: "Content & Brand Marketing",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Create compelling content that converts",
      services: [
        "Blog writing & SEO content",
        "Email newsletters & drip campaigns",
        "Copywriting for websites & ads",
        "Branding (logo, brand identity, design systems)",
      ],
    },
    {
      id: 4,
      title: "Performance Marketing",
      icon: <Target className="w-6 h-6" />,
      description: "Data-driven campaigns that deliver ROI",
      services: [
        "Paid Ads campaigns",
        "Retargeting ads (bring back past visitors)",
        "Analytics tracking & ROI reporting",
        "Conversion optimization and funnel analysis",
      ],
    },
    {
      id: 5,
      title: "Reputation & Growth Services",
      icon: <Zap className="w-6 h-6" />,
      description: "Manage your reputation and accelerate growth",
      services: [
        "Online reputation management (reviews, ratings, PR mentions)",
        "Lead generation campaigns (LinkedIn automation, cold email)",
        "Customer relationship management (CRM setup & automation)",
        "Chatbots & AI receptionist (to convert more leads)",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header - Deep blue background */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive digital marketing services designed to grow your
            business and dominate your market across all channels.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Accordion Layout - Main Content */}
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

            {/* Sidebar - Quick inquiry form and lead magnet */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Quick Inquiry Form */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Quick Inquiry
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                        <option value="">Select Service</option>
                        <option value="seo">SEO</option>
                        <option value="content-marketing">
                          Content Marketing
                        </option>
                        <option value="social-media">Social Media</option>
                        <option value="paid-ads">Paid Ads</option>
                        <option value="email-marketing">Email Marketing</option>
                        <option value="analytics">Analytics</option>
                        <option value="marketing-tools">Marketing Tools</option>
                        <option value="ai-emerging-tech">
                          AI & Emerging Tech
                        </option>
                        <option value="cro-websites">CRO & Websites</option>
                        <option value="mobile-marketing">
                          Mobile Marketing
                        </option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        placeholder="Tell us about your project..."
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200">
                      Get Free Quote
                    </button>
                  </form>
                </div>

                {/* Lead Magnet */}
                <div className="bg-gradient-to-br from-teal-600 to-blue-700 text-white rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Free Marketing Audit
                  </h3>
                  <p className="text-teal-100 text-sm mb-4">
                    Get a comprehensive analysis of your current marketing
                    efforts and discover opportunities for growth.
                  </p>
                  <Link
                    to="/contact"
                    className="block bg-white text-teal-600 hover:bg-gray-100 text-center font-semibold py-3 rounded-lg transition-colors duration-200">
                    Download Free Audit
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Need Help Choosing?
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our experts are here to help you select the right services
                    for your business goals.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">
                      📞 +1 (555) 123-4567
                    </div>
                    <div className="text-sm text-gray-600">
                      📧 hello@digitalgrow.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Growth Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specialized Growth Packages
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for specific business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* E-commerce Package */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                E-commerce Growth Package
              </h3>
              <p className="text-gray-600 mb-6">
                Complete solution for online stores including
                Shopify/WooCommerce optimization, product advertising, and
                conversion optimization.
              </p>
              <Link
                to="/contact"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block">
                Learn More
              </Link>
            </div>

            {/* B2B Package */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                B2B Growth Package
              </h3>
              <p className="text-gray-600 mb-6">
                LinkedIn marketing, cold email campaigns, CRM automation, and
                lead nurturing specifically designed for B2B businesses.
              </p>
              <Link
                to="/contact"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block">
                Learn More
              </Link>
            </div>

            {/* Startup Package */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Startup Launch Package
              </h3>
              <p className="text-gray-600 mb-6">
                Everything you need to launch: branding, website development,
                marketing funnel setup, and initial campaign management.
              </p>
              <Link
                to="/contact"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
