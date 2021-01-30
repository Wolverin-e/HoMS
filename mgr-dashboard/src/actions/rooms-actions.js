import { ROOMS } from './categories';
import { UPDATE_ROOMS } from './types';
import { showNotification } from "../actions/notification-actions";

import api from '../api';

export const updateRooms = rooms => {
	return {
		cat: ROOMS,
		type: UPDATE_ROOMS,
		payload: rooms
	}
}

export const fetchRooms = () => {
	return dispatch => {
		api
			.get('/rooms/fetchAll')
			.then(res => {
				console.log(res.data);
				dispatch(updateRooms(res.data));
			})
			.catch(err => {
				dispatch(showNotification({
					head: "Service Err",
					body: err.message,
					autohide: true
				}))
			});
	}
}

export const allocateRoom = allocation => {
	return dispatch => {
		api
			.post('/rooms/allocate', {...allocation})
			.then(res => {
				if(res.status === 200){
					dispatch(fetchRooms());
					dispatch(showNotification({
						head: "Rooms",
						body: "Allocated Successfully",
						autohide: true
					}));
				}
			}).catch(err => {
				dispatch(showNotification({
					head: "Service Err",
					body: err.message,
					autohide: true
				}));
			});
	}
}

export const moveUnderMaintainance = room_no => {
	return dispatch => {
		api
			.post('/rooms/maintain', {room_no})
			.then(res => {
				if(res.status === 200){
					dispatch(fetchRooms());
				}
			}).catch(err => {
				dispatch(showNotification({
					head: "Service Err",
					body: err.message,
					autohide: true
				}));
			});
	}
}

export const makeAvailable = room_no => {
	return dispatch => {
		api
			.post('/rooms/makeAvailable', {room_no})
			.then(res => {
				if(res.status === 200){
					dispatch(fetchRooms());
				}
			}).catch(err => {
				dispatch(showNotification({
					head: "Service Err",
					body: err.message,
					autohide: true
				}));
			});
	}
}