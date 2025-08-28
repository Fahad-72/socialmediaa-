import React from "react";
import { useNotification } from "../context/notificationcontext";
import NotificationCard from "../components/notification/notificationcard";

export default function Notifications() {
  const { notifs, clear } = useNotification();
  return (
    <div className="stack gap">
      <div className="row between">
        <h3>Notifications</h3>
        <button onClick={clear}>Clear</button>
      </div>
      {notifs.length === 0 && <div className="card">No notifications</div>}
      {notifs.map(n => <NotificationCard key={n.id} n={n} />)}
    </div>
  );
}
