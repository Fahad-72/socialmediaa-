import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { PostProvider } from "./context/postcontext";
import { ChatProvider } from "./context/chatcontext";
import { ThemeProvider } from "./context/ThemeContext";
import { NotificationProvider } from "./context/notificationcontext";
import "./styles/variable.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <NotificationProvider>
            <PostProvider>
              <ChatProvider>
                <App />
              </ChatProvider>
            </PostProvider>
          </NotificationProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
