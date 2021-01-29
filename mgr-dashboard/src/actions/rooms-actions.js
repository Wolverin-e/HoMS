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
			})
		}
}