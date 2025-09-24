import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import { useAuth } from "../../context/AuthContext";
import { LogOut } from "lucide-react";
import UserNavLink from "./UserNavLink";

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-200/50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <Logo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLinks />
              {isAuthenticated && <UserNavLink user={user} />}
            </div>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {!isAuthenticated ? (
              <UserMenu />
            ) : (
              <button
                onClick={logout}
                className="group relative flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap">
                <LogOut size={18} />
                <span className="font-medium">Sign out</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-teal-600 focus:outline-none bg-gray-100 hover:bg-gray-200 rounded-lg">
              <div className="relative">
                {isOpen ? (
                  <X
                    size={24}
                    className="transform rotate-90 group-hover:rotate-180 transition-transform duration-300"
                  />
                ) : (
                  <Menu
                    size={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                )}
              </div>
            </button>
          </div>
        </div>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      {/* Bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>
    </nav>
  );
}

export default Navbar;
