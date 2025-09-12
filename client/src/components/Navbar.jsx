import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Sticky header with logo, navigation, and CTA button
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo section - top left */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-900">
              DigitalGrow
            </Link>
          </div>

          {/* Desktop Navigation Menu - center */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>

              <Link
                to="/pricing"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pricing
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button - top right */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
              Book a Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link
                to="/services"
                className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">
                Services
              </Link>

              <Link
                to="/pricing"
                className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">
                Pricing
              </Link>
              <Link
                to="/blog"
                className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
              <Link
                to="/contact"
                className="block bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-md text-base font-medium mt-2">
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
