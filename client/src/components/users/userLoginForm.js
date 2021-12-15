import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../stylesheets/userLoginForm.css";

function UserLoginForm() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
      Axios({
          method: "GET",
          withCredentials: true,
          url: "/api",
      }).then((res) => {
          if(res.data) {
              window.location.href = "/"; 
          }
      });
    }, [])

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/api/login",
    }).then((res) => {
        console.log(res);
        if(res.status === 200 && res.data !== "No User Exists" && window) {
            console.log("redirecting to home page");
            setLoginUsername("");
            setLoginPassword("");
            window.location.href = "/dashboard"; 
        }
    });
  };

  return (
    <div className="mainContainer">
      <a href="/"><img className="logo" src='/logo.png' alt="" /></a>

      <div className="loginContainer">
        <p className="loginHeader">Sign In</p>
        <input
            className="loginInput"
            placeholder="Username"
            onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
            className="loginInput"
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button className="loginButton" onClick={login}>Sign In</button>

        <a href="/register" className="loginRegisterLink">Create an Account</a>
      </div>
    </div>
  );
}

export default UserLoginForm;
