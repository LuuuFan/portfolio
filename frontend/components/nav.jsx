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
					<a href=''>
						<li>About</li>
					</a>
					<a href=''>
						<li>Projects</li>
					</a>
				</ul>
				<ul>
					<a href=''>
						<li>Skills</li>
					</a>
					<a href=''>
						<li>Contact</li>
					</a>
				</ul>
			</nav>
		); 
	}
}

export default Nav;