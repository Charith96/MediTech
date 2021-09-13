import React from 'react'
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import "./History.css";

function History() {

    return (
        <div className='MainContainer'>
                <div className='containermini'>
                    <img src={logo} className='logo' />
                    <img src={user} className='user' />
                    <Sidebar />
                    <img src={logout} className='logout' />
                </div>
                <div className = "mainminicontainer">
                        <p id="historytitle"> History </p> 
                        <a href="Orders" id="previousbtn">&#8249;</a>
                </div>    
        </div>
    )
}

export default History