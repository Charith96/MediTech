import React, { useState } from 'react'
import { useHistory } from 'react-router';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import "./Assign.css";


const AssignNew = () => {
    
    const [invoiceid, setInvoiceId] = useState();
    const [nic, setNic] = useState('');
    const [date, setDate] = useState('');
    const [porterid, setPorter] = useState('');
    const history = useHistory();

    const saveAssign = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/assigns/add', {
                 invoiceid: invoiceid,
                 nic: nic,
                 date: date,
                 porterid: porterid,                 
            });



            if(response.status === 201){              
                // alert('New Assign Added');
                toast.success("New Assign Added");
                setInvoiceId('');
                setNic('');
                setDate('');
                setPorter('');

                // setTimeout may cause an error
                setTimeout(() => {
                    history.push('/assign')
                }, 3000);
                setTimeout();


            }else{
                toast.error("You have an Error in Inserting");
            };                        
            
        } catch (error) {
            console.log(error.message);
            
        }

    }

    

    return (
        <div className='MainContainer'>
            <div className='containermini'>
                <img src={logo} className='logo' />
                <img src={user} className='user' />
                <Sidebar />
                <img src={logout} className='logout' />
            </div>


            <div className="mainminicontainer">
                <p id="assigntitle">Assign new</p>
                <ToastContainer/>


                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="container-fluid">
                        <div className="row form">
                            <div className="col-md-3 col-xs-3" />
                            <div className="col-md-6 col-xs-6">
                                <form onSubmit={saveAssign}>
                                    <div className="row">
                                        <div class="input-group" style={{ marginTop: '15px' }}>
                                            <span class="input-group-text">Invoice ID :</span>
                                            <input type="text" class="form-control" name="invoice" placeholder="enter invoice id" value={ invoiceid } onChange={ (e) => setInvoiceId(e.target.value)} required/>
                                        </div>
                                        <div class="input-group" style={{ marginTop: '15px' }}>
                                            <span class="input-group-text">NIC :</span>
                                            <input type="text" class="form-control" name="nic" placeholder="enter nic number" value={ nic } onChange={ (e) => setNic(e.target.value)} required/>
                                        </div>
                                        <div class="input-group" style={{ marginTop: '15px' }}>
                                            <span class="input-group-text">Date :</span>
                                            <input type="date" class="form-control" name="adate" value={ date } onChange={ (e) => setDate(e.target.value)} required/>
                                        </div>
                                        <div class="input-group" style={{ marginTop: '15px' }}>
                                            <span class="input-group-text">Porter ID :</span>
                                            <input type="text" class="form-control" name="porter" placeholder="enter porter id" value={ porterid } onChange={ (e) => setPorter(e.target.value)} required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-xs-4" />
                                        <div className="col-md-4 col-xs-4 save d-flex justify-content-center">
                                            <button type="submit" className="btn btn-success">Save</button>
                                        </div>
                                        <div className="col-md-4 col-xs-4" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-3 col-xs-3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssignNew;
