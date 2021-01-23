import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import SignalingClient from 'signaling/client';
import Peer from 'simple-peer';

import { connect } from "react-redux";
import mapStateToProps from "../utils/mapStateToProps";
import { showNotification } from "../actions/notification-actions";

Peer.prototype.sendObj = function(obj) {
	this.send(JSON.stringify(obj));
}

Peer.prototype.recvObj = function(cb) {
	this.on('data', data => {
		if(data.toString()){
			try{
				data = JSON.parse(data);
				cb(data);
			} catch {
				(()=>{})();
			}
		}
	})
}

class Caller extends Component {

	state = {
		id: null,
		client: null,
		transPeer: null,
		calling: false,
		notifications: []
	}

	onRegister = () => {
		let id = window.sessionStorage.getItem("id");
		id = id?id:this.state.id;
		const client = new SignalingClient(id);
		const recvPeer = new Peer();
		client.onTransmission(msg => {
			if(msg.data){
				console.log(msg.data);
				recvPeer.signal(msg.data);
			}
		})

		recvPeer.on('signal', data => {
			client.transmit({data});
		})

		recvPeer.recvObj( data => {
			if(data.stopCall){
				window.location.reload();
			}
		})

		recvPeer.on('stream', stream => {
			const vidObject = document.querySelector("video#localVideo");
			vidObject.srcObject = stream;
			vidObject.muted = false;

			navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true
			}).then(stream => {
				this.setState({calling:true});
				recvPeer.addStream(stream);
			})
		})

		this.setState({client});
	}

	onCall = () => {
		const client = this.state.client;
		const transPeer = new Peer({initiator: true});

		client.removeTransmissionListeners();

		client.onTransmission(msg => {
			if(msg.data){
				transPeer.signal(msg.data);
			}
		})

		client.connectTo(this.state.id);

		transPeer.on('signal', data => {
			client.transmit({data});
		})

		transPeer.on('connect', () => {
			navigator.mediaDevices.getUserMedia({
				video: {height: 400, width: 550},
				audio: true
			}).then(stream => {
				transPeer.addStream(stream);
			})
		})

		transPeer.on('stream', stream => {
			const vidObject = document.querySelector("video#localVideo");
			vidObject.muted = false;
			vidObject.srcObject = stream;
		})

		this.setState({transPeer})
		this.setState({calling: true})
	}

	onHangupCall = () => {
		this.state.transPeer.sendObj({stopCall: true})
		window.location.reload()
	}

	onIdChange = evt => {
		this.setState({id: evt.target.value})
	}

	componentDidMount(){
		if(window.sessionStorage.getItem("id")){
			this.onRegister();
		}

		this.props.showNotification({
			head: "Caller",
			body: "Welcome to the Caller!",
			auto: true
		});
	}

	render() {
		return (
			<div className="wrapper d-flex flex-column justify-content-center align-items-center">

				<video id="localVideo" height="400px" poster="/vac.jpg" playsInline controls={false} autoPlay muted/>

				<Row className="mt-5">
					<InputGroup as={Col}>
						<FormControl placeholder="ID" onChange={this.onIdChange}/>
						<InputGroup.Append>
							{window.sessionStorage.getItem("id")?true:<Button onClick={this.onRegister} hidden={this.state.client?true:false} variant="warning">Register</Button>}
							<Button onClick={this.state.calling?this.onHangupCall:this.onCall} variant="warning">{this.state.calling?"HangUp":"Call"}</Button>
						</InputGroup.Append>
					</InputGroup>
				</Row>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		showNotification: notification => dispatch(showNotification(notification))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Caller);