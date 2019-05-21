import React from 'react';
import {sendContact} from '../util/contact';

class Contact extends React.Component{

	constructor(){
		super();
		this.state = {
			name:'',
			phone: '',
			email: '',
			message: ''
		};
		// this.handleInput = this.handleInput.bind(this);
	}

	handleInput(type){
		const errorType = 'error' + type.charAt(0).toUpperCase() + type.slice(1);
		return (e) => {
			this.setState({[type]: e.target.value});
		};
	}

	checkInput(type){
		switch(type){
			case 'Name':
				if (this.state.name) {
					if (this.props.error[`error${type}`]) {
						this.props.clearError(`error${type}`);
					}
					return true;
				} else {
					if (!this.props.error[`error${type}`]) {
						this.props.receiveError({errorName: 'Please input your name'});
					}
					return false;
				}
			case 'Phone':
				return true;
			case 'Email':
				const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!this.state.email){
					this.props.receiveError({errorEmail: 'Please input your email address'});
					return false;
				}
				else if (!re.test(String(this.state.email).toLowerCase())) { 
					this.props.receiveError({errorEmail: 'Not a valid email address'});
					return false;
				} else {
					this.props.clearError(`error${type}`);
					return true;
				}
			case 'Message':
				if (this.state.message) {
					if (this.props.error[`error${type}`]) {
						this.props.clearError(`error${type}`);
					}
					return true;
				} else {
					if (!this.props.error[`error${type}`]) {
						this.props.receiveError({errorMessage: 'Please say something to me~:)'});
					}
					return false;
				}
		}
	}

	checkAll(){
		return this.checkInput('Name') && this.checkInput('Email') && this.checkInput('Message');
	}

	sendMessage(){
		if (this.checkAll()) {
			emailjs.send("default_service","portfolio", this.state)
				.then((res)=>{
					if (res.status === 200) {
						this.props.receiveMessage(this.state);
						this.emptyInput();
					}
				}, (err)=>{
					this.props.receiveError({error: err});
				});	
		} else {
		}
	}

	emptyInput(){
		this.setState({
			name:'',
			phone: '',
			email: '',
			message: ''
		});
	}

	render(){
		const {message, error} = this.props;
		return(
			<div id='contact'>
				<h1>CONTACT</h1>
				{message.name ? <div className='message-notification'>
					Thanks {message.name}, your message has been sent. I will get back to you soon!
				</div> : ""}
				{error.error ? <div className='error-send-email'>
					Oooops~ seems there is an error, please send email to <a href='mailto:angelia.fan@gmail.com'>Angelia.fan@gmail.com</a>.
				</div> : ""}
				<form>
					<div>
						<div>
							<input type='text' placeholder='Please enter your name *' value={this.state.name} onChange={this.handleInput('name')} onBlur={()=>this.checkInput('Name')}/>
							{error.errorName ? 
								<div className='error'>{error.errorName ? error.errorName : ''}</div>
							: ""}
							<input type='text' placeholder='Please enter your email *'  value={this.state.email} onChange={this.handleInput('email')} onBlur={()=>this.checkInput('Email')}/>
							{error.errorEmail ? 
								<div className='error'>{error.errorEmail}</div>
							: ""}
							<input type='text' placeholder='Please enter your phone Number'  value={this.state.phone} onChange={this.handleInput('phone')} onBlur={()=>this.checkInput('Phone')}/>
							{error.errorPhone ? 
								<div className='error'>{error.errorPhone}</div>
							: ""}
						</div>
						<div className='contact-message'>
							<textarea placeholder='Message for me *'  value={this.state.message} onChange={this.handleInput('message')} onBlur={()=>this.checkInput('Message')}/>
							<div className='error'>{error.errorMessage ? error.errorMessage : ''}</div>
						</div>
					</div>
					<input type='submit' value='Send' onMouseOver={()=>this.checkAll()} onClick={()=>this.sendMessage()}/>
				</form>
			</div>
		);
	}
}

export default Contact;