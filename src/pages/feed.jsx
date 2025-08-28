import React from "react";
import CreatePost from "../components/post/createpost";
import PostCard from "../components/post/postcard";
import { usePosts } from "../context/postcontext";

export default function Feed() {
  const { posts } = usePosts();
  return (
    <div className="stack gap">
      <CreatePost />
      {posts.map(p => <PostCard key={p.id} post={p} />)}
    </div>
  );
}
