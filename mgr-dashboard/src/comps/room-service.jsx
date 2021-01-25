import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ServiceRequestTable from './service-request-table';

import { connect } from 'react-redux';
import mapStateToProps from '../utils/mapStateToProps';
import { fetchServiceRequests, assignServiceRequest } from '../actions/roomservice-actions';
import { showNotification } from '../actions/notification-actions';


class RoomService extends Component {

	state = {
	}

	componentDidMount(){
		this.props.fetchServiceRequests();
	}

	render() {
		const pending = this.props.serviceRequests.filter(x => !x.status);
		const assigned = this.props.serviceRequests.filter(x => x.status);
		return (
			<Container className="pt-4">
				<Row>
					<Col>
						<ServiceRequestTable lable="PENDING" reqs={pending} button={{
							head: "Assign",
							text: "move",
							onClick: this.props.assignServiceRequest
						}}/>
					</Col>
					<Col>
						<ServiceRequestTable lable="ASSIGNED" reqs={assigned}/>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchServiceRequests: () => dispatch(fetchServiceRequests()),
		assignServiceRequest: id => dispatch(assignServiceRequest(id)),
		showNotification: not => dispatch(showNotification(not))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomService);