import React, { Component } from 'react';
import RoomsTable from './rooms-table';
import { Col, Container, Row, FormControl, InputGroup, Button} from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';

import { connect } from 'react-redux';
import { fetchRooms, allocateRoom } from '../actions/rooms-actions';
import { fetchCustomers } from '../actions/customers-actions';
import mapStateToProps from '../utils/mapStateToProps';


class Rooms extends Component {

	state={
		room_no: null,
		customer_id: null,
		arrival: moment().format('YYYY-MM-DD'),
		departure: moment().add(7, 'Days').format('YYYY-MM-DD')
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

	onRangeChange = (startDate, endDate) => {
		console.log(startDate, endDate);
		let x = {
			arrival: startDate.format('YYYY-MM-DD'),
			departure: endDate.format('YYYY-MM-DD')
		}
		this.setState(x);
	}

	onClickAllocate = () => {
		if(!(this.state.room_no && this.state.room_no)) return;
		this.props.allocateRoom(this.state);
	}

	render() {
		const under_maintainance = this.props.rooms.filter(x => !x.status);
		const available_rooms = this.props.rooms.filter(x => x.status && (x.customer_id === null));
		const filled_rooms = this.props.rooms.filter(x => x.customer_id !== null);
		return (
			<Container className="pt-4">
				<Row className="justify-content-center pb-4">
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
								<option key={i} value={x.id}>
									{x.name+", "+x.phone}
								</option>
							)}
						</FormControl>

						<DateRangePicker initialSettings={{
							startDate: moment(),
							endDate: moment().add(7, 'Days'),
							opens: 'center',
							"autoApply": true,
							locale: {
								format: 'DD/MM/YYYY',
								separator: ' → '
							}
						}} onCallback={this.onRangeChange}>
							<FormControl placeholder="Date"/>
						</DateRangePicker>

						<InputGroup.Append>
							<Button onClick={this.onClickAllocate}>Allocate</Button>
						</InputGroup.Append>

					</InputGroup>
				</Row>
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
		fetchCustomers: () => dispatch(fetchCustomers()),
		allocateRoom: allocation => dispatch(allocateRoom(allocation))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);