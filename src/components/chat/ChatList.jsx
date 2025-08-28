import React, { useMemo, useState } from "react";
import { searchUsers } from "../../service/authService";
import { useAuth } from "../../context/AuthContext";

export default function ChatList({ onSelect }) {
  const { user } = useAuth();
  const [q, setQ] = useState("");
  const users = useMemo(()=> searchUsers(q).filter(u=>u.id!==user.id), [q]);

  return (
    <aside className="card chat-list">
      <input placeholder="Search people..." value={q} onChange={e=>setQ(e.target.value)} />
      <div className="list">
        {users.map(u=> (
          <div key={u.id} className="row" onClick={()=>onSelect(u)}>
            <img className="avatar xs" src={u.avatar || `https://api.dicebear.com/6.x/identicon/svg?seed=${u?.name}`} alt="" />
            <div className="grow">
              <div className="title">{u.name}</div>
              <div className="muted xs">{u.email}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
