import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/company-access/login", label: "Login" },
];

function NavLinks({ onClick }) {
  const location = useLocation();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={onClick}
          className={`relative px-3 ubuntu-bold py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
            location.pathname === link.to
              ? "text-teal-600 bg-blue-50"
              : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
          }`}>
          {link.label}
          <span
            className={`absolute ubuntu-bold bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-teal-600 transition-all duration-200 ${
              location.pathname === link.to ? "w-full" : "group-hover:w-full"
            }`}></span>
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
