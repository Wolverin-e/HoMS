import { ROOM_SERVICE } from './categories';
import { CREATE_ROOM_SERVICE_REQ } from './types';

export const createRoomServiceRequest = (type, room_no, additional_notes) => {
	return {
		cat: ROOM_SERVICE,
		type: CREATE_ROOM_SERVICE_REQ,
		payload: {
			type,
			room_no,
			additional_notes
		}
	}
}