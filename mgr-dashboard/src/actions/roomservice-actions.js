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
	return dispatch => {
		api.get('/roomService/fetchAll')
			.then(res => {
				console.log(res.data);
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
			.then(() => {
				dispatch(fetchServiceRequests())
			}).catch(err => {
				dispatch(showNotification({
					head: "Service Err",
					body: err.message,
					autohide: true
				}))
			})
	}
}