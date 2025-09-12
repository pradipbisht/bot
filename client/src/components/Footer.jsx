import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    // Global footer with deep blue background and four columns
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="hover:text-teal-400 transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-teal-400 transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-teal-400 transition-colors">
                  PPC Advertising
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-teal-400 transition-colors">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-teal-400 transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-solutions"
                  className="hover:text-teal-400 transition-colors">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="hover:text-teal-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-teal-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-400 transition-colors">
                  Free Tools
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-400 transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-400 transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-400 transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-400 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-teal-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-teal-400" />
                <span className="text-sm">hello@digitalgrow.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-teal-400" />
                <span className="text-sm">
                  123 Business St, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>

            {/* Social Media Icons with teal hover effect */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-white hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section at bottom center */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2024 DigitalGrow. All rights reserved. |
            <Link to="#" className="hover:text-teal-400 transition-colors ml-1">
              Terms of Service
            </Link>{" "}
            |
            <Link to="#" className="hover:text-teal-400 transition-colors ml-1">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
