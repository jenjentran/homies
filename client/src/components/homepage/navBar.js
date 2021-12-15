import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../stylesheets/navBar.css";

function NavBar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/",
        }).then((res) => {
            setUser(res.data);
        });
    }, [])
        
    const logout = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/logout",
        }).then((res) => {
            console.log(res);
            if(res.status === 200 && window) {
                window.location.href = "/"; 
            }
        });
    };

    return (
        <div className="navBarContainer">
            <div className="navBarLeft">
                <img className="navBarLogo" src='/logoInverse.png' alt="" />

                <a className="leftLinks" href="/">Home</a>
                <a className="leftLinks" href="/instructions">How Does it Work?</a>
                <a className="leftLinks" href="/dashboard">Dashboard</a>
                <a className="leftLinks" href="/contact">Contact Us</a>
            </div>
            
            <div className="navBarRight">
                {user ? (
                <p className="rightLinks" onClick={logout}>Logout</p>
                ) : (
                    <div className="navBarRight">
                        <a className="rightLinks" href="/login">Login</a>
                        <a className="rightLinks" href="/register">Register</a>
                    </div>
                )}
                
            </div>
        </div>
    );
}

export default NavBar;
