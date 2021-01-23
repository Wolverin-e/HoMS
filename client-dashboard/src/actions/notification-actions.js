import {ADD_NOTIFICATION, REMOVE_NOTIFICATION} from './types';
import { NOTIFICATION } from './categories';

export const showNotification = notification => {
	return {
		cat: NOTIFICATION,
		type: ADD_NOTIFICATION,
		payload: notification
	}
}

export const removeNotification = id => {
	return {
		cat: NOTIFICATION,
		type: REMOVE_NOTIFICATION,
		payload: id
	}
}