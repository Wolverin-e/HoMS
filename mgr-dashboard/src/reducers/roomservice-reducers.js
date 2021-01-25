import { UPDATE_SERVICE_REQUESTS, ASSIGN_SERVICE_REQUEST } from "../actions/types";

const roomServiceReducer = (state, action) => {

	let pending = []
	let assigned = []
	switch (action.type) {
		case UPDATE_SERVICE_REQUESTS:
			pending = action.payload.filter(x => !x.status);
			assigned = action.payload.filter(x => x.status);

			return {
				...state,
				pendingServiceRequests: pending,
				assignedServiceRequests: assigned
			}

		case ASSIGN_SERVICE_REQUEST:
			const id = action.payload;
			pending = state.pendingServiceRequests.filter(x => x.id!==id);
			assigned = [...state.assignedServiceRequests];
			assigned.push(state.pendingServiceRequests.filter(x => x.id===id)[0]);

			return {
				...state,
				pendingServiceRequests: pending,
				assignedServiceRequests: assigned
			}

		default:
			return state;
	}
}

export default roomServiceReducer;