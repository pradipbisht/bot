import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

function UserNavLink() {
  const { user, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  if (!isAuthenticated) return null;

  return (
    <div className="relative">
      {/* Icon button instead of name */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-full focus:outline-none">
        <FiUser size={20} />
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow rounded">
          <div className="p-2">
            <Link
              to="/dashboard"
              className="block px-2 py-1 hover:bg-gray-100 rounded">
              Dashboard
            </Link>
            {user?.role === "admin" && (
              <Link
                to="/admin"
                className="block px-2 py-1 hover:bg-gray-100 rounded">
                Admin
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="w-full text-left mt-2 px-2 py-1 text-red-600 hover:bg-gray-100 rounded">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserNavLink;
