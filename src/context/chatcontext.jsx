import React, { createContext, useContext, useEffect, useState } from "react";
import * as chatService from "../service/chatService";

const ChatContext = createContext();
export const useChat = () => useContext(ChatContext);

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState(chatService.getAll());

  useEffect(() => {
    const id = setInterval(() => setMessages(chatService.getAll()), 1200);
    return () => clearInterval(id);
  }, []);

  const send = (from, to, text) => {
    chatService.sendMessage(from, to, text);
    setMessages(chatService.getAll());
  };

  return (
    <ChatContext.Provider value={{ messages, send }}>
      {children}
    </ChatContext.Provider>
  );
}
