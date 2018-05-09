import React from 'react';
import Nav from './nav';
import About from './about';
import Skill from './skill';
import Project from './project';
import ContactContainer from './contact_container';
import Footer from './footer';

class Home extends React.Component {
	constructor(){
		super();
		this.state = {};
	}

	render(){
		return(
			<div>
				<Nav />
				<About />
				<Skill />
				<Project />
				<ContactContainer />
				<Footer />
			</div>
		);
	}
}

export default Home;