import React from 'react';
import Nav from './nav';
import About from './about';
import Skill from './skill';
import Project from './project';
import Contact from './contact';
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
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default Home;