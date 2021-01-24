import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ServiceRequestTable from './service-request-table';

import { connect } from 'react-redux';
import mapStateToProps from '../utils/mapStateToProps';
import { fetchServiceRequests } from '../actions/roomservice-actions';
import { showNotification } from '../actions/notification-actions';


class RoomService extends Component {

	state = {
	}

	componentDidMount(){
		this.props.fetchServiceRequests();
	}

	render() {
		return (
			<Container className="pt-4">
				<Row>
					<Col>
						<ServiceRequestTable lable="PENDING" reqs={this.props.serviceRequests}/>
					</Col>
					<Col>
						<ServiceRequestTable lable="ASSIGNED" reqs={this.props.serviceRequests}/>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchServiceRequests: () => dispatch(fetchServiceRequests()),
		showNotification: not => dispatch(showNotification(not))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomService);