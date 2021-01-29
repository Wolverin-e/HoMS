import React, { Component } from 'react';
import RoomsTable from './rooms-table';
import { Col, Container, Row, FormControl, InputGroup, Button} from 'react-bootstrap';

import { connect } from 'react-redux';
import { fetchRooms } from '../actions/rooms-actions';
import { fetchCustomers } from '../actions/customers-actions';
import mapStateToProps from '../utils/mapStateToProps';


class Rooms extends Component {

	state={
		room_no: null,
		customer_id: null
	}

	componentDidMount(){
		this.props.fetchRooms();
		this.props.fetchCustomers();
	}

	onSelectChange = ({target}) => {
		let x = {};
		x[target.id] = target.value;
		this.setState(x);
	}

	onClickAllot = () => {

	}

	render() {
		const under_maintainance = this.props.rooms.filter(x => !x.status);
		const available_rooms = this.props.rooms.filter(x => x.status && (x.customer_id === null));
		const filled_rooms = this.props.rooms.filter(x => x.customer_id !== null);
		return (
			<Container className="pt-4">
				{/* <Row className="justify-content-center pb-4">
					<InputGroup as={Col}>
						<FormControl id="room_no" as="select" onChange={this.onSelectChange}>
							<option> Select Room </option>
							{available_rooms.map((x, i) => 
								<option key={i} value={x.room_no}>
									{x.room_no+", "+x.type}
								</option>
							)}
						</FormControl>
						<FormControl id="customer_id" as="select" onChange={this.onSelectChange}>
							<option> Select Customer </option>
							{this.props.customers.map((x, i) => 
								<option key={i} value={x.customer_id}>
									{x.name+" : "+x.phone}
								</option>
							)}
						</FormControl>
						<InputGroup.Append>
							<Button onClick={this.onClickAllot}>Allot</Button>
						</InputGroup.Append>
					</InputGroup>
				</Row> */}
				<Row>
					<Col>
						<RoomsTable lable="AVAILABLE" rooms={available_rooms}/>
					</Col>
					<Col>
						<RoomsTable lable="UNDER MAINTAINANCE" rooms={under_maintainance}/>
					</Col>
				</Row>
				<Row>
					<Col>
						<RoomsTable lable="FILLED ROOMS" rooms={filled_rooms}/>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchRooms: () => dispatch(fetchRooms()),
		fetchCustomers: () => dispatch(fetchCustomers())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);