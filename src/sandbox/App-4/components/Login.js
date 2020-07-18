import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUser(username);
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
