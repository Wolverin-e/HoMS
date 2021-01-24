import { UPDATE_SERVICE_REQUESTS } from "../actions/types";

const roomServiceReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_SERVICE_REQUESTS:
			return{
				...state,
				serviceRequests: action.payload
			}
		default:
			return state;
	}
}

export default roomServiceReducer;