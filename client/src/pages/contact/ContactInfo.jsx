import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactInfo() {
  return (
    <div className="lg:col-span-1">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-lg mr-4">
            <Phone className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm EST</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-lg mr-4">
            <Mail className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600">hello@digitalgrow.com</p>
            <p className="text-sm text-gray-500">
              We'll respond within 2 hours
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-lg mr-4">
            <MapPin className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
            <p className="text-gray-600">
              123 Business Street
              <br />
              Suite 100
              <br />
              New York, NY 10001
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-lg mr-4">
            <Clock className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Contact
        </h3>
        <div className="flex space-x-4">
          <a
            href="https://wa.me/15551234567"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors duration-200"
            title="WhatsApp">
            <MessageSquare className="w-6 h-6" />
          </a>
          <a
            href="mailto:hello@digitalgrow.com"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors duration-200"
            title="Email">
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="tel:+15551234567"
            className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-lg transition-colors duration-200"
            title="Phone">
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
