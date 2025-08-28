import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="card user-card">
      <img className="avatar" src={user?.avatar || `https://api.dicebear.com/6.x/identicon/svg?seed=${user?.name}`} alt="" />
      <div>
        <div className="title">{user.name}</div>
        <div className="muted">{user.bio || "No bio"}</div>
      </div>
    </div>
  );
}
