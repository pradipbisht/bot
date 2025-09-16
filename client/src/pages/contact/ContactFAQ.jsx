import React from "react";

export default function ContactFAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              How quickly will you respond?
            </h3>
            <p className="text-gray-600 text-sm">
              We typically respond to all inquiries within 2 hours during
              business hours, and within 24 hours on weekends.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Do you offer free consultations?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes! We provide free 30-minute strategy consultations to discuss
              your goals and how we can help achieve them.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              What information should I prepare?
            </h3>
            <p className="text-gray-600 text-sm">
              Please have your website URL, current marketing challenges, goals,
              and budget range ready for our initial discussion.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Do you work with small businesses?
            </h3>
            <p className="text-gray-600 text-sm">
              Absolutely! We work with businesses of all sizes, from startups to
              enterprises, with customized solutions for every budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
