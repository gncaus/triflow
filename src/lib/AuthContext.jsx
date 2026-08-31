import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { authClient } from "@/api/authClient";

// Replaces the Base44-provided AuthContext. Exposes the same surface the
// original pages relied on (isAuthenticated, isLoadingAuth, authChecked,
// authError, checkUserAuth, navigateToLogin) so ProtectedRoute and App.jsx
// needed no changes beyond the import path.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const [authError, setAuthError] = useState(null);

  const checkUserAuth = useCallback(async () => {
    setIsLoadingAuth(true);
    try {
      const token = authClient.getToken();
      if (!token) {
        setIsAuthenticated(false);
        setUser(null);
        setAuthError(null);
        return;
      }
      const data = await authClient.me();
      setUser(data.user);
      setIsAuthenticated(true);
      setAuthError(null);
    } catch (err) {
      authClient.logout();
      setIsAuthenticated(false);
      setUser(null);
      setAuthError({ type: "auth_required", message: err.message });
    } finally {
      setIsLoadingAuth(false);
      setAuthChecked(true);
    }
  }, []);

  useEffect(() => {
    checkUserAuth();
  }, [checkUserAuth]);

  const navigateToLogin = useCallback(() => {
    window.location.href = "/login";
  }, []);

  const logout = useCallback(() => {
    authClient.logout();
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const value = {
    user,
    isAuthenticated,
    isLoadingAuth,
    // No separate "public settings" fetch in this backend — resolved instantly.
    isLoadingPublicSettings: false,
    authChecked,
    authError,
    checkUserAuth,
    navigateToLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
