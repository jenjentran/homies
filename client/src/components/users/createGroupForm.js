import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavBar from "../homepage/navBar"
import "../../stylesheets/createGroupForm.css";

function CreateGroupForm() {
    const [houseMateName, sethouseMateName] = useState();
    const [houseMateNumber, sethouseMateNumber] = useState();
    const [membersArray, setMembersArray] = useState([]);
    const [choresArray, setchoresArray] = useState(["Organizer"]);

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "/api",
        }).then((res) => {
            console.log("res.data")
            console.log(res.data)
            if(res.data) {
                Axios({
                    method: "GET",
                    withCredentials: true,
                    url: "/api/group",
                }).then(newRes => {
                    if(newRes.data) {
                        window.location.href = "/"; 
                    }
                })
            } else {
                window.location.href = "/login"; 
            }
        }).catch(err => console.log(err));
    }, [])

    const addHouseMate = () => {
        const updatedMembersArray = [
            ...membersArray,
            {
                "name": houseMateName,
                "number": houseMateNumber
            }
        ];

        setMembersArray(updatedMembersArray);
        if(membersArray.length > 1) {
            setchoresArray([...choresArray, []]);
        }
        console.log(choresArray);
    };

    const updateChore = (e) => {
        const chores = [...choresArray];
        chores[parseInt(e.target.id) + 1] = e.target.value;
        setchoresArray(chores);
        console.log(chores);
    };

    const register = () => {
        Axios({
            method: "POST",
            data: {
                members: membersArray,
                chores: choresArray
            },
            withCredentials: true,
            url: "/api/createGroup",
        }).then((res) => {
            console.log(res);
            if(res.status === 200 && res.data === "OK" && window) {
                console.log("redirecting to home page");
                sethouseMateName("");
                sethouseMateNumber("");
                setMembersArray([]);
                setchoresArray(["Organizer"]);

                window.location.href = "/"; 
            }
        });
    };

    return (
        <div className="mainformContainer">
            <NavBar />

            <div className="mainformsubContainer">
                <p className="mainformContainerHeading">Setup Group</p>

                <div className="mainformContainerAdd">
                    <p className="mainformContainersubheading">Add Housemate</p>
                    
                    <div>
                        <input
                            className="mainformContainerinput"
                            placeholder="housemate name"
                            onChange={(e) => sethouseMateName(e.target.value)} />

                        <input
                            className="mainformContainerinput"
                            placeholder="housemate phone number"
                            onChange={(e) => sethouseMateNumber(e.target.value)} />
                    </div>
                    
                    <button className="mainformContainerbutton" onClick={addHouseMate}>Add Housemate</button>
                </div>

                <div className="mainformContainerAdd">
                    <p className="mainformContainersubheading2">Current Added Housemate's</p>
                    
                    {membersArray.map((item, index) => 
                        {
                            return (
                                <div 
                                    key={index}
                                    className="mainformContainerMemCon">
                                    {Object.entries(item)
                                    .map( ([key, value]) => 
                                        {
                                            return (<p 
                                                        key={key}
                                                        className="mainformContainerMemConElem">
                                                            {value}
                                                    </p>)
                                        }
                                    )}
                                </div>
                            )
                        }
                    )}
                </div>   

                <div className="mainformContainerAdd">
                    <p className="mainformContainersubheading">Chores</p>

                    <div className="mainformContainerChore"> 
                        {(membersArray.length > 0) && <p className="mainformContainerOrg">Organizer</p> }

                        {
                        Array.from({ 
                                length: membersArray.length - 1
                            }, 
                            (_, i) => 
                                <input 
                                    className="mainformContainerinput2"
                                    key={i}
                                    id={i}
                                    onChange={updateChore} />)
                        }
                    </div>
                </div> 

                <button className="mainformContainerSubmit" onClick={register}>Create Group</button>      
            </div>
        </div>
    );
}

export default CreateGroupForm;
