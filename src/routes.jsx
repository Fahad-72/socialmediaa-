import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/authcontext";

import Feed from "./pages/feed";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

export default function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Feed />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}
