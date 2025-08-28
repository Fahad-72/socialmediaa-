import React, { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../service/authService";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(authService.getCurrentUser());

  useEffect(() => {
    // sync from localStorage if another tab logged in
    const onStorage = () => setUser(authService.getCurrentUser());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = async (email, password) => {
    const u = await authService.login(email, password);
    setUser(u);
    return u;
  };

  const register = async (payload) => {
    const u = await authService.register(payload);
    setUser(u);
    return u;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const update = (patch) => {
    const u = authService.updateProfile(patch);
    setUser(u);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, update }}>
      {children}
    </AuthContext.Provider>
  );
}
