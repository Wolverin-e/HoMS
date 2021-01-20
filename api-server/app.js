const Express = require('express');
const cors = require('cors');
const setRoutes = require('./routes');

const PORT = 8080;

var app = Express();
app.use(cors({
	origin: /.*/,
	methods: ["GET", "POST", "OPTION"]
}))

setRoutes(app);

app.listen(PORT, (err) => {
	if(err) console.log(err);
	console.log(`Listening on ${PORT}`);
})