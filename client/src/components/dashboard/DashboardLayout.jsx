import React from "react";
import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  PlusCircle,
  User,
  Users,
  BarChart3,
  Shield,
  Settings,
} from "lucide-react";

function SidebarLink({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
            : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
        }`
      }>
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </NavLink>
  );
}

export default function DashboardLayout({ children, title = "Dashboard" }) {
  const { user } = useAuth();
  const isAdmin = !!(user?.isAdmin || user?.role === "admin");

  const commonLinks = [
    { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { to: "/blog/create", label: "Create Blog", icon: PlusCircle },
    { to: "/profile", label: "Profile", icon: User },
  ];

  const adminLinks = [
    { to: "/admin", label: "Admin Overview", icon: LayoutDashboard },
    { to: "/admin/users", label: "User Management", icon: Users },
    { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
    { to: "/admin/moderation", label: "Content Moderation", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">DigitalGrow</h2>
          <p className="text-sm text-gray-500 mt-1">Control Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {commonLinks.map((link) => (
            <SidebarLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              label={link.label}
            />
          ))}

          {isAdmin && (
            <>
              <div className="pt-6 pb-2">
                <div className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Admin Tools
                </div>
              </div>
              {adminLinks.map((link) => (
                <SidebarLink
                  key={link.to}
                  to={link.to}
                  icon={link.icon}
                  label={link.label}
                />
              ))}
            </>
          )}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <NavLink
            to="/company-access/login"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            <Settings className="w-4 h-4" />
            Admin Settings
          </NavLink>
        </div>
      </aside>

      <div className="flex-1">
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>

        <main className="p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
