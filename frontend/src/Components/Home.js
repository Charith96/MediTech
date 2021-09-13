import React, {useState} from 'react'
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import lady from "../images/lady.png"
import Calendar from 'react-calendar'
import "./calendar.css";



function Home() {
    const [pendingOrders] = useState("8");
    const [returnedOrders] = useState("6");
    return (
        <div className='MainContainer'>
                <div className='containermini'>
                    <img src={logo} className='logo' />
                    <img src={user} className='user' />
                    <Sidebar />
                    <img src={logout} className='logout' />
                </div>
                <div className = "homebox1">
                    <img src={lady} className='homeVector' />
                    <span className="font-link">
                        <h2 className='welcm-name'> Hello Clare!</h2>
                        <p1>May every step you make be filled with happiness.</p1>
                    </span>
                </div>
                <div className = "homebox2">
                   <Calendar> 

                   </Calendar>
                </div>
                <div className = "homebox3">
                    <p2>Pending Orders</p2>  
                    <p5>{pendingOrders}</p5> 
                </div>
                <div className = "homebox4">
                    <p3>Returned Orders</p3>
                    <p4>{returnedOrders}</p4>     
                </div>
        </div>
    )
}

export default Home