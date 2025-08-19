export default function MediaGrid({ media }) {
  if (!media?.length) return null;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}>
      {media.map((m, i) => (
        <img key={i} src={m.url} alt="" style={{ width: "100%" }} />
      ))}
    </div>
  );
}
