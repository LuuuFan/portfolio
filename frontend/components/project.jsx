import React from 'react';

class Project extends React.Component{
	constructor(){
		super();
		this.state={
			hidden: ''
		};
	}

	revealCover(target){
		this.setState({hidden: target});
	}

	hideCover(){
		this.setState({hidden: ''});
	}

	render(){
		return(
			<div id='project'>
				<h1>PORTFOLIO</h1>
				<div className='project-list order-1'>
					<div className='single-project'>
						<div className='project-description'>
							<h2><a href='https://celp.herokuapp.com/#/' target='_blank'>Celp</a></h2>
							<p>A Full Stack Web Application inspired by Yelp, developed in Ruby on Rails, React, etc.	 </p>
						</div>
						<div className='project-screenshoot'  onMouseOver={()=>this.revealCover('celp')} onMouseOut={()=>this.hideCover()}>
							<a href='https://celp.herokuapp.com/#/' target='_blank'>
								<img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1525672532/Screenshot_from_2018-05-06_22-55-08_xdp1qj.png' />
								<div className={`project-cover ${this.state.hidden==='celp' ? '' : 'hidden'}`}>CELP</div>
							</a>
						</div>
					</div>
					
					<div className='single-project order-2'>
						<div className='project-description'>
							<h2><a href='https://homeco.herokuapp.com/#/' target='_blank'>Homeco</a></h2>
							<p>An All-in-one Home Service and Schedule management Project structured by MERN Stack	 
</p>
						</div>
						<div className='project-screenshoot'  onMouseOver={()=>this.revealCover('homeco')} onMouseOut={()=>this.hideCover()}>
							<a href='https://homeco.herokuapp.com/#/' target='_blank'>
								<img src='http://res.cloudinary.com/ddwejrtgh/image/upload/v1525672533/Screenshot_from_2018-05-06_22-54-48_gqbzfh.png' />
								<div className={`project-cover ${this.state.hidden==='homeco' ? '' : 'hidden'}`}>HOMECO</div>
							</a>

						</div>
					</div>
					<div className='single-project order-1'>
						<div className='project-description'>
							<h2><a href='https://hyouuu.github.io/PendoWeb/#/' target='_blank'>Pendo</a></h2>
							<p>Web application for <a href='https://itunes.apple.com/us/app/pendo-note/id805451002?mt=8' target='_blank'>Pendo Note iOS app</a>, crispy notebook for any ideas</p>
						</div>
						<div className='project-screenshoot'  onMouseOver={()=>this.revealCover('pendo')} onMouseOut={()=>this.hideCover()}>
							<a href='https://hyouuu.github.io/PendoWeb/#/' target='_blank'>
								<img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1525672680/Screenshot_from_2018-05-06_22-57-33_sntjd8.png' />
								<div className={`project-cover ${this.state.hidden==='pendo' ? '' : 'hidden'}`}>PENDO</div>
							</a>

						</div>
					</div>
					<div className='single-project order-2'>
						<div className='project-description'>
							<h2><a href='https://luuufan.github.io/petta/' target='_blank'>Petta</a></h2>
							<p>A Data Visualization project build with JavaScript, D3.JS and Webpack.	 </p>
						</div>
						<div className='project-screenshoot' onMouseOver={()=>this.revealCover('petta')} onMouseOut={()=>this.hideCover()}>
							<a href='https://luuufan.github.io/petta/' target='_blank'>
								<img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1525672702/Screenshot_from_2018-05-06_22-58-09_s8hot0.png' />
								<div className={`project-cover ${this.state.hidden==='petta' ? '' : 'hidden'}`}>PETTA</div>
							</a>

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;