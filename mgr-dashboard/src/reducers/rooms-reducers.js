import { UPDATE_ROOMS } from '../actions/types';

const roomsReducer = (state, action) => {
	let x = {
		...state,
		rooms: [...state.rooms]
	}
	switch (action.type) {
		case UPDATE_ROOMS:
			x.rooms = [...action.payload];
			return x;

		default:
			return state;
	}
}

export default roomsReducer;