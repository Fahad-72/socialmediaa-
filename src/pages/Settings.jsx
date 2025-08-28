import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const { user, update } = useAuth();
  const save = () => {
    const name = prompt("New name", user.name);
    if (name) update({ name });
  };
  return (
    <div className="stack gap">
      <div className="card">
        <div className="row between">
          <div>Theme</div>
          <button onClick={()=>setTheme(theme==="dark"?"light":"dark")}>Toggle</button>
        </div>
      </div>
      <div className="card">
        <div className="row between">
          <div>Profile</div>
          <button onClick={save}>Edit</button>
        </div>
      </div>
    </div>
  );
}
