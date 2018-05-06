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
				<div className='avatar'>
					<img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1525637838/323463_2651367759148_317015209_o_czpd5y.jpg'/>
				</div>
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