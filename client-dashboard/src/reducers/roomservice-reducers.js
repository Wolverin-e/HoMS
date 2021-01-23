import { CREATE_ROOM_SERVICE_REQ } from "../actions/types";
import api from '../api';

const roomServiceReducer = (state, action) => {

	switch (action.type) {
		case CREATE_ROOM_SERVICE_REQ:
			return dispatch => {
				api
					.post('/roomService/create', {...action.payload})
					.then(console.log)
			}
		default:
			return state;
	}
}

export default roomServiceReducer;