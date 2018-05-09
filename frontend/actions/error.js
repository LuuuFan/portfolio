export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_ALL_ERROR = 'CLEAR_ALL_ERROR';

export const receiveError = (error) => ({
	type: RECEIVE_ERROR,
	error
});

export const clearError = (errorType) => ({
	type: CLEAR_ERROR,
	errorType
});

export const clearAllError = () => ({
	type: CLEAR_ALL_ERROR
});