import React from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../service/authService";
import UserCard from "../components/user/usercard";
import { usePosts } from "../context/postcontext";
import PostCard from "../components/post/postcard";
import FollowButton from "../components/user/followbutton";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { id } = useParams();
  const profile = getUserById(id);
  const { posts } = usePosts();
  const { user } = useAuth();
  const mine = user?.id === id;
  const authored = posts.filter(p => p.authorId === id);

  if (!profile) return <div className="card">User not found</div>;

  return (
    <div className="stack gap">
      <UserCard user={profile} />
      {!mine && <FollowButton targetId={id} />}
      <div className="muted">Posts</div>
      {authored.map(p => <PostCard key={p.id} post={p} />)}
    </div>
  );
}
