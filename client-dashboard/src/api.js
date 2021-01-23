import axios from "axios";

const loc = window.location;
const apiPort = 8080

export default axios.create({
	baseURL: loc.protocol+'://'+loc.origin+':'+apiPort
})