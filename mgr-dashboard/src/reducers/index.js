import notificationReducer from './notification-reducers';
import roomServiceReducer from './roomservice-reducers';
import categories from '../actions/categories'

const initialState = {
	notifications: [],
	pendingServiceRequests: [],
	assignedServiceRequests: []
}

const rootReducer = (state = initialState, action) => {
	switch (action.cat) {
		case categories.NOTIFICATION:
			return notificationReducer(state, action);
		case categories.ROOM_SERVICE:
			return roomServiceReducer(state, action);
		default:
			return state;
	}
}

export default rootReducer;