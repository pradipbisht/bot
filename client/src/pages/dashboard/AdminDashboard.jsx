import React from "react";
import { useAuth } from "../../context/AuthContext";

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white shadow rounded p-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Hello {user?.name || "Admin"}, manage the platform here.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4">
          <div className="p-4 border rounded">User Management</div>
          <div className="p-4 border rounded">Site Settings</div>
          <div className="p-4 border rounded">Analytics</div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
