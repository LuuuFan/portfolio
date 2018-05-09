export const sendContact = (message) => (
	$.ajax({
		url: 'https://formspree.io/angelia.fan@gmail.com',
		method: 'POST',
		data: message	
	})
);