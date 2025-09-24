import React from "react";
import { User, Settings, Home, LogOut } from "lucide-react";
import DropdownItem from "./DropdownItem";

function DropdownMenu({ onLogout }) {
  return (
    <div className="absolute right-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-200 py-2 z-50 backdrop-blur-sm">
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-medium text-gray-900">Quick Actions</p>
      </div>

      <div className="py-2">
        <DropdownItem to="/dashboard">
          <Home className="w-4 h-4 mr-3 text-teal-500" />
          Dashboard
        </DropdownItem>
        <DropdownItem to="/profile">
          <User className="w-4 h-4 mr-3 text-green-500" />
          Profile
        </DropdownItem>
        <DropdownItem to="/settings">
          <Settings className="w-4 h-4 mr-3 text-purple-500" />
          Settings
        </DropdownItem>
      </div>

      <div className="border-t border-gray-100 pt-2">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg mx-2">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default DropdownMenu;

