import React from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  MessageSquare,
  Database,
  Zap,
  BarChart3,
  Users,
  ArrowRight,
} from "lucide-react";

function AISolutions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark blue background with glowing teal AI illustration */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered
                <span className="text-teal-300"> Marketing Solutions</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Automate customer interactions, generate leads, and scale your
                business with cutting-edge AI technology that works 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-center">
                  Book AI Demo
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center">
                  See AI Results
                </Link>
              </div>
            </div>

            {/* AI Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-teal-400/30">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-teal-500/20 rounded-lg p-4 text-center">
                    <Bot className="w-8 h-8 text-teal-300 mx-auto mb-2" />
                    <div className="text-sm text-teal-200">AI Chatbot</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                    <Database className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                    <div className="text-sm text-blue-200">CRM Auto</div>
                  </div>
                  <div className="bg-indigo-500/20 rounded-lg p-4 text-center">
                    <BarChart3 className="w-8 h-8 text-indigo-300 mx-auto mb-2" />
                    <div className="text-sm text-indigo-200">Analytics</div>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                    <Zap className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                    <div className="text-sm text-purple-200">Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards - AI solutions with teal icons and demo buttons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Solutions That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your customer experience and business operations with
              intelligent automation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* AI Receptionist */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                AI Receptionist
              </h3>
              <p className="text-gray-600 mb-6">
                Never miss a lead again. Our AI receptionist handles inquiries,
                books appointments, and qualifies leads 24/7 with human-like
                conversations.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">24/7 customer support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Appointment scheduling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Lead qualification</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Multi-language support</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="block bg-teal-600 hover:bg-teal-700 text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Book AI Demo
              </Link>
            </div>

            {/* Smart Chatbots */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Smart Chatbots
              </h3>
              <p className="text-gray-600 mb-6">
                Intelligent chatbots that understand context, provide accurate
                answers, and seamlessly hand off complex queries to human
                agents.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Natural language processing
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Custom knowledge base</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Seamless human handoff</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Website & social integration
                  </span>
                </div>
              </div>

              <Link
                to="/contact"
                className="block bg-teal-600 hover:bg-teal-700 text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Book AI Demo
              </Link>
            </div>

            {/* CRM Automation */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                CRM Automation
              </h3>
              <p className="text-gray-600 mb-6">
                Automate lead nurturing, follow-ups, and customer communication
                with AI-driven workflows that convert prospects into customers.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Automated lead scoring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Personalized email sequences
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Smart follow-up reminders
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Performance analytics</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="block bg-teal-600 hover:bg-teal-700 text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Book AI Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Infographic - Visual stats with teal progress bars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The AI Advantage
            </h2>
            <p className="text-xl text-gray-600">
              See how AI transforms business performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Before AI */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-red-600 mb-8 text-center">
                Before AI
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Response Time</span>
                    <span className="text-red-600 font-semibold">
                      24+ Hours
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-red-500 h-3 rounded-full"
                      style={{ width: "20%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Lead Conversion</span>
                    <span className="text-red-600 font-semibold">15%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-red-500 h-3 rounded-full"
                      style={{ width: "15%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Customer Satisfaction</span>
                    <span className="text-red-600 font-semibold">65%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-red-500 h-3 rounded-full"
                      style={{ width: "65%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Operational Hours</span>
                    <span className="text-red-600 font-semibold">9-5 Only</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-red-500 h-3 rounded-full"
                      style={{ width: "40%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* After AI */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-200">
              <h3 className="text-2xl font-semibold text-teal-600 mb-8 text-center">
                After AI
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Response Time</span>
                    <span className="text-teal-600 font-semibold">Instant</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-teal-600 h-3 rounded-full"
                      style={{ width: "100%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Lead Conversion</span>
                    <span className="text-teal-600 font-semibold">45%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-teal-600 h-3 rounded-full"
                      style={{ width: "45%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Customer Satisfaction</span>
                    <span className="text-teal-600 font-semibold">92%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-teal-600 h-3 rounded-full"
                      style={{ width: "92%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Operational Hours</span>
                    <span className="text-teal-600 font-semibold">
                      24/7 Always
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-teal-600 h-3 rounded-full"
                      style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Numeric Highlights */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-teal-600 mb-2">3x</div>
              <div className="text-gray-600">Faster Response</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-teal-600 mb-2">200%</div>
              <div className="text-gray-600">More Leads</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-teal-600 mb-2">85%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA - Positioned to be visible while scrolling */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 hidden lg:block">
        <Link
          to="/contact"
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center">
          Request Demo
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Automate Your Growth?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            See how AI can transform your business operations and customer
            experience. Book a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Book Free AI Demo
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View AI Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AISolutions;
