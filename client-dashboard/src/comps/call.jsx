import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import Client from '../client';
import Peer from 'simple-peer';

class Caller extends Component {

	state = {
		id: null,
		client: null,
		peer: null
	}

	startHandler(){
		// const constraints = {
		// 	'video': true,
		// 	'audio': false
		// }

		// navigator.mediaDevices.getUserMedia(constraints)
		// .then(stream => {
		// 	console.log('Got MediaStream:', stream);
		// 	document.querySelector("video#localVideo").srcObject = stream;
		// })
		// .catch(error => {
		// 	console.error('Error accessing media devices.', error);
		// });

		// const client = new Client(1);

	}

	onRegister = () => {
		const client = new Client(this.state.id);
		const peer = new Peer();
		client.onTransmission(msg => {
			console.log("onRegister hook: ", msg);
			if(msg.data){
				peer.signal(msg.data);
			}
		})

		peer.on('signal', data => {
			client.transmit({data});
		})

		peer.on('data', data => {
			console.log('OmRegister peer-data hook: ' + data)
		})

		this.setState({client, peer});
	}

	onCall = () => {
		const client = this.state.client;
		const peer = new Peer({initiator: true});

		client.removeTransmissionListeners();

		client.onTransmission(msg => {
			console.log("onCall hook: ", msg);
			if(msg.data){
				peer.signal(msg.data);
			}
		})

		client.connectTo(this.state.id);

		peer.on('signal', data => {
			client.transmit({data});
		})

		peer.on('connect', () => {
			const msg = "abcd";
			peer.send(msg);
			console.log("Send: ", msg);
		})
	}

	// showBadge = () => {
	// }

	onIdChange = evt => {
		this.setState({id: evt.target.value})
	}

	render() { 
		return (
			<div className="wrapper d-flex flex-column justify-content-center align-items-center">

				<video id="localVideo" playsInline={false} controls={true} autoPlay={false}/>

				<Row>
					<InputGroup as={Col}>
						<FormControl placeholder="ID" onChange={this.onIdChange}/>
						<InputGroup.Append>
							<Button onClick={this.onRegister} variant="outline-secondary">Register</Button>
							<Button onClick={this.onCall} variant="outline-warning">Call</Button>
						</InputGroup.Append>
					</InputGroup>
				</Row>
			</div>
		);
	}
}
 
export default Caller;