import { useState } from "react";
import { createPost } from "../../service/post.service";

export default function Composer({ onPosted }) {
  const [text, setText] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const post = await createPost({ content: text });
    onPosted(post);
    setText("");
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: "1rem" }}>
      <input
        placeholder="What's happening?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}
