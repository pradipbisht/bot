import React from "react";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PricingCard({ plan, billingCycle }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-white rounded-2xl shadow-lg p-8 relative transition-all ${
        plan.popular
          ? "ring-2 ring-teal-600"
          : "hover:ring-2 hover:ring-teal-200"
      }`}>
      <div className="text-center mb-8">
        <div
          className={`inline-flex p-3 rounded-xl mb-4 ${
            plan.popular
              ? "bg-teal-100 text-teal-600"
              : "bg-gray-100 text-gray-600"
          }`}>
          {plan.icon}
        </div>

        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

        {/* Price */}
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
        </div>

        <Link
          to="/contact"
          className={`block w-full text-center py-4 px-6 rounded-xl font-semibold text-lg transition-all ${
            plan.popular
              ? "bg-teal-600 hover:bg-teal-700 text-white shadow-lg"
              : "bg-gray-900 hover:bg-gray-800 text-white"
          }`}>
          Get Started
        </Link>
      </div>

      {/* Features */}
      <h4 className="font-semibold text-gray-900 mb-4">What’s Included:</h4>
      <ul className="space-y-3">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default PricingCard;
