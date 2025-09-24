import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
// import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { user, isLoading, hasCheckedAuth } = useAuth();
  const isAuthenticated = !!user;

  if (isLoading || !hasCheckedAuth) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated && hasCheckedAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Access Denied</h2>
            <p className="mt-2 text-gray-600">
              Please log in to access this page.
            </p>
            <Link
              to="/company-access/login"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (requiredRole) {
    // normalize roles and accept boolean isAdmin flag
    const userRoleRaw = user?.role || (user?.isAdmin ? "admin" : undefined);
    const userRole = userRoleRaw ? String(userRoleRaw).toLowerCase() : null;
    const required = requiredRole ? String(requiredRole).toLowerCase() : null;
    const hasRequiredRole =
      userRole === required || (required === "admin" && !!user?.isAdmin);

    // Debug logging to help diagnose permission issues
    try {
      // only log in dev to avoid noise in production
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.debug(
          "ProtectedRoute: required=",
          required,
          "userRole=",
          userRole,
          "user=",
          user
        );
      }
    } catch (e) {
      // noop
    }
    if (!hasRequiredRole) {
      // Only log in development and avoid exposing sensitive user data
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn(
          "ProtectedRoute: access denied. required=",
          requiredRole,
          "userRole=",
          userRole
        );
      }
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Access Denied
              </h2>
              <p className="mt-2 text-gray-600">
                You don't have permission to access this page.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Required role:{" "}
                <span className="font-medium">{requiredRole}</span>
              </p>
              <p className="text-sm text-gray-500">
                Your role:{" "}
                <span className="font-medium">
                  {user?.role || (user?.isAdmin ? "admin" : "user")}
                </span>
              </p>
              <Link
                to="/dashboard"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }

  return children;
};

export default ProtectedRoute;
