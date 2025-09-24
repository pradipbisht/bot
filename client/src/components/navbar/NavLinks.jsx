import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  // { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/company-access/login", label: "Login" },
];

function NavLinks({ onClick }) {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const filteredLinks = isAuthenticated
    ? links.filter((l) => l.label !== "Login")
    : links;

  return (
    <>
      {filteredLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={onClick}
          className={`relative px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group transform hover:-translate-y-0.5 hover:scale-105 ${
            location.pathname === link.to
              ? "text-teal-600 bg-gradient-to-r from-teal-50 to-blue-50 shadow-md border border-teal-100"
              : "text-gray-700 hover:text-teal-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-teal-50/50 hover:shadow-md"
          }`}>
          {/* Background glow effect */}
          <div
            className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              location.pathname === link.to
                ? "bg-gradient-to-r from-teal-100/50 to-blue-100/50"
                : "bg-gradient-to-r from-teal-50/50 to-blue-50/50"
            }`}></div>

          <span className="relative z-10">{link.label}</span>

          {/* Enhanced bottom indicator */}
          <span
            className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-300 shadow-sm ${
              location.pathname === link.to
                ? "w-3/4 opacity-100"
                : "w-0 group-hover:w-3/4 opacity-0 group-hover:opacity-100"
            }`}></span>

          {/* Subtle inner highlight */}
          <div className="absolute top-1 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      ))}
    </>
  );
}

export default NavLinks;

