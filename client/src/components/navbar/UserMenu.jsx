import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

function UserMenu() {
  return (
    <>
      {/* Large screens: Full button */}
      <Link
        to="/contact"
        className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 group">
        <Phone size={18} />
        Book a Call
        <ArrowRight
          size={16}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </Link>

      {/* Small & Medium screens: Icon button */}
      <Link
        to="/contact"
        className="lg:hidden bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
        title="Book a Call">
        <Phone size={20} />
      </Link>
    </>
  );
}

export default UserMenu;
