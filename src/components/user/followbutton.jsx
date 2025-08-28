import React from "react";
import { useAuth } from "../../context/AuthContext";
import * as authService from "../../service/authService";
import { usePosts } from "../../context/postcontext";

export default function FollowButton({ targetId }) {
  const { user } = useAuth();
  const { follow } = usePosts();
  const target = authService.getUserById(targetId);
  const isFollowing = target?.followers?.includes(user?.id);

  return (
    <button onClick={()=>follow(targetId)}>
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}
