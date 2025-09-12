import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Star,
  Zap,
  Target,
  Rocket,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(0);

  // Pricing data
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      monthlyPrice: 997,
      yearlyPrice: 897,
      icon: <Target className="w-8 h-8" />,
      features: [
        "Website audit & optimization",
        "Basic SEO (5 keywords)",
        "Social media setup (2 platforms)",
        "Monthly performance reports",
        "Email support",
        "1 landing page creation",
      ],
      limitations: [
        "No paid advertising",
        "Limited social posts (8/month)",
        "No phone support",
      ],
    },
    {
      name: "Growth",
      description: "Most popular choice for growing businesses",
      monthlyPrice: 1997,
      yearlyPrice: 1797,
      icon: <Zap className="w-8 h-8" />,
      popular: true,
      features: [
        "Everything in Starter, plus:",
        "Advanced SEO (15 keywords)",
        "PPC campaign management ($2K ad spend)",
        "Social media management (4 platforms)",
        "Content creation (8 posts/month)",
        "Email marketing campaigns",
        "Bi-weekly strategy calls",
        "Phone & email support",
        "3 landing pages",
        "A/B testing",
        "Conversion optimization",
      ],
      limitations: ["Limited to $2K monthly ad spend"],
    },
    {
      name: "Scale",
      description: "Enterprise solution for maximum growth",
      monthlyPrice: 3997,
      yearlyPrice: 3597,
      icon: <Rocket className="w-8 h-8" />,
      features: [
        "Everything in Growth, plus:",
        "Premium SEO (unlimited keywords)",
        "Unlimited PPC management",
        "Social media (all major platforms)",
        "Content creation (20 posts/month)",
        "Video content creation",
        "Weekly strategy calls",
        "Dedicated account manager",
        "Unlimited landing pages",
        "Advanced analytics dashboard",
        "AI chatbot integration",
        "CRM setup & automation",
        "Influencer outreach",
        "PR & reputation management",
      ],
      limitations: [],
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What's included in each plan?",
      answer:
        "Each plan includes different levels of service and features. The Starter plan covers basic digital marketing needs, Growth adds advanced features like PPC and content creation, while Scale provides comprehensive enterprise-level solutions with unlimited features.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll gain access to additional features immediately. When downgrading, changes take effect at your next billing cycle.",
    },
    {
      question: "Do you offer custom packages?",
      answer:
        "Yes, we understand that every business has unique needs. We offer custom packages tailored to your specific requirements, industry, and budget. Contact us to discuss your custom solution.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee for all new clients. If you're not satisfied with our services within the first 30 days, we'll provide a full refund, no questions asked.",
    },
    {
      question: "Do I need to sign a long-term contract?",
      answer:
        "No long-term contracts required! All our plans are month-to-month with no setup fees. You have the flexibility to cancel anytime with 30 days notice.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Results timeline varies by service and industry. Typically, you'll see improvements in website traffic within 3-6 months for SEO, immediate results for PPC campaigns, and increased social engagement within the first month.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Pricing & Packages</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Choose the perfect plan to grow your business. All plans include our
            proven digital marketing strategies with transparent, results-driven
            pricing.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span
              className={`font-medium ${
                billingCycle === "monthly" ? "text-white" : "text-blue-300"
              }`}>
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly"
                )
              }
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`font-medium ${
                billingCycle === "yearly" ? "text-white" : "text-blue-300"
              }`}>
              Yearly (Save 10%)
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative ${
                  plan.popular
                    ? "ring-2 ring-teal-600 transform scale-105"
                    : "hover:ring-2 hover:ring-teal-200"
                }`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex p-3 rounded-xl mb-4 ${
                        plan.popular ? "bg-teal-100" : "bg-gray-100"
                      }`}>
                      <div
                        className={
                          plan.popular ? "text-teal-600" : "text-gray-600"
                        }>
                        {plan.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {plan.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-gray-900">
                          $
                          {billingCycle === "monthly"
                            ? plan.monthlyPrice
                            : plan.yearlyPrice}
                        </span>
                        <span className="text-gray-600 ml-2">/month</span>
                      </div>
                      {billingCycle === "yearly" && (
                        <div className="text-sm text-teal-600 font-medium mt-1">
                          Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}
                          /year
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/contact"
                      className={`block w-full text-center py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                        plan.popular
                          ? "bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      }`}>
                      Get Started
                    </Link>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Limitations */}
                    {plan.limitations.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                          Limitations:
                        </h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">
                                {limitation}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Features
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">
                    Starter
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-teal-50">
                    Growth
                    <div className="text-xs text-teal-600 font-normal">
                      Most Popular
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">
                    Scale
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    SEO Keywords
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">5</td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-teal-50">
                    15
                  </td>
                  <td className="py-4 px-6 text-center text-teal-600 font-semibold">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    Social Media Platforms
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">2</td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-teal-50">
                    4
                  </td>
                  <td className="py-4 px-6 text-center text-teal-600 font-semibold">
                    All Major
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    Landing Pages
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">1</td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-teal-50">
                    3
                  </td>
                  <td className="py-4 px-6 text-center text-teal-600 font-semibold">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    PPC Management
                  </td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                  <td className="py-4 px-6 text-center text-teal-600 bg-teal-50">
                    ✓
                  </td>
                  <td className="py-4 px-6 text-center text-teal-600">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    Content Creation
                  </td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-teal-50">
                    8/month
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    20/month
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    AI Chatbot
                  </td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                  <td className="py-4 px-6 text-center text-red-500 bg-teal-50">
                    ✗
                  </td>
                  <td className="py-4 px-6 text-center text-teal-600">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    Dedicated Manager
                  </td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                  <td className="py-4 px-6 text-center text-red-500 bg-teal-50">
                    ✗
                  </td>
                  <td className="py-4 px-6 text-center text-teal-600">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="text-teal-600 flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </div>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Start with a free consultation to determine the best plan for your
            business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Get Free Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
