import React from "react";

export default function MessageBubble({ me, text, ts }) {
  return (
    <div className={`bubble-row ${me ? "me" : ""}`}>
      <div className="bubble-msg">{text}</div>
      <div className="muted xs">{new Date(ts).toLocaleTimeString()}</div>
    </div>
  );
}
