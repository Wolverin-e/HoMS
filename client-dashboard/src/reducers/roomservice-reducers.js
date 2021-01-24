// import { CREATE_ROOM_SERVICE_REQ } from "../actions/types";
// import { showNotification } from "../actions/notification-actions";
// import api from '../api';

const roomServiceReducer = (state, action) => {

	switch (action.type) {
		// case CREATE_ROOM_SERVICE_REQ:
		// 	return dispatch => {
		// 		// api.post('/roomService/create', {...action.payload})
		// 		// 	.then(res => {
		// 		// 		console.log(res);
		// 		// 		dispatch(showNotification({
		// 		// 			head: "Service",
		// 		// 			body: action.payload.type+" Request Created",
		// 		// 			autohide: true
		// 		// 		}))
		// 		// 	})

		// 		api.get('/roomService/fetchAll')
		// 			.then(res => {
		// 				console.log(res);
		// 				dispatch(showNotification({
		// 					head: "Service",
		// 					body: action.payload.type+" Request Created",
		// 					autohide: true
		// 				}))
		// 			});
		// 		return state;
		// 	}
		default:
			return state;
	}
}

export default roomServiceReducer;