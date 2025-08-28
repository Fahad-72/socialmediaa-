import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { useNotification } from "../../context/notificationcontext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const { notifs } = useNotification();
  const nav = useNavigate();

  return (
    <header className="nav">
      <div className="brand" onClick={() => nav("/")}>SociaLite</div>
      <nav className="nav-links">
        <NavLink to="/">Feed</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/notifications">Notifications ({notifs.length})</NavLink>
      </nav>
      <div className="nav-actions">
        <button onClick={()=>setTheme(theme==="dark"?"light":"dark")}>{theme==="dark"?"☀️":"🌙"}</button>
        {user && <button onClick={()=>nav(`/profile/${user.id}`)}>Profile</button>}
        {user && <button onClick={logout}>Logout</button>}
      </div>
    </header>
  );
}
