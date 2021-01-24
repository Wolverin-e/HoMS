import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../actions/types";

const notificationsReducer = (state, action) => {

	const x = {
		...state,
		notifications: [...state.notifications]
	};

	switch (action.type) {
		case ADD_NOTIFICATION:
			x.notifications.push(action.payload);
			return x;
		case REMOVE_NOTIFICATION:
			x.notifications.splice(action.payload, 1);
			return x;
		default:
			break;
	}
}

export default notificationsReducer;