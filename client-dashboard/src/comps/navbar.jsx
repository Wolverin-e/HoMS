import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Badge, Nav, Navbar } from 'react-bootstrap'

class NavBar extends Component {

	render(){
		return (
			<Navbar bg="light" variant="light">
				<Navbar.Brand className="pr-3 border-right border-dark">
					<img height="30" width="30" className="d-inline-block align-top mr-2" src='/favicon.png' />{' '}
					HOMS
				</Navbar.Brand>
					<Nav className="mr-auto">
					<Nav.Link as={Link} to="/call">CALL</Nav.Link>
					<Nav.Link as={Link} to="/roomservice">SERVICE</Nav.Link>
				</Nav>

				<Badge pill className="p-2" variant="warning">RoomX</Badge>
			</Navbar>
		)
	}
}

export default NavBar;