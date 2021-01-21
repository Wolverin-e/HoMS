import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';

class Registrar extends Component {
	state = {
		id: 0
	}

	onIdChange = (evt) => {
		this.setState({id: evt.target.value})
	}

	componentDidMount(){
		console.log(window.sessionStorage.getItem("id")?true:false);
	}

	onRegister = () => {
		window.sessionStorage.setItem("id", this.state.id);
	}

	render() {
		return (
			<div className="wrapper d-flex flex-column justify-content-center align-items-center">
				<Row className="mt-5">
					<InputGroup as={Col}>
						<FormControl placeholder="ID" onChange={this.onIdChange}/>
						<InputGroup.Append>
							<Button onClick={this.onRegister} hidden={this.state.client?true:false} variant="warning">Register</Button>
						</InputGroup.Append>
					</InputGroup>
				</Row>
			</div>
		);
	}
}
 
export default Registrar;