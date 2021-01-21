const { io } = require('socket.io-client');

class SignalingClient {

	constructor(contactID = 0, addr = null){
		addr = addr?addr:(window?'http://'+window.location.hostname+':8000':"http://localhost:8000");
		this.soc = io(addr)
		this.soc.emit("contactID", contactID)
	}

	connectTo(id = 0){
		this.soc.emit("connectTo", id);
	}

	transmit(msg = "EmptyMsg"){
		this.soc.emit("transmit", msg);
	}

	onTransmission(cb = msg => {}){
		this.soc.on("transmission", msg => cb(msg));
	}

	removeTransmissionListeners(){
		this.soc.removeAllListeners(['transmission']);
	}
}

// const client1 = new SignalingClient(1);
// const client2 = new SignalingClient(2);

// client1.connectTo(2);
// client1.onTransmission(msg => {
// 	console.log(`client1 recieved: ${msg}`);
// });

// client2.transmit("alpha");

module.exports =  SignalingClient;