import { v4 as uuid } from "uuid";
const POSTS = "sm_posts";
const USERS = "sm_users";

const read = (k) => JSON.parse(localStorage.getItem(k) || "[]");
const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));

// seed if none
(function seed() {
  if (!localStorage.getItem(POSTS)) {
    const users = read(USERS);
    const author = users[0] || { id: "demo", name: "Demo" };
    const demo = [
      { id: uuid(), authorId: author.id, content: "Welcome to your social app!", media: "", likes: [], comments: [], createdAt: Date.now() }
    ];
    write(POSTS, demo);
  }
})();

export function getAll() {
  return read(POSTS).sort((a,b)=>b.createdAt-a.createdAt);
}

export function createPost({ authorId, content, media }) {
  const posts = read(POSTS);
  posts.push({ id: uuid(), authorId, content, media: media || "", likes: [], comments: [], createdAt: Date.now() });
  write(POSTS, posts);
}

export function toggleLike(postId, userId) {
  const posts = read(POSTS);
  const p = posts.find(x => x.id === postId);
  if (!p) return;
  const i = p.likes.indexOf(userId);
  if (i === -1) p.likes.push(userId); else p.likes.splice(i,1);
  write(POSTS, posts);
}

export function addComment(postId, comment) {
  const posts = read(POSTS);
  const p = posts.find(x => x.id === postId);
  if (!p) return;
  p.comments.push({ id: uuid(), ...comment, createdAt: Date.now() });
  write(POSTS, posts);
}

export function followUser(followerId, targetId) {
  const users = read(USERS);
  const a = users.find(u=>u.id===followerId);
  const b = users.find(u=>u.id===targetId);
  if (!a||!b||a.id===b.id) return;
  if (!a.following.includes(b.id)) a.following.push(b.id);
  if (!b.followers.includes(a.id)) b.followers.push(a.id);
  write(USERS, users);
}

export function getAuthorId(postId) {
  const p = read(POSTS).find(x=>x.id===postId);
  return p?.authorId || null;
}
