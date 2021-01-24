import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import { createRoomServiceRequest } from '../actions/roomservice-actions';
import { showNotification } from '../actions/notification-actions';


class RoomService extends Component {

	state = {
		type: "",
		additional_notes: ""
	}

	onChangeField = ({ target }) => {
		let change = {}
		change[target.id] = target.value;
		this.setState(change);
	}

	onRequest = () => {
		if(this.state.type === "Choose.." || !this.state.type){
			this.props.showNotification({
				head: "Service",
				body: "Please Choose a service to create!",
				autohide: true,
				delay: 1000
			})
		} else {
			const id = window.sessionStorage.getItem("id")
			this.props.createRoomServiceRequest({
				type: this.state.type,
				room_no: id,
				additional_notes: this.state.additional_notes
			});
		}
	}

	render() {
		return (
			<div className="wrapper d-flex flex-column justify-content-center align-items-center">

				<Row className="mt-5">
					<InputGroup as={Col}>
						<FormControl id="type" as="select" onChange={this.onChangeField}>
							<option>Choose..</option>
							<option>Food Service</option>
							<option>Cleaning Service</option>
							<option>Appliances Service</option>
							<option>Transportation Service</option>
							<option>Emergency Service</option>
							<option>General Query Service</option>
							<option>Tour Guide Service</option>
						</FormControl>
						<FormControl id="additional_notes" placeholder="Notes" onChange={this.onChangeField}/>
						<InputGroup.Append>
							<Button variant="warning" onClick={this.onRequest}>Request</Button>
						</InputGroup.Append>
					</InputGroup>
				</Row>

			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createRoomServiceRequest: req => dispatch(createRoomServiceRequest(req)),
		showNotification: not => dispatch(showNotification(not))
	}
}

export default connect(null, mapDispatchToProps)(RoomService);