import React, {useState} from 'react'
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import "./Orders.css";
import { Link } from 'react-router-dom';


function Orders() {
    const [history] = useState("8");
    const [pending] = useState("8");
    const [assigned] = useState("6");
    const [delivered] = useState("8");
    const [returned] = useState("8");

    return (
        <div className='MainContainer'>
                <div className='containermini'>
                    <img src={logo} className='logo' />
                    <img src={user} className='user' />
                    <Sidebar />
                    <img src={logout} className='logout' />
                </div>
                <div className = "mainminicontainer">
                    <p id="ordertitle">Orders</p> 
                    
                    <div className = "history">
                        <p6>History</p6>  
                        <p7>{history}</p7> 
                        <a href="History" id="nextbtn">&#8250;</a>
                    </div>
                
                    <div className = "pending">
                        <p8>Pending</p8>  
                        <p9>{pending}</p9> 
                    </div>

                    <div className = "assigned">
                        <p10>assigned</p10>  
                        <p11>{assigned}</p11> 
                    </div>

                    <div className = "delivered">
                        <p12>delivered</p12>
                        <p13>{delivered}</p13>     
                    </div>

                    <div className = "returned">
                        <p14>returned</p14>
                        <p15>{returned}</p15>     
                    </div>
                </div>    
        </div>
    )
}

export default Orders
