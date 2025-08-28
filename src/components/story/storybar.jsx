import React from "react";
import StoryCard from "./storycard";

export default function StoryBar({ stories = [] }) {
  return (
    <div className="card story-bar">
      <div className="row">
        {stories.map(s => <StoryCard key={s.id} story={s} />)}
      </div>
    </div>
  );
}
