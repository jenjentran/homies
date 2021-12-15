import React from "react";
import NavBar from "./navBar"
import "../../stylesheets/instructions.css"

function Instructions() {

  return (  
    <div className="mainContainer">
        <NavBar />

        <div className="instrucSubSection">
          <p className="instrucHeading">New User?</p>

          <div className="innerSubSection">
            <p className="innerSubSectionText">Click the "Register" button on the top right of the screen, as shown on the right.</p>
            <img className="instruc1" src='/instruc1.png' alt="" />
          </div>

          <div className="innerSubSection">
            <p className="innerSubSectionText">On the registration screen, fill in all the fields, then click "Register" to create your account.</p>
            <img className="instruc2" src='/instruc2.png' alt="" />
          </div>
        </div>

        <div className="instrucSubSection">
          <p className="instrucHeading">First Time Initializing?</p>

          <div className="innerSubSection">
            <p className="innerSubSectionText">Click the "Setup Household" button that appears on the dashboard screen (only needs to be done once per account), as shown on the right. </p>
            <img className="instruc3" src='/instruc3.png' alt="" />
          </div>

          <div className="innerSubSection">
            <p className="innerSubSectionText">Input the names and numbers of the househhold's members who will be completing chores (numbers must start with "+1") and then click the "Add Housemate" button. Add at least 2 members!</p>
            <img className="instruc4" src='/instruc4.png' alt="" />
          </div>

          <div className="innerSubSection">
            <p className="innerSubSectionText">Split all your house chores into chunks based on your liking and input them into the available chore fields. For each member added after one, a new chore field will appear.</p>
            <img className="instruc5" src='/instruc5.png' alt="" />
          </div>
        </div>
        
        <div className="instrucSubSection">
          <p className="instrucHeading">Finished Your One-Time Initialization?</p>

          <div className="innerSubSection1">
            <p className="innerSubSectionText1">Your all good to go! All reminders and communication will now be sent over text!</p>
          </div>
        </div>

        <div className="instrucSubSection">
          <p className="instrucHeading">New to Make Edits?</p>

          <div className="innerSubSection">
            <p className="innerSubSectionText">Currently, we only have availablity to edit the chore boxes that were created during the initialization step. To make a change, login, go to your dashboard, and click the edit button under individual chore boxes to make edits!</p>
            <img className="instruc6" src='/instruc6.png' alt="" />
          </div>
        </div>
    </div>
  );
}

export default Instructions;
