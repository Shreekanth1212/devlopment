import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      onLogin(user.role, username);
      if (user.role === "patient") navigate("/patient");
      else if (user.role === "doctor") navigate("/doctor");
      else if (user.role === "admin") navigate("/admin");
    } else {
      alert("User not found or invalid credentials. Please register first.");
      navigate("/register"); // Redirect to register page
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
