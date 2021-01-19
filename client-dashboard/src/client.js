const { io } = require('socket.io-client');

class Client {

	constructor(contactID = 0, addr = "http://localhost:8000"){
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

// const client1 = new Client(1);
// const client2 = new Client(2);

// client1.connectTo(2);
// client1.onTransmission(msg => {
// 	console.log(`client1 recieved: ${msg}`);
// });

// client2.transmit("alpha");

export default Client;