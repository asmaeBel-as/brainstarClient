import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./BlogLogin.css";

const BlogLogin = () => {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

  const handleUser = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  async function login(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
          setRedirect(true);
      } 
    } catch (error) {
      console.error(error);
      alert("login failed");
    }
  }
    if (redirect) {
        return <Navigate to={'/BlogHome'} />
 }
  return (
    <section className="loginSection">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={login}>
          <div className="user-box">
            <input type="text" name="" value={username} onChange={handleUser} />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              value={password}
              onChange={handlePassword}
            />
            <label>Password</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default BlogLogin;
