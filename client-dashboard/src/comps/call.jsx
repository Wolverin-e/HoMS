import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Caller extends Component {

	startHandler(){
		const constraints = {
			'video': true,
			'audio': false
		}

		navigator.mediaDevices.getUserMedia(constraints)
		.then(stream => {
			console.log('Got MediaStream:', stream);
			document.querySelector("video#localVideo").srcObject = stream;
		})
		.catch(error => {
			console.error('Error accessing media devices.', error);
		});
	}

	render() { 
		return (
			<div className="wrapper d-flex flex-column justify-content-center align-items-center">
				<video id="localVideo" autoplay playsinline controls="false" />
				<Button variant="outline-primary" onClick={this.startHandler}>Start</Button>
			</div>
		);
	}
}
 
export default Caller;