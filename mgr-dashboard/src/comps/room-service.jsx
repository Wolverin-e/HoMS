import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ServiceRequestTable from './service-request-table';

import { connect } from 'react-redux';
import mapStateToProps from '../utils/mapStateToProps';
import { fetchServiceRequests, assignServiceRequest } from '../actions/roomservice-actions';
import { showNotification } from '../actions/notification-actions';


class RoomService extends Component {

	state = {
		prevIntervalService: null
	}

	componentDidMount(){
		this.setState({
			prevIntervalService: setInterval(this.props.fetchServiceRequests, 1000)
		})
	}

	componentWillUnmount(){
		if(this.state.prevIntervalService){
			clearInterval(this.state.prevIntervalService);
		}
	}

	render() {
		return (
			<Container className="pt-4">
				<Row>
					<Col>
						<ServiceRequestTable lable="PENDING" reqs={this.props.pendingServiceRequests} button={{
							head: "Assign",
							text: "move",
							onClick: this.props.assignServiceRequest
						}}/>
					</Col>
					<Col>
						<ServiceRequestTable lable="ASSIGNED" reqs={this.props.assignedServiceRequests}/>
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