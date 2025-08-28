import React, { useState } from "react";
import { usePosts } from "../../context/postcontext";
import { getUserById } from "../../service/authService";
import { timeAgo } from "../../utils/helpers";

export default function Comments({ post }) {
  const { addComment } = usePosts();
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addComment(post.id, text.trim());
    setText("");
  };

  return (
    <div className="comments">
      {post.comments.map(c => {
        const u = getUserById(c.authorId);
        return (
          <div key={c.id} className="comment">
            <img className="avatar xs" src={u?.avatar || `https://api.dicebear.com/6.x/identicon/svg?seed=${u?.name}`} alt="" />
            <div className="bubble">
              <div className="author">{u?.name} • <span className="muted xs">{timeAgo(c.createdAt)}</span></div>
              <div>{c.text}</div>
            </div>
          </div>
        );
      })}
      <form className="comment-form" onSubmit={submit}>
        <input placeholder="Write a comment..." value={text} onChange={(e)=>setText(e.target.value)} />
        <button type="submit">Reply</button>
      </form>
    </div>
  );
}
