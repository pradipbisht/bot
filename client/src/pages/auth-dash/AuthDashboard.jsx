import React from "react";
import { useAuth } from "../../context/AuthContext";

function AuthDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow rounded p-6">
        <h1 className="text-2xl font-semibold">
          Welcome, {user?.name || "User"}
        </h1>
        <p className="mt-2 text-gray-600">This is your user dashboard.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">Profile</div>
          <div className="p-4 border rounded">My Projects</div>
          <div className="p-4 border rounded">Settings</div>
        </div>
      </div>
    </div>
  );
}

export default AuthDashboard;
