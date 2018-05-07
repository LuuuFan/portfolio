import React from 'react';

class Project extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div id='project'>
				<h1>PORTFOLIO</h1>
				<div className='project-list order-1'>
					<div className='single-project'>
						<div className='project-description'>
							<h2>Celp</h2>
							<p>A Full Stack Web Application inspired by Yelp, developed in Ruby on Rails, React, etc.	 </p>
						</div>
						<div className='project-screenshoot'>
						</div>
					</div>
					
					<div className='single-project order-1'>
						<div className='project-description'>
							<h2>Homeco</h2>
							<p>descriptionAn All-in-one Home Service and Schedule management Project structured by MERN Stack	 
</p>
						</div>
						<div className='project-screenshoot'>
						</div>
					</div>
					<div className='single-project order-2'>
						<div className='project-description'>
							<h2>Petta</h2>
							<p>A Data Visualization project build with JavaScript, D3.JS and Webpack.	 </p>
						</div>
						<div className='project-screenshoot'>
						</div>
					</div>
					<div className='single-project order-2'>
						<div className='project-description'>
							<h2>Pendo</h2>
							<p>Web application for <a href='https://itunes.apple.com/us/app/pendo-note/id805451002?mt=8' target='_blank'>Pendo Note iOS app</a>, crispy notebook for any ideas</p>
						</div>
						<div className='project-screenshoot'>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;