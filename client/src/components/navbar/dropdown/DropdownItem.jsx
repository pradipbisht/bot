import React from "react";
import { Link } from "react-router-dom";

function DropdownItem({ to, children }) {
  return (
    <Link
      to={to}
      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      {children}
    </Link>
  );
}

export default DropdownItem;
