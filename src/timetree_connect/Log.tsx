import React, {
  useState,
  useCallback,
  ChangeEventHandler,
  useRef,
} from "react";
import "../App.css";
// import { OAuthClient } from "@timetreeapp/web-api";

function Log({ logged }) {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  const input_ref = useRef<HTMLInputElement>();

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();
    const url = "https://timetreeapis.com/user";
    const res = fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/vnd.timetree.v1+json",
        Authorization: `Bearer ${input_ref.current.value}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          alert("Check your token");
        } else {
          logged(true);
          return res.json();
        }
      })
      .then((d) => {
        console.log(d);
      });
  }, []);

  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Token"
          // value={token}
          // onChange={(e) => setToken(e.target.value)}
          ref={input_ref}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Log;
