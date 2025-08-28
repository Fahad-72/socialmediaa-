import React, { createContext, useContext, useEffect, useState } from "react";
import * as notifService from "../service/notificationservice";
const NotificationContext = createContext();
export const useNotification = () => useContext(NotificationContext);

export function NotificationProvider({ children }) {
  const [notifs, setNotifs] = useState(notifService.getAll());

  useEffect(() => {
    const id = setInterval(() => setNotifs(notifService.getAll()), 1500);
    return () => clearInterval(id);
  }, []);

  const push = (n) => {
    notifService.push(n);
    setNotifs(notifService.getAll());
  };

  const clear = () => {
    notifService.clear();
    setNotifs([]);
  };

  return <NotificationContext.Provider value={{ notifs, push, clear }}>{children}</NotificationContext.Provider>;
}
