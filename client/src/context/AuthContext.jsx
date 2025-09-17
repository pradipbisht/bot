// src/context/AuthContext.jsx
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef,
} from "react";
import {
  loginApi,
  logoutApi,
  registerApi,
  checkAuthApi,
} from "../api/Logs/apiLogs";

// Create context
const AuthContext = createContext();

// Initial state
const initialState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
  hasCheckedAuth: false,
  error: null,
};

// Action types
const AUTH_ACTIONS = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT: "LOGOUT",
  SET_LOADING: "SET_LOADING",
  SET_USER: "SET_USER",
  CLEAR_ERROR: "CLEAR_ERROR",
};

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
      return { ...state, isLoading: true, error: null };
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        hasCheckedAuth: true,
        error: null,
      };
    case AUTH_ACTIONS.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case AUTH_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
        hasCheckedAuth: true,
        error: null,
      };
    case AUTH_ACTIONS.CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

// Provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const checkingRef = useRef(false);

  // Handle global unauthorized events emitted by axios
  useEffect(() => {
    const handler = () => {
      // logout once when unauthorized detected
      dispatch({ type: AUTH_ACTIONS.LOGOUT });
    };
    window.addEventListener("auth:unauthorized", handler);
    return () => window.removeEventListener("auth:unauthorized", handler);
  }, []);

  // Check session on mount (single call)
  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuth = async () => {
    if (checkingRef.current) return; // already in-flight
    checkingRef.current = true;
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
      const response = await checkAuthApi();

      // API helpers return server JSON (body). Normalize to find user.
      const userData =
        response?.user ||
        response?.data?.user ||
        response?.data?.data?.user ||
        null;
      if (userData) {
        dispatch({ type: AUTH_ACTIONS.SET_USER, payload: userData });
      } else {
        dispatch({ type: AUTH_ACTIONS.SET_USER, payload: null });
      }
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.LOGOUT });
    } finally {
      checkingRef.current = false;
    }
  };

  const login = async (email, password) => {
    try {
      dispatch({ type: AUTH_ACTIONS.LOGIN_START });
      const response = await loginApi(email, password);

      // Normalize login response (helpers return body)
      const userData =
        response?.user ||
        response?.data?.user ||
        response?.data?.data?.user ||
        null;
      if (userData) {
        dispatch({ type: AUTH_ACTIONS.LOGIN_SUCCESS, payload: userData });
        return { success: true, data: userData };
      }
      if (response?.success && response?.data && response.data.user) {
        const ud = response.data.user;
        dispatch({ type: AUTH_ACTIONS.LOGIN_SUCCESS, payload: ud });
        return { success: true, data: ud };
      }
      throw new Error(
        response?.message || response?.data?.message || "Login failed"
      );
    } catch (error) {
      const message = error.response?.data?.message || "Login failed";
      dispatch({ type: AUTH_ACTIONS.LOGIN_FAILURE, payload: message });
      return { success: false, error: message };
    }
  };

  const register = async (name, email, password) => {
    try {
      dispatch({ type: AUTH_ACTIONS.LOGIN_START });
      const response = await registerApi(name, email, password);

      // Normalize register response
      if (
        response?.success &&
        (response.user || response.data?.user || response.data?.data)
      ) {
        const userData =
          response.user || response.data?.user || response.data?.data;
        return { success: true, data: userData };
      }
      if (response?.success && response.data) {
        return { success: true, data: response.data };
      }
      throw new Error(
        response?.message || response?.data?.message || "Registration failed"
      );
    } catch (error) {
      let message = error.response?.data?.message || "Registration failed";
      dispatch({ type: AUTH_ACTIONS.LOGIN_FAILURE, payload: message });
      return { success: false, error: message };
    }
  };

  const logout = async () => {
    try {
      await logoutApi();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      dispatch({ type: AUTH_ACTIONS.LOGOUT });
    }
  };

  const clearError = () => {
    dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
  };

  const value = {
    ...state,
    login,
    register,
    logout,
    clearError,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
