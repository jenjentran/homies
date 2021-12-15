import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../stylesheets/userRegistrationForm.css"

function UserRegistrationForm() {
    const [registeraddress, setregisteraddress] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

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

    const register = () => {
        Axios({
            method: "POST",
            data: {
                address: registeraddress,
                username: registerUsername,
                password: registerPassword,
                confirmPassword: registerConfirmPassword
            },
            withCredentials: true,
            url: "api/register",
        }).then((res) => {
            console.log(res);
            if(res.status === 200 && res.data === "User Created" && window) {
                console.log("redirecting to login page");
                setregisteraddress("");
                setRegisterUsername("");
                setRegisterPassword("");
                setRegisterConfirmPassword("")
                window.location.href = "/login"; 
            }
        });
    };

    return (
    <div className="mainContainer">
        <a href="/"><img className="logo" src='/logo.png' alt="" /></a>

        <div className="loginContainer">
            <p className="registerHeader">Register</p>
            <input
                className="registerInput"
                placeholder="address"
                onChange={(e) => setregisteraddress(e.target.value)}
            />
            <input
                className="registerInput"
                placeholder="username"
                onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <input
                type="password"
                className="registerInput"
                placeholder="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <input
                type="password"
                className="registerInput"
                placeholder="confirm password"
                onChange={(e) => setRegisterConfirmPassword(e.target.value)}
            />
            <button className="registerButton" onClick={register}>Submit</button>

            <a href="/login" className="registerLoginLink">Login</a>
        </div>
    </div>
    );
}

export default UserRegistrationForm;
