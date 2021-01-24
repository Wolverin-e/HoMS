import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import { } from '../actions/roomservice-actions';
import { showNotification } from '../actions/notification-actions';


class RoomService extends Component {

	state = {
	}

	render() {
		return (
			<div className="wrapper d-flex flex-column justify-content-center align-items-center">

				<Row className="mt-5">
				</Row>

			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		showNotification: not => dispatch(showNotification(not))
	}
}

export default connect(null, mapDispatchToProps)(RoomService);