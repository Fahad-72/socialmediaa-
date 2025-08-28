import React from "react";
import { timeAgo } from "../../utils/helpers";

export default function NotificationCard({ n }) {
  return (
    <div className="card row between">
      <div>
        <b>{n.type}</b> • {n.meta?.postId ? `post ${n.meta.postId.slice(0,6)}` : ""}
      </div>
      <div className="muted xs">{timeAgo(n.createdAt)}</div>
    </div>
  );
}
