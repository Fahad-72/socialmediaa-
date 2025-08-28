import { v4 as uuid } from "uuid";
const USERS = "sm_users";
const SESSION = "sm_session";

const read = (k) => JSON.parse(localStorage.getItem(k) || "[]");
const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));

export function getCurrentUser() {
  const id = localStorage.getItem(SESSION);
  if (!id) return null;
  return read(USERS).find((u) => u.id === id) || null;
}

export async function register({ name, email, password }) {
  const users = read(USERS);
  if (users.some((u) => u.email === email)) throw new Error("Email in use");
  const user = { id: uuid(), name, email, password, bio: "", avatar: "", followers: [], following: [] };
  users.push(user);
  write(USERS, users);
  localStorage.setItem(SESSION, user.id);
  return user;
}

export async function login(email, password) {
  const users = read(USERS);
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid credentials");
  localStorage.setItem(SESSION, user.id);
  return user;
}

export function logout() {
  localStorage.removeItem(SESSION);
}

export function updateProfile(patch) {
  const users = read(USERS);
  const id = localStorage.getItem(SESSION);
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...patch };
  write(USERS, users);
  return users[idx];
}

export function getUserById(id) {
  return read(USERS).find((u) => u.id === id) || null;
}

export function searchUsers(q) {
  const s = (q || "").trim().toLowerCase();
  return read(USERS).filter((u) => !s || u.name.toLowerCase().includes(s) || u.email.toLowerCase().includes(s));
}
