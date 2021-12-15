import React from "react";
import NavBar from "./navBar"
import "../../stylesheets/contact.css";

function Contact() {

  return (  
    <div className="mainContainer">
        <NavBar />
        
        <div className="innerContainer">
            <p className="contactText">Have questions? Concerns? Features you wished were available?</p>
            <p className="contactText">Reach out to us at: <span className="black">householdhomies@umich.edu</span></p>
        </div>
    </div>
  );
}

export default Contact;
