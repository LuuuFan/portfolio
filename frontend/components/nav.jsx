import React from 'react';

class Nav extends React.Component {
	constructor(){
		super();
		this.state = {
			selected: ''
		};
	}

	select(type){
		if (type === this.state.selected) {
			thie.setState({
				selected: ''
			})
		} else {
			this.setState({
				selected: type
			});
		}
	}

	render(){
		return(
			<nav>
				<ul>
					<a href='#about'>
						<li className={this.state.selected==='about' ? 'selected' : ''} onClick={()=>this.select('about')}>About</li>
					</a>
					<a href='#skill'>
						<li className={this.state.selected==='skill' ? 'selected' : ''} onClick={()=>this.select('skill')}>Skills</li>
					</a>
				</ul>
				<ul>
					<a href='#project'>
						<li className={this.state.selected==='project' ? 'selected' : ''} onClick={()=>this.select('project')}>Projects</li>
					</a>
					<a href='#contact'>
						<li className={this.state.selected==='contact' ? 'selected' : ''} onClick={()=>this.select('contact')}>Contact</li>
					</a>
				</ul>
				<div className='avatar'>
					<img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1525637838/323463_2651367759148_317015209_o_czpd5y.jpg'/>
				</div>
			</nav>
		); 
	}
}

export default Nav;