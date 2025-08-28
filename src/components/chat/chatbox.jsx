import React, { useEffect, useRef, useState } from "react";
import { useChat } from "../../context/chatcontext";
import MessageBubble from "./MessageBubble";
import { useAuth } from "../../context/AuthContext";

export default function ChatBox({ peer }) {
  const { messages, send } = useChat();
  const { user } = useAuth();
  const [text, setText] = useState("");
  const endRef = useRef(null);

  const thread = messages.filter(m => (m.from===user.id && m.to===peer?.id) || (m.to===user.id && m.from===peer?.id));

  useEffect(()=> endRef.current?.scrollIntoView({behavior:"smooth"}), [thread]);

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim() || !peer) return;
    send(user.id, peer.id, text.trim());
    setText("");
  };

  if (!peer) return <div className="card">Select someone to chat with</div>;

  return (
    <div className="card chatbox">
      <div className="title">Chat with {peer.name}</div>
      <div className="chat-scroll">
        {thread.map(m=> <MessageBubble key={m.id} me={m.from===user.id} text={m.text} ts={m.ts} />)}
        <div ref={endRef} />
      </div>
      <form onSubmit={submit} className="row gap">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
