import React from "react";

function PricingHeader({ billingCycle, setBillingCycle }) {
  return (
    <section className="bg-blue-900 text-white py-28 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Pricing & Packages</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Choose the perfect plan to grow your business. All plans include our
          proven digital marketing strategies with transparent pricing.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <span
            className={`font-medium ${
              billingCycle === "monthly" ? "text-white" : "text-blue-300"
            }`}>
            Monthly
          </span>
          <button
            onClick={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-teal-600 transition-colors">
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
  );
}

export default PricingHeader;

