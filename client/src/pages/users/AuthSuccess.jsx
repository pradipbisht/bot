import React, { useEffect, useState } from "react";
import { checkAuthApi } from "../../api/Logs/apiLogs";

export default function AuthSuccess() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);

  const load = async () => {
    setChecking(true);
    try {
      const data = await checkAuthApi();
      setUser(data.user || null);
    } catch (err) {
      console.error("Auth check failed", err);
      setUser(null);
    } finally {
      setChecking(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!mounted) return;
      await load();
    })();
    return () => (mounted = false);
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-600 text-lg animate-pulse">
          Checking authentication...
        </div>
      </div>
    );

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Authentication Failed
          </h2>
          <p className="text-gray-600 mb-6">
            No authenticated user found. Try signing in again.
          </p>
          <a
            href="/"
            className="inline-block bg-teal-600 text-white px-5 py-3 rounded-lg hover:bg-teal-700 transition">
            Go Home
          </a>
        </div>
      </div>
    );

  const status = (user.status || user.allowedStatus || user.allowed || "")
    .toString()
    .toLowerCase();
  const isActive =
    user.role === "admin" ||
    status === "active" ||
    status === "approved" ||
    status === "true";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg max-w-md w-full text-center border border-teal-100">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
          Authentication Status
        </h2>

        <p className="mb-6 text-gray-700">
          Hello,{" "}
          <span className="font-semibold text-teal-600">
            {user.name || user.email}
          </span>
        </p>

        {isActive ? (
          <>
            <p className="text-sm text-gray-600 mb-6">
              ✅ Your account is{" "}
              <span className="font-semibold text-teal-600">active</span>. You
              are signed in successfully.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/dashboard"
                className="bg-teal-600 text-white px-5 py-3 rounded-lg hover:bg-teal-700 transition w-full sm:w-auto">
                Go to Dashboard
              </a>
              <button
                className="bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200 transition w-full sm:w-auto"
                onClick={() => window.location.replace("/")}>
                Home
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm text-orange-600 font-medium mb-4">
              ⏳ Your sign-in request is pending admin approval.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              An administrator must verify and activate your account. You’ll be
              notified once approved. Meanwhile, you can retry checking your
              status or return home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                className="bg-teal-600 text-white px-5 py-3 rounded-lg hover:bg-teal-700 transition w-full sm:w-auto"
                onClick={load}
                disabled={checking}>
                {checking ? "Checking..." : "Check Status"}
              </button>
              <button
                className="bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200 transition w-full sm:w-auto"
                onClick={() => (window.location.href = "/")}>
                Home
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
