import React from "react";

export default function StoryCard({ story }) {
  return (
    <div className="story-card">
      <img className="avatar xs" src={story.avatar} alt="" />
      <div className="muted xs">{story.title}</div>
    </div>
  );
}
