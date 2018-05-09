import {RECEIVE_ERROR, CLEAR_ERROR, CLEAR_ALL_ERROR} from '../actions/error';

const errorReducer = (state={}, action) => {
	Object.freeze(state);
	let newState;
	switch(action.type){
		case RECEIVE_ERROR:
			return Object.assign({}, state, action.error);
		case CLEAR_ERROR:
			newState = Object.assign({}, state);
			newState[action.errorType] = "";
			return newState;
		case CLEAR_ALL_ERROR:
			return {};
		default:
			return state;
	}	
};

export default errorReducer;