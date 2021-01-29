import React, { Component } from 'react';
import { Container, Row, Col, Table, InputGroup, FormControl, Button } from 'react-bootstrap';

import {connect} from 'react-redux';
import mapStateToProps from '../utils/mapStateToProps';
import { fetchCustomers, createCustomer } from '../actions/customers-actions';

class Customers extends Component {

	state = {
		name: null,
		phone: null,
		address: null
	}

	componentDidMount(){
		this.props.fetchCustomers();
	}

	onFieldChange = ({target}) => {
		let x = {};
		x[target.id] = target.value;
		this.setState(x);
	}

	onClickCreate = () => {
		if(!(this.state.name && this.state.phone && this.state.address)) return;
		console.log(this.state);
		this.props.createCustomer(this.state);
	}

	render() {
		return (
			<Container className="pt-4">
				<Col>
					<Row className="justify-content-center pb-4">
						<InputGroup className="align-self-center">
							<FormControl id="name" placeholder="Name" onChange={this.onFieldChange}/>
							<FormControl id="phone" placeholder="Phone" onChange={this.onFieldChange}/>
							<FormControl id="address" placeholder="Address" onChange={this.onFieldChange}/>
							<InputGroup.Append>
								<Button onClick={this.onClickCreate}>Create</Button>
							</InputGroup.Append>
						</InputGroup>
					</Row>
					<Row>
						<Table bordered hover className="text-center">
							<thead>
								<tr className="rs-table-head">
									<th colSpan={4}>CUSTOMERS</th>
								</tr>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Phone</th>
									<th>Address</th>
								</tr>
							</thead>
							<tbody>
								{
									this.props.customers.map((customer, i) =>
										<tr key={i}>
											<td>{customer.id}</td>
											<td>{customer.name}</td>
											<td>{customer.phone}</td>
											<td>{customer.address}</td>
										</tr>
									)
								}
							</tbody>
						</Table>
					</Row>
				</Col>
			</Container>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchCustomers: () => dispatch(fetchCustomers()),
		createCustomer: customer => dispatch(createCustomer(customer))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);