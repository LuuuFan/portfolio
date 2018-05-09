import React from 'react';
import {sendContact} from '../util/contact';

class Contact extends React.Component{

	constructor(){
		super();
		this.state = {
			name:'',
			phone: '',
			email: '',
			message: '',
			errorName: '',
			errorPhone: '',
			errorEmail: '',
			errorMessage: '',
		};
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(type){
		const errorType = 'error' + type.charAt(0).toUpperCase() + type.slice(1);
		if (this.state[errorType]) {
			this.state.setState({[errorType]: ""});
		}
		return (e) => {
			this.setState({[type]: e.target.value});
		};
	}

	checkInput(type){
		switch(type){
			case 'Name':
			case 'Phone':

			case 'Email':
				const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if (!re.test(String(this.state.email).toLowerCase())) { 
					this.setState({error: 'Not a valid email address'});
					return false;
				} else {
					return true;
				}
			case 'Message':
				if(this.state.message){
					return true;
				} else {
					return false;
				}
		}


	}

	sendMessage(){
		if (!this.state.errorName && !this.state.errorPhone && !this.state.errorEmail && !this.state.errorMessage) {
		emailjs.send("default_service","portfolio", this.state)
			.then((res)=>{
				if (res.status === 200) {
					this.props.receiveMessage(this.state);
					this.emptyInput();
				}
			}, (err)=>{
				this.props.receiveError(err);
			});	
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
					Thanks {message.name}, your message has been sent.
				</div> : ""}
				<form>
					<div>
						<div>
							<input type='text' placeholder='Your name' value={this.state.name} onChange={this.handleInput('name')}/>
							<input type='text' placeholder='Email'  value={this.state.email} onChange={this.handleInput('email')}/>
							<input type='text' placeholder='Phone Number'  value={this.state.phone} onChange={this.handleInput('phone')}/>
						</div>
						<div>
							<textarea placeholder='Message'  value={this.state.message} onChange={this.handleInput('message')}/>
						</div>
					</div>
					<input type='submit' value='Send' onClick={()=>this.sendMessage()}/>
				</form>
			</div>
		);
	}
}

export default Contact;