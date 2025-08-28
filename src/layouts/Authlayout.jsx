import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="auth-screen">
      <div className="auth-card">
        <Outlet />
      </div>
    </div>
  );
}
