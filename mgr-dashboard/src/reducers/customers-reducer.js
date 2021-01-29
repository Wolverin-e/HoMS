import { UPDATE_CUSTOMERS } from "../actions/types";

const customersReducer = (state, action) => {
	let new_state = {
		...state,
		customers: [...state.customers]
	}

	switch (action.type) {
		case UPDATE_CUSTOMERS:
			new_state.customers = action.payload;
			return new_state;
		default:
			return state;
	}
}

export default customersReducer;