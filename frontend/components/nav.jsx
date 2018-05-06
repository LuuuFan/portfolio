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
					<a href='#skill'>
						<li>Skills</li>
					</a>
				</ul>
				<ul>
					<a href='#project'>
						<li>Projects</li>
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