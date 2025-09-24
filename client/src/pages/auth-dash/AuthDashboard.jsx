import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

function AuthDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout title={`Welcome, ${user?.name || "User"}`}>
      <div className="bg-white shadow-lg rounded-xl p-8">
        <p className="text-lg text-gray-600 mb-8">
          This is your user dashboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-900 mb-2">Profile</h3>
            <p className="text-gray-600 text-sm">
              Manage your account settings
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-900 mb-2">My Projects</h3>
            <p className="text-gray-600 text-sm">View your active projects</p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-900 mb-2">Settings</h3>
            <p className="text-gray-600 text-sm">Customize your preferences</p>
          </div>
        </div>

        <Link
          to="/blog/create"
          className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 font-medium">
          Create Blog Post
        </Link>
      </div>
    </DashboardLayout>
  );
}

export default AuthDashboard;

