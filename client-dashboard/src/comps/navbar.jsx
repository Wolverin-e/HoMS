import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'

class NavBar extends Component {

	render(){
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand>HoMS</Navbar.Brand>
					<Nav className="mr-auto">
					<Nav.Link as={Link} to="/call">Call</Nav.Link>
					<Nav.Link as={Link} to="/roomservice">RoomService</Nav.Link>
				</Nav>

				<b>Alpha</b>
			</Navbar>
		)
	}
}

export default NavBar;