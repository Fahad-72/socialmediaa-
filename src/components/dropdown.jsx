import { useState } from "react";

export default function Dropdown({ icon, title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <span onClick={() => setOpen(!open)}>{icon}</span>
      {open && (
        <div className="dropdown-menu">
          <h4>{title}</h4>
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
