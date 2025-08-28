import React, { useState } from "react";
import ChatList from "../components/chat/ChatList";
import ChatBox from "../components/chat/chatbox";

export default function Messages() {
  const [peer, setPeer] = useState(null);
  return (
    <div className="grid2 gap">
      <ChatList onSelect={setPeer} />
      <ChatBox peer={peer} />
    </div>
  );
}
