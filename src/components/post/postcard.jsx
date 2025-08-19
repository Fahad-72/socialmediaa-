export default function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "0.5rem 0", padding: "1rem" }}>
      <h4>{post.author}</h4>
      <p>{post.content}</p>
      <small>{post.createdAt}</small>
    </div>
  );
}
