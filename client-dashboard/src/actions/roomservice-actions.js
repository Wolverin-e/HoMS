// import { ROOM_SERVICE } from './categories';
// import { CREATE_ROOM_SERVICE_REQ } from './types';
import { showNotification } from "../actions/notification-actions";

import api from '../api';

export const createRoomServiceRequest = req => {
	return dispatch => {
		api.post('/roomService/create', {...req})
			.then(res => {
				if(res.status === 200){
					dispatch(showNotification({
						head: "Service",
						body: req.type+" Request Created",
						autohide: true
					}))
				}
			}).catch(err => {
				dispatch(showNotification({
					head: "Service Err",
					body: err.message,
					autohide: true
				}))
			})
	}
}