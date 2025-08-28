import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  if (sent) return <div className="card">If that email exists we sent instructions.</div>;
  return (
    <form className="card" onSubmit={submit}>
      <h3>Reset password</h3>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Send reset</button>
    </form>
  );
}
