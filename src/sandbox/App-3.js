import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const base_url = "https://api.github.com/users";

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("stevengabule");
  const clearSearchInput = useRef();

  async function getUser() {
    const response = await fetch(`${base_url}/${username}`);
    const data = await response.json();
    setUser(data);
  }

  useEffect(() => {
    getUser();
  }, []);

  function handleClearInput() {
    clearSearchInput.current.value = "";
    clearSearchInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Input username"
        ref={clearSearchInput}
      />
      <button onClick={getUser}>Search</button>
      <button onClick={handleClearInput}>Clear</button>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <img src={user.avatar_url} alt={user.name} style={{ height: 50 }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
