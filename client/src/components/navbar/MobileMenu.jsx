import React from "react";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import { useAuth } from "../../context/AuthContext";
import { LogOut } from "lucide-react";

function MobileMenu({ isOpen, onClose }) {
  const { isAuthenticated, logout } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-gray-100 bg-white">
      <div className="px-4 py-3 space-y-3">
        <div className="space-y-2">
          <NavLinks onClick={onClose} />
        </div>

        <div className="pt-3 border-t border-gray-100">
          {!isAuthenticated ? (
            <UserMenu />
          ) : (
            <button
              onClick={() => {
                logout();
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors">
              <LogOut size={18} />
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;

