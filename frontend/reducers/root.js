import { combineReducers } from 'redux';
import errorReducer from './error';
import messageReducer from './message';

const rootReducer = combineReducers({
	message: messageReducer,
	error: errorReducer
});

export default rootReducer;
