import React from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <DashboardLayout title="My Profile">
      <div className="bg-white p-6 rounded shadow max-w-2xl">
        <h3 className="text-xl font-semibold mb-4">Profile</h3>
        {user ? (
          <div className="space-y-3">
            <div>
              <div className="text-sm text-gray-500">Name</div>
              <div className="font-medium">{user.name}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Email</div>
              <div className="font-medium">{user.email}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Role</div>
              <div className="font-medium">{user.role || "user"}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Joined</div>
              <div className="font-medium">
                {new Date(user.createdAt).toLocaleString()}
              </div>
            </div>
          </div>
        ) : (
          <div>You must be logged in to view your profile.</div>
        )}
      </div>
    </DashboardLayout>
  );
}
