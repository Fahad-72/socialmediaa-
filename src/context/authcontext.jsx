import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // fake login (replace with backend)
    if (email && password) {
      const loggedUser = { id: 1, name: "Demo User", email };
      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));
    }
  };

  const register = (name, email, password) => {
    // fake register (replace with backend)
    const newUser = { id: Date.now(), name, email };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
