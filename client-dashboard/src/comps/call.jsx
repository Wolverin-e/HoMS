import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import Client from '../client';
import Peer from 'simple-peer';
import Notification from './notification';

class Caller extends Component {

	state = {
		id: null,
		client: null,
		peer: null,
		recvPeer: null,
		stream: null,
		notifications: []
	}

	startHandler(){
	}

	onRegister = () => {
		const client = new Client(this.state.id);
		const recvPeer = new Peer();
		client.onTransmission(msg => {
			// console.log("onRegister hook: ", msg);
			if(msg.data){
				recvPeer.signal(msg.data);
			}
		})

		recvPeer.on('signal', data => {
			client.transmit({data});
		})

		recvPeer.on('data', data => {
			// console.log('OnRegister recvPeer-data hook: ' + data);
			this.showNotification({
				head: "Call",
				body: ''+data
			})
		})

		recvPeer.on('stream', stream => {
			const vidObject = document.querySelector("video#localVideo");
			vidObject.srcObject = stream;
			vidObject.play();

			navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true
			}).then(stream => {
				recvPeer.addStream(stream);
			})
		})

		this.setState({client, recvPeer});
	}

	onCall = () => {
		const client = this.state.client;
		const peer = new Peer({initiator: true});

		client.removeTransmissionListeners();

		client.onTransmission(msg => {
			// console.log("onCall hook: ", msg);
			if(msg.data){
				peer.signal(msg.data);
			}
		})

		client.connectTo(this.state.id);

		peer.on('signal', data => {
			client.transmit({data});
		})

		peer.on('connect', () => {
			peer.send("sending media!")
			navigator.mediaDevices.getUserMedia({
				video: {height: 400, width: 550},
				audio: true
			}).then(stream => {
				peer.addStream(stream);
			})
		})

		peer.on('stream', stream => {
			const vidObject = document.querySelector("video#localVideo");
			vidObject.srcObject = stream;
			vidObject.play();
		})
	}

	showNotification = notification => {
		var notifications = this.state.notifications;
		notifications.push(notification);
		this.setState({notifications});
	}

	removeNotification = id => {
		var notifications = this.state.notifications;
		notifications.splice(id, 1);
		console.log(id, notifications);
		this.setState({notifications});
	}

	onIdChange = evt => {
		this.setState({id: evt.target.value})
	}

	componentDidMount(){
		this.showNotification({
			head: "Caller",
			body: "Welcome to the Caller!",
			// auto: true
		})
	}

	render() {
		return (
			<>
				<div className="notification-row">
					<div className="notification-col col col-sm-3">

						{this.state.notifications.map((noti, i) => {
							return <Notification key={i} autohide={noti.auto} id={i} head={noti.head} headRight="now" body={noti.body} onClose={this.removeNotification}/>
						})}

					</div>
				</div>

				<div className="wrapper d-flex flex-column justify-content-center align-items-center">

					<video id="localVideo" height="400px" poster="/vac.jpg" playsInline controls={false} autoPlay={false}/>

					<Row className="mt-5">
						<InputGroup as={Col}>
							<FormControl placeholder="ID" onChange={this.onIdChange}/>
							<InputGroup.Append>
								<Button onClick={this.onRegister} variant="warning">Register</Button>
								<Button onClick={this.onCall} variant="warning">Call</Button>
							</InputGroup.Append>
						</InputGroup>
					</Row>
				</div>
			</>
		);
	}
}
 
export default Caller;