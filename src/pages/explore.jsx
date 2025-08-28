import React, { useMemo, useState } from "react";
import { usePosts } from "../context/postcontext";
import PostCard from "../components/post/postcard";
import { searchUsers } from "../service/authService";

export default function Explore() {
  const { posts } = usePosts();
  const [q, setQ] = useState("");
  const users = useMemo(()=> searchUsers(q), [q]);
  const filtered = posts.filter(p => !q || p.content.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="grid2 gap">
      <div className="card">
        <input placeholder="Search users & posts..." value={q} onChange={e=>setQ(e.target.value)} />
        <div className="muted xs">Users</div>
        <ul className="list">
          {users.map(u=> <li key={u.id}>{u.name} — {u.email}</li>)}
        </ul>
      </div>
      <div className="stack gap">
        {filtered.map(p=> <PostCard key={p.id} post={p} />)}
      </div>
    </div>
  );
}
