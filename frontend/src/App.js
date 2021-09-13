import "./App.css";
import "./Components/Orders.css"
import Sidebar from "./Components/Sidebar";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from "./Components/Orders";
import History from "./Components/History";
import Assign from "./Components/Assign";
import AssigNew from "./Components/AssignNew";
import EditAssign from "./Components/EditAssign";

function App() {
	return (
		<Router>
			<ToastContainer/>
			<div className='App'>
				<Switch>
					<Route exact path='/' exact component={home} />
				    <Route path='/home'exact component={home} />
					<Route path='/Orders' exact component={Orders} />
					<Route path='/history' exact component={History} />
					<Route path='/assign'exact component={Assign}/>
					<Route path='/assign/add' exact component={AssigNew}/>
					<Route path='/assign/update/:id' exact component={EditAssign}/>
					
				
				</Switch>
			</div>
			
		</Router>
	);
}

export default App;

