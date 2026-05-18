
"use client";

import { useState } from "react";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState("");

  function login(e: React.FormEvent) {
    e.preventDefault();

    if (
      username === "squidyxxx" &&
      password === "squidyxxx1234510"
    ) {
      setLogged(true);
      setError("");
    } else {
      setError("Wrong credentials");
    }
  }

  if (logged) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 20,
          background: "#f5f5f5",
        }}
      >
        <h1>Admin Dashboard</h1>
        <p>Connected successfully.</p>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <form
        onSubmit={login}
        style={{
          background: "white",
          padding: 30,
          borderRadius: 16,
          width: 320,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1>Admin Login</h1>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }}
        />

        {error && (
          <p style={{ color: "red", fontSize: 14 }}>{error}</p>
        )}

        <button
          type="submit"
          style={{
            padding: 12,
            borderRadius: 8,
            border: "none",
            background: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </main>
  );
}
