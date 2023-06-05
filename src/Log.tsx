import React, { useState, useCallback, ChangeEventHandler } from "react";
import "./App.css";
// import { OAuthClient, User } from "@timetreeapp/web-api";

function Log({ logged }) {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  // const [user, setUser] = useState<User | null>();

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();
    // const client = new OAuthClient(token);
    // client.getUser().then((u)=>{
      
    // })
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

export default Log;
