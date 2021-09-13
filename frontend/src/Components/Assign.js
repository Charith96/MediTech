import React, {useState, useEffect} from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import swl from 'sweetalert'
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import { Link } from 'react-router-dom';
import logout from "../images/logout.png";
import "./Assign.css";
  

const Assign = () => {
    const [assigns, setAssign] = useState([]);

    useEffect(() => {
        getAssigns();
    }, []);
 
    const getAssigns = async () => {
        const response = await axios.get('http://localhost:5000/assigns');
        setAssign(response.data);
    }

    const search = (inp) => {
		if (!inp.target.value) {
			setAssign(assigns);

            //if search field is empty retrive all assigns
            getAssigns();
		} else {
			// if(inputvalue === status || inputvalue === date)
			let searchList = assigns.filter(
				(data) =>
                    data.status
                        .toLowerCase()
                        .includes(inp.target.value.toLowerCase()) ||
                    data.date
                        .toLowerCase()
                        .includes(inp.target.value.toLowerCase())
					
			);
			setAssign(searchList);
		}
	}; 

    const removeAssign = async (id) => {
        
        const response = await axios.delete(`http://localhost:5000/assigns/delete/${id}`);
        swl({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: ["Cancel","Delete"],
            dangerMode: true,
          })
          .then((willDelete) => {
            if(willDelete) {

        
                if(response.status === 201){
                    // toast.success(" "+ id +" Deleted");
                    swl('Assign successfully Deleted',{
                        icon: "success",
                      });                    
                    getAssigns();
                }
                else{
                    toast.error("You have an error in Deleing");
                }                
            }
          });        
    }

   

    return (
        <div className='MainContainer'>
                <div className='containermini'>
                    <img src={logo} className='logo' />
                    <img src={user} className='user' />
                    <Sidebar />
                    <img src={logout} className='logout' />
                </div>

                
                <div className = "mainminicontainer">
                    <p id="ordertitle">Assign</p> 
                    <ToastContainer/>
                    
                    <div className="container">
                    <div className="row buttons">
                        <div className="col-md-3 col-xs-3">
                            <div className="">
                                <a href="/assign/add" className="btn btn-success">Add new</a>
                            </div>
                        </div>
                        <div className="col-md-5 col-xs-5"/>
                        <div className="col-md-4 col-xs-4">
                            <input className="form-control" type="Search" placeholder="Search an assign" name="searchQuery" onChange={search} />
                        </div>
                    </div>
                    </div>
                                                      
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col md-12 col-xs-12">
                                    <div className="table">
                                        <table class="table table-hover" width="100%"> 
                                            <tbody>
                                                <tr>
                                                    <th>No</th>
                                                    <th>invoice ID</th>
                                                    <th>NIC</th>
                                                    <th>Date</th>
                                                    <th>Porter ID</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                            { assigns.map((assign, index) => (
                                                <tr key={assign.id}>
                                                    <td>{assign.id}</td>
                                                    <td>{assign.invoiceid}</td>
                                                    <td>{assign.nic}</td>
                                                    <td>{assign.date}</td>
                                                    <td>{assign.porterid}</td>
                                                    <td>{assign.status}</td>
                                                    <td>
                                                        <Link to={`/assign/update/${assign.id}`} className="btn btn-primary">Edit</Link>&nbsp;&nbsp;
                                                        <Link onClick={ () => removeAssign(assign.id)} className="btn btn-danger">Delete</Link>
                                                    </td>
                                                </tr>
                                            )) }    
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                   

                   
                </div>    
        </div>
    )
}

export default Assign;
