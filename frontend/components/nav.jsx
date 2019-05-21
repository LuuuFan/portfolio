import React from 'react';

class Nav extends React.Component {
	constructor(){
		super();
		this.state = {
			selected: '',
			dropdown: false,
		};
	}

	select(type){
		if (type === this.state.selected) {
			this.setState({
				selected: ''
			});
		} else {
			this.setState({
				selected: type
			});
		}
	}

	scroll(e, target){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 800);	
	}

	top(){
		this.setState({selected: ''});
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 800);	
	}

	toggleDropdown(){
		this.setState({dropdown: !this.state.dropdown});
	}

	render(){
		const {selected, dropdown} = this.state;
		return(
			<nav>
				<ul>
					<a href='#about' onClick={(e)=>this.scroll(e, '#about')}>
						<li className={selected==='about' ? 'selected' : ''} onClick={()=>this.select('about')}>About</li>
					</a>
					<a href='#skill' onClick={(e)=>this.scroll(e, '#skill')}>
						<li className={selected==='skill' ? 'selected' : ''} onClick={()=>this.select('skill')}>Skills</li>
					</a>
				</ul>
				<ul>
					<a href='#project'  onClick={(e)=>this.scroll(e, '#project')}>
						<li className={selected==='portfolio' ? 'selected' : ''} onClick={()=>this.select('portfolio')}>Portfolio</li>
					</a>
					<a href='#contact'  onClick={(e)=>this.scroll(e, '#contact')}>
						<li className={selected==='contact' ? 'selected' : ''} onClick={()=>this.select('contact')}>Contact</li>
					</a>
				</ul>
				<div className='avatar' onClick={()=>this.top()}>
					<img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1525637838/323463_2651367759148_317015209_o_czpd5y.jpg'/>
				</div>
				<div className='mobile-nav' onClick={()=>this.toggleDropdown()}>
					<i className="fas fa-bars"></i>
				</div>
				<div className={`dropdown ${dropdown ? "active" : ""}`}>
					<ul>
						{Object.keys(navContent).map((li, idx) => <li key={idx} onClick={()=>this.scroll(e, navContent[li])}>{li}</li>)}
					</ul>					
				</div>
				{dropdown ? <div className='modal-screen' onClick={()=>this.toggleDropdown()}></div> : ""}
			</nav>
		); 
	}
}

export default Nav;

const navContent = {
	"about": "#about", 
	"skills": "#skill", 
	"portfolio": "#project", 
	"contact": "#contact",
}