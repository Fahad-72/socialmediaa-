import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      nav("/");
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <form className="auth-form card" onSubmit={submit}>
      <h2>Create account</h2>
      {err && <div className="error">{err}</div>}
      <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
      <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
      <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form, password: e.target.value})} />
      <button type="submit">Register</button>
    </form>
  );
}
