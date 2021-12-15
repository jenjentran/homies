import React from "react";
import NavBar from "./navBar"
import "../../stylesheets/homepage.css";

function Homepage() {

  return (  
    <div className="mainContainer">
        <NavBar />

        <div className="innerHomepageContainer">
            <img className="homepageBackground" src='/homepage.jpg' alt="" />
            <p className="homepageQuote">Make managing your homes chores easier</p>
        </div>

        <div className="innerContainer2">
            <p className="homepageQ">Don't know how it works? Click the "How Does it Work?" Tab above!</p>
        </div>
        
    </div>
  );
}

export default Homepage;
