import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as postService from "../service/postService";
import { useAuth } from "./AuthContext";
import { useNotification } from "./notificationcontext";

const PostContext = createContext();
export const usePosts = () => useContext(PostContext);

export function PostProvider({ children }) {
  const { user } = useAuth();
  const [posts, setPosts] = useState(postService.getAll());
  const { push } = useNotification();

  useEffect(() => {
    const id = setInterval(() => setPosts(postService.getAll()), 1200);
    return () => clearInterval(id);
  }, []);

  const createPost = (content, media) => {
    postService.createPost({ authorId: user.id, content, media });
    setPosts(postService.getAll());
  };

  const toggleLike = (postId) => {
    postService.toggleLike(postId, user.id);
    setPosts(postService.getAll());
    push({ type: "like", toUserId: postService.getAuthorId(postId), meta: { postId } });
  };

  const addComment = (postId, text) => {
    postService.addComment(postId, { authorId: user.id, text });
    setPosts(postService.getAll());
    push({ type: "comment", toUserId: postService.getAuthorId(postId), meta: { postId } });
  };

  const follow = (targetId) => {
    postService.followUser(user.id, targetId);
    setPosts(postService.getAll());
    push({ type: "follow", toUserId: targetId, meta: { followerId: user.id } });
  };

  const value = useMemo(
    () => ({ posts, createPost, toggleLike, addComment, follow }),
    [posts]
  );

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
