import React, { useState, useEffect } from "react";
import { usePopup } from 'react-hook-popup';
import Axios from "axios";
import NavBar from "./navBar"
import "../../stylesheets/modal.css";
import "../../stylesheets/dashboard.css";

function Dashboard() {
    const [user, setUser] = useState(null);
    const [group, setGroup] = useState(null);
    const [showPopup, hidePopup] = usePopup('popup', ({ message, handleClose }) => {
        var newChore = ""

        return (<div className="modal">
            <div className="modalInner">
                <button 
                    className="modalClose"
                    onClick={handleClose}>
                    X
                </button>

                <div className="modalInner2">
                    <p className="modalHeading">Previous Chore(s)</p>
                    <p className="modalChore">{message.item}</p>

                    <p className="modalHeading">New Chore</p>
                    <input
                        className="newChoreInput"
                        placeholder="New Chore"
                        onChange={(e) => {newChore = e.target.value}}
                    />

                    <button 
                        className="modalSubmit"
                        onClick={() => {
                            updateChore(newChore, message.index, message.group)
                            hidePopup()
                        }}>
                        Update Chore
                    </button>
                </div>
            </div>
        </div>)
    });

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "/api",
        }).then((res) => {
            setUser(res.data);
            
            if(!res.data) {
                window.location.href = "/login"; 
            }
        });

        Axios({
            method: "GET",
            withCredentials: true,
            url: "api/group",
        }).then((res) => {
            setGroup(res.data);
        });
    }, [])

    const updateChore = (newChore, index, group) => {
        group.chores[index] = newChore
        setGroup(group)

        Axios({
            method: "PUT",
            data: {
                chores: group.chores
            },
            withCredentials: true,
            url: "api/updateChore",
        }).then((res) => {
            setGroup(res.data);
        });
    };

    return (
        <div className="mainContainer">
            <NavBar />

            {user ? (

            <div className="contentContainer">
                <p className="homepageHeading">Welcome resident's of {user.address}</p>
                
                {!group ? (
                <div className="groupNotSetupContainer">
                    <p className="groupNotSetup">Household has not been setup</p>
                    <a href="/createGroup" className="groupNotSetupButtonContainer"><button className="groupNotSetupButton">Setup Household</button></a>
                </div>

                ) : (

                <div className="groupContent">
                    <div className="groupContentCol">
                        <p className="groupContentColHeading">Household Members</p>

                        {group.members.map((item, index) => {
                                return (
                                    <div key={index} className="groupContentColMember">
                                        <p className="groupContentColItemText">{item["name"]}</p>
                                    </div>
                                )
                            }
                        )}
                    </div>

                    <div className="groupContentCol">
                        <p className="groupContentColHeading">Chores</p>

                        {group.chores.map((item, index) => {
                                var member = group.head + parseInt(index)

                                if(member >= group.members.length) {
                                    member = 0
                                }

                                return (
                                    <div key={index} className="groupContentColChore">
                                        {item === "Organizer" ? (
                                        <div className="groupContentColChoreInner">
                                            <p className="groupContentColItemText">{item}</p>
                                            <p className="groupContentColItemText assignedChore">{group.members[member]["name"]}</p>
                                        </div>
                                        ) : (
                                        <div className="groupContentColChoreInner">
                                            <p className="groupContentColItemText killCurves">{item}</p>
                                            <p className="groupContentColItemText assignedChore">{group.members[member]["name"]}</p>
                                        </div>)}
                                        
                                        {item !== "Organizer" && <p 
                                            href="#"
                                            className="groupContentColChoreEdit"
                                            onClick={() => {
                                                showPopup({item, index, group})
                                            }}>Edit</p>
                                        }
                                        
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
                )}
                </div>
            
            ) : (
            // should not enter here
            <div>
                <h1>Welcome to household homies, please login</h1>
                <p><a href="/login">login</a></p>
                <p><a href="/register">register</a></p>
            </div>

            )}
        </div>
    );
}

export default Dashboard;
