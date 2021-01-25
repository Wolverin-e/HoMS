const Express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const setRoutes = require('./routes');

const PORT = 8080;

var app = Express();
var jsonParser = bodyParser.json();

app.use(jsonParser);

app.use(cors({
	origin: /.*/,
	methods: ["GET", "POST", "OPTION"]
}))

setRoutes(app);

const httpsServer = https.createServer({
	key: fs.readFileSync("../certs/key.pem"),
	cert: fs.readFileSync("../certs/cert.pem")
}, app);

httpsServer.listen(PORT, (err) => {
	if(err) console.log(err);
	console.log(`Listening on ${PORT}`);
})