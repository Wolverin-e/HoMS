import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Badge, Nav, Navbar } from 'react-bootstrap'
import { showNotification } from "../actions/notification-actions";
import { connect } from 'react-redux';

class NavBar extends Component {

	componentDidMount(){
		window.sessionStorage.setItem("id", 0);

		this.props.showNotification({
			head: "HOMS",
			body: "Welcome to HOMS!",
			autohide: true
		});
	}

	render(){
		return (
			<Navbar bg="light" variant="light">
				<Navbar.Brand className="pr-3 border-right border-dark">
					<img alt="logo" height="30" width="30" className="d-inline-block align-top mr-2" src='/favicon.png' />{' '}
					HOMS
				</Navbar.Brand>
					<Nav className="mr-auto">
					<Nav.Link as={Link} to="/call">CALL</Nav.Link>
					<Nav.Link as={Link} to="/roomservice">SERVICE</Nav.Link>
				</Nav>

				<Badge pill className="p-2" variant="warning">Manager</Badge>
			</Navbar>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		showNotification: notification => dispatch(showNotification(notification))
	}
}

export default connect(null, mapDispatchToProps)(NavBar);