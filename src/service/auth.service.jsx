export async function login({ email, password }) {
  return { id: 1, name: "Demo User", email };
}
export async function register(data) {
  return { id: 2, ...data };
}
export async function logout() {
  return true;
}
