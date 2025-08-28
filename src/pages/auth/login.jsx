import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      nav("/");
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <form className="auth-form card" onSubmit={submit}>
      <h2>Login</h2>
      {err && <div className="error">{err}</div>}
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <div className="muted">No account? <Link to="/auth/register">Register</Link></div>
      <div className="muted"><Link to="/auth/forgot">Forgot password?</Link></div>
    </form>
  );
}
