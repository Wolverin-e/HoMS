import React, { Component } from 'react';
import RoomsTable from './rooms-table';
import { Col, Container, Row, FormControl, InputGroup, Button} from 'react-bootstrap';

import { connect } from 'react-redux';
import { fetchRooms } from '../actions/rooms-actions';
import mapStateToProps from '../utils/mapStateToProps';


class Rooms extends Component {

	componentDidMount(){
		this.props.fetchRooms();
	}

	render() {
		return (
			<Container className="pt-4">
				{/* <Row md={5} className="justify-content-center pb-4">
					<InputGroup className="align-self-center">
						<FormControl placeholder="Room no"/>
						<InputGroup.Append>
							<Button>Alpha</Button>
						</InputGroup.Append>
					</InputGroup>
				</Row> */}
				<Row>
					<Col>
						<RoomsTable lable="FUNCTIONAL" rooms={this.props.rooms.filter(x => x.status)}/>
					</Col>
					<Col>
						<RoomsTable lable="UNDER MAINTAINANCE" rooms={this.props.rooms.filter(x => !x.status)}/>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchRooms: () => dispatch(fetchRooms())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);