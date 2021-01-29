import { CUSTOMERS } from "./categories";
import { UPDATE_CUSTOMERS } from "./types";
import { showNotification } from "../actions/notification-actions";

import api from '../api';

export const updateCustomers = customers => {
	return {
		cat: CUSTOMERS,
		type: UPDATE_CUSTOMERS,
		payload: customers
	}
}

export const createCustomer = ({name, phone, address}) => {
	return dispatch => {
		api
			.post('/customers/create', {name, phone, address})
			.then(res => {
				if(res.status === 200){
					dispatch(fetchCustomers());
					dispatch(showNotification({
						head: "Customers",
						body: "Added Successfully",
						autohide: true
					}));
				}
			}).catch(err => {
				dispatch(showNotification({
					head: "Service Err",
					body: err.message,
					autohide: true
				}));
			})
	}
}

export const fetchCustomers = () => {
	return dispatch => {
		api
			.get('/customers/fetchAll')
			.then(res => {
				console.log(res.data);
				dispatch(updateCustomers(res.data));
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