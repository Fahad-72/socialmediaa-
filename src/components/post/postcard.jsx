import React from "react";
import { useAuth } from "../../context/AuthContext";
import { usePosts } from "../../context/postcontext";
import { getUserById } from "../../service/authService";
import Comments from "./comments";
import { timeAgo } from "../../utils/helpers";

export default function PostCard({ post }) {
  const { user } = useAuth();
  const { toggleLike } = usePosts();
  const author = getUserById(post.authorId);

  return (
    <article className="card post">
      <header className="row between">
        <div className="row">
          <img className="avatar" src={author?.avatar || `https://api.dicebear.com/6.x/identicon/svg?seed=${author?.name}`} alt="" />
          <div>
            <div className="title">{author?.name}</div>
            <div className="muted">{timeAgo(post.createdAt)}</div>
          </div>
        </div>
        <button onClick={()=>toggleLike(post.id)}>{post.likes.includes(user?.id) ? "♥" : "♡"} {post.likes.length}</button>
      </header>

      <div className="post-body">
        <p>{post.content}</p>
        {post.media && <img src={post.media} alt="" className="media" />}
      </div>

      <Comments post={post} />
    </article>
  );
}
