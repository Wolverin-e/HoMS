import notificationReducer from './notification-reducers';
import roomServiceReducer from './roomservice-reducers';
import categories from '../actions/categories'
import roomsReducer from './rooms-reducers';

const initialState = {
	notifications: [],
	pendingServiceRequests: [],
	assignedServiceRequests: [],
	rooms: []
}

const rootReducer = (state = initialState, action) => {
	switch (action.cat) {
		case categories.NOTIFICATION:
			return notificationReducer(state, action);
		case categories.ROOM_SERVICE:
			return roomServiceReducer(state, action);
		case categories.ROOMS:
			return roomsReducer(state, action);
		default:
			return state;
	}
}

export default rootReducer;