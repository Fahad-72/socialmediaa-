const MSGS = "sm_msgs";
const read = () => JSON.parse(localStorage.getItem(MSGS) || "[]");
const write = v => localStorage.setItem(MSGS, JSON.stringify(v));

export function getAll() {
  return read();
}

export function sendMessage(from, to, text) {
  const m = read();
  m.push({ id: crypto.randomUUID(), from, to, text, ts: Date.now() });
  write(m);
}
