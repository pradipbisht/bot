import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactFAQ from "./ContactFAQ";
import ContactMap from "./ContactMap";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to grow your business? Let's discuss your digital marketing
            goals and create a custom strategy that delivers results.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid lg:grid-cols-3 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactFAQ />
      <ContactMap />
    </div>
  );
}
