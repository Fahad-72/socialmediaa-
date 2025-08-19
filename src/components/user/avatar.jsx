export default function Avatar({ src }) {
  return (
    <img
      src={src || "https://via.placeholder.com/40"}
      alt="avatar"
      style={{ borderRadius: "50%" }}
    />
  );
}
