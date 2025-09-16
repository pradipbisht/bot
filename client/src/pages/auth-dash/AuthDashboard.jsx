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
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-blue-900 mb-2">Profile</h3>
            <p className="text-blue-700 text-sm">
              Manage your account settings
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-green-900 mb-2">My Projects</h3>
            <p className="text-green-700 text-sm">View your active projects</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-purple-900 mb-2">Settings</h3>
            <p className="text-purple-700 text-sm">
              Customize your preferences
            </p>
          </div>
        </div>

        <Link
          to="/blog/create"
          className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
          Create Blog Post
        </Link>
      </div>
    </DashboardLayout>
  );
}

export default AuthDashboard;
