const { Server } = require('socket.io');
const https = require('https');
const fs = require('fs');
const httpsServer = https.createServer({
	key: fs.readFileSync("../certs/key.pem"),
	cert: fs.readFileSync("../certs/cert.pem")
});

reg = {}

class SignalingServer {

	constructor(options = {}){
		this.server = new Server(options);
		this.bootstrap();
	}

	bootstrap(){
		this.server.on("connection", soc => {

			console.log(soc.id, "Connected");

			soc.once("contactID", contactID => {
				soc.contactID = contactID;
				reg[contactID] = soc;
				console.log(`${soc.id} connected as ${contactID}`);
			});

			soc.on("connectTo", connectTo => {
				const socTo = reg[connectTo];
				soc.on("transmit", msg => {
					socTo.emit("transmission", msg);
				});

				socTo.on("transmit", msg => {
					soc.emit("transmission", msg);
				});
				console.log(`${soc.contactID} connected to ${connectTo}`);
			});

			soc.on("disconnect", () => {
				delete reg[soc.contactID]
			});
		});
	}

	listen(port = 8000){
		httpsServer.listen(port, err => {
			console.log(`Signaling Server Listening over ${port}`);
		});
		this.server.listen(httpsServer);
	}
}

new SignalingServer({
	cors: {
		origin: /.*/,
		methods: ["GET", "POST", "OPTION"]
	}
}).listen(8000);