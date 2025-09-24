import React from "react";
import { MapPin } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="h-80 bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Visit Our Office
              </h3>
              <p className="text-gray-600">
                123 Business Street, Suite 100
                <br />
                New York, NY 10001
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

