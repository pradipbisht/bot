import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import { googleLoginApi } from "../../api/auth/apiLogs";

function LogIn() {
  const { login, isLoading, error, clearError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    clearError();
    if (!email || !password) {
      setFormError("Please enter both email and password.");
      return;
    }
    const res = await login(email, password);
    if (res.success) {
      navigate("/"); // Redirect to home or dashboard
    } else {
      setFormError(res.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-white py-10 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <form
          className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
          onSubmit={handleSubmit}>
          {formError && (
            <div className="mb-4 text-red-600 text-sm">{formError}</div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              autoFocus
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold disabled:opacity-50"
            disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-4">Or sign in with</p>
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={async (credentialResponse) => {
                  try {
                    const token = credentialResponse.credential;
                    await googleLoginApi(token);
                    navigate("/auth/success");
                  } catch (err) {
                    console.error("Google login failed", err);
                  }
                }}
                onError={() => console.error("Google Sign-In failed")}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;

