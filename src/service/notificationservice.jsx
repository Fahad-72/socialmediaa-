import { v4 as uuid } from "uuid";
const NOTIFS = "sm_notifs";
const read = () => JSON.parse(localStorage.getItem(NOTIFS) || "[]");
const write = v => localStorage.setItem(NOTIFS, JSON.stringify(v));

export function getAll() {
  return read().slice().reverse();
}

export function push(n) {
  const a = read();
  a.push({ id: uuid(), createdAt: Date.now(), ...n });
  write(a);
}

export function clear() {
  write([]);
}
