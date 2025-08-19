export async function listPosts() {
  return [
    { id: 1, author: "Alice", content: "Hello world!", createdAt: "1h ago" },
    { id: 2, author: "Bob", content: "React is awesome!", createdAt: "2h ago" },
  ];
}

export async function createPost(payload) {
  return { id: Date.now(), author: "You", ...payload, createdAt: "just now" };
}
