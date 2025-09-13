import React from "react";
import { FiUser, FiSettings, FiHome, FiLogOut } from "react-icons/fi";
import DropdownItem from "./DropdownItem";

function DropdownMenu({ onLogout }) {
  return (
    <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md border py-2 z-50">
      <DropdownItem to="/dashboard">
        <FiHome className="inline-block mr-2" /> Dashboard
      </DropdownItem>
      <DropdownItem to="/profile">
        <FiUser className="inline-block mr-2" /> Profile
      </DropdownItem>
      <DropdownItem to="/settings">
        <FiSettings className="inline-block mr-2" /> Settings
      </DropdownItem>

      <button
        onClick={onLogout}
        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
        <FiLogOut /> Logout
      </button>
    </div>
  );
}

export default DropdownMenu;
