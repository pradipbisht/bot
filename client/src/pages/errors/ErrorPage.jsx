import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full bg-white shadow-md rounded-lg p-8 text-center">
        <div className="text-6xl">😕</div>
        <h1 className="mt-4 text-3xl font-semibold text-gray-900">
          Page Not Found
        </h1>
        <p className="mt-2 text-gray-600">
          The page you are looking for doesn't exist or an unexpected error
          occurred.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md shadow-sm transition-colors">
            Go Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
            Contact Support
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          If you believe this is a bug, please report it.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;

