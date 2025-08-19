export default function Modal({ children, onClose }) {
  return (
    <div style={{ background: "rgba(0,0,0,0.5)", padding: "2rem" }}>
      <div style={{ background: "white", padding: "1rem" }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
