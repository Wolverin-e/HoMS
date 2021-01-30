import { ROOM_SERVICE } from './categories';
import { UPDATE_SERVICE_REQUESTS } from './types';
import { showNotification } from "../actions/notification-actions";

import api from '../api';

export const updateServiceRequests = reqs => {
	return {
		cat: ROOM_SERVICE,
		type: UPDATE_SERVICE_REQUESTS,
		payload: reqs
	}
}

export const fetchServiceRequests = () => {
	console.log("roomservices fetched!");
	return dispatch => {
		api.get('/roomService/fetchAll')
			.then(res => {
				dispatch(updateServiceRequests(res.data));
			}).catch(err => {
				dispatch(showNotification({
					head: "Service Err",
					body: err.message,
					autohide: true
				}))
			})
	}
}

export const assignServiceRequest = id => {
	return dispatch => {
		api.post('/roomService/deactivate', {id})
			.then(res => {
				if(res.status === 200){
					dispatch(fetchServiceRequests());
					dispatch(showNotification({
						head: "Room Service",
						body: "Assigned Successfully",
						autohide: true
					}));
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