import React, { useState } from "react";
import { usePosts } from "../../context/postcontext";

export default function CreatePost() {
  const { createPost } = usePosts();
  const [text, setText] = useState("");
  const [media, setMedia] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    createPost(text.trim(), media.trim());
    setText(""); setMedia("");
  };

  return (
    <form className="card create-post" onSubmit={submit}>
      <textarea placeholder="What's happening?" value={text} onChange={(e)=>setText(e.target.value)} />
      <input placeholder="image/video url (optional)" value={media} onChange={(e)=>setMedia(e.target.value)} />
      <div className="right"><button type="submit">Post</button></div>
    </form>
  );
}
