import * as APIUtilContact from '../util/contact';

export const sendContact = (message) => dispatch => APIUtilContact.sendContact(message)
	.then(res => {
	});