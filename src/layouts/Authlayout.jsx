import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Social Media</h1>
      <Outlet />
    </div>
  );
}
