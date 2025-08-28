import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import "../styles/global.css";

export default function AppLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-body">
        <aside className="left-col" />
        <main className="main">
          <Outlet />
        </main>
        <aside className="right-col" />
      </div>
    </div>
  );
}
