const Express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
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

app.listen(PORT, (err) => {
	if(err) console.log(err);
	console.log(`Listening on ${PORT}`);
})