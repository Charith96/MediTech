import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
	return (
		<div className='Sidebar'>
			<ul className='SidebarList'>
				<NavLink
					style={{ textDecoration: "none" }}
					to='./'
					activeClassName='active-nav'
					className='row'>
					Home
				</NavLink>
			
				<NavLink
					style={{ textDecoration: "none" }}
					to='/Orders'
					activeClassName='active-nav'
					className='row'>
					Orders
				</NavLink>

                <NavLink
					style={{ textDecoration: "none" }}
					to='/porters'
					activeClassName='active-nav'
					className='row'>
					Porters
				</NavLink>

				<NavLink
					style={{ textDecoration: "none" }}
					to='/assign'
					activeClassName='active-nav'
					className='row'>
					Assign
				</NavLink>

                <NavLink
					style={{ textDecoration: "none" }}
					to='/customer'
					activeClassName='active-nav'
					className='row'>
					Customer
				</NavLink>

                <NavLink
					style={{ textDecoration: "none" }}
					to='/leaves'
					activeClassName='active-nav'
					className='row'>
					Leaves
				</NavLink>

                <NavLink
					style={{ textDecoration: "none" }}
					to='/salary'
					activeClassName='active-nav'
					className='row'>
					Salary
				</NavLink>
			</ul>
		</div>
	);
}

export default Sidebar;