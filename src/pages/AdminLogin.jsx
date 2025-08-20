import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import "./Admin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (signInError) {
      setError(signInError.message);
      return;
    }
    navigate("/admin");
  };

  return (
    <div className="admin-page">
      <div className="admin-content">
        <div className="admin-header">
          <h1 style={{ margin: 0 }}>Admin Login</h1>
          <div className="subtitle">Sign in to manage blog posts</div>
        </div>
        <div className="admin-login-card">
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
            <label>
              <div>Email</div>
              <input
                className="admin-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              <div>Password</div>
              <input
                className="admin-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {error && <div style={{ color: "crimson" }}>{error}</div>}
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
