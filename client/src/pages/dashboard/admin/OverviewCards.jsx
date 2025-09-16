import React from "react";
import { Link } from "react-router-dom";

export default function OverviewCards({
  user,
  overview,
  showUsers,
  onToggleUsers,
}) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Overview</h2>
      <p className="text-gray-600 mb-8">
        Hello {user?.name || "Admin"}, manage the platform here.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="text-xs text-blue-600 uppercase tracking-wide font-semibold">
            Users
          </div>
          <div className="text-3xl font-bold text-blue-900">
            {overview?.totalUsers ?? "--"}
          </div>
          <div className="text-sm text-blue-700">Total registered users</div>
          <div className="mt-4 flex gap-2">
            <Link
              to="/admin/users"
              className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Manage
            </Link>
            <button
              onClick={onToggleUsers}
              className="bg-white border border-blue-300 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
              {showUsers ? "Hide" : "View"}
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="text-xs text-green-600 uppercase tracking-wide font-semibold">
            Active Posts
          </div>
          <div className="text-3xl font-bold text-green-900">
            {overview?.totalPosts ?? "--"}
          </div>
          <div className="text-sm text-green-700">Published blog posts</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="text-xs text-purple-600 uppercase tracking-wide font-semibold">
            Active Admins
          </div>
          <div className="text-3xl font-bold text-purple-900">
            {overview?.totalAdmins ?? "--"}
          </div>
          <div className="text-sm text-purple-700">Admins with access</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="text-xs text-orange-600 uppercase tracking-wide font-semibold">
            Recent Posts (7d)
          </div>
          <div className="text-3xl font-bold text-orange-900">
            {overview?.recentCount ?? "--"}
          </div>
          <div className="text-sm text-orange-700">
            Posts in the last 7 days
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          to="/blog/create"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg">
          Create Blog Post
        </Link>
        <Link
          to="/admin/analytics"
          className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
          Analytics
        </Link>
      </div>
    </>
  );
}
