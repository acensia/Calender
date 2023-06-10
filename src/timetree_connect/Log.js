import React, { useState, useCallback, ChangeEventHandler } from "react";
import "../App.css";
import { OAuthClient } from "@timetreeapp/web-api";

function Log({ logged }) {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();
    const client = new OAuthClient(token);

    const url = "https://timetreeapis.com/user";
    const res = fetch(url, {
      method: "GET",
    });

    // console.log(username, password);
    logged(true);
  }, []);

  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        {/* <input
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
        /> */}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

// export default Log;
