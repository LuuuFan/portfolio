import React from 'react';
import {connect} from 'react-redux';
import {receiveError, clearError} from '../actions/error';
import {receiveMessage} from '../actions/message';
// import {sendContact} from '../actions/contact';
import Contact from './contact';

const mapStateToProps = (state) => ({
	error: state.error,
	message: state.message
});

const mapDispatchToProps = (dispatch) => ({
	// sendContact: (message) => dispatch(sendContact(message))
	receiveMessage: (message) => dispatch(receiveMessage(message)),
	receiveError: (error) => dispatch(receiveError(error)),
	clearError: ()=>dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);