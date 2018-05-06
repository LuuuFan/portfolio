import React from 'react';

class Nav extends React.Component {
	constructor(){
		super();
		this.state = {};
	}

	render(){
		return(
			<nav>
				<ul>
					<a href='#about'>
						<li>About</li>
					</a>
					<a href='#project'>
						<li>Projects</li>
					</a>
				</ul>
				<ul>
					<a href='#skill'>
						<li>Skills</li>
					</a>
					<a href='#contact'>
						<li>Contact</li>
					</a>
				</ul>
			</nav>
		); 
	}
}

export default Nav;