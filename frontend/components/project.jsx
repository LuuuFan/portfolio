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
				<div className='project-list'>
					{Object.keys(projects).map((project, idx) => 
						<div className='single-project'>
							<div className='project-screenshoot'  onMouseOver={()=>this.revealCover(project)} onMouseOut={()=>this.hideCover()}>
								<a href={projects[project].link} target='_blank'>
									<img src={projects[project].img} />
									<div className='project-cover black'>
										<h2>{project}</h2>
									</div>
									<div className={this.state.hidden===project ? "link" : 'hidden'}>
										<div><i className="fas fa-link"></i></div>
										<p>{projects[project].description}</p>
									</div>
								</a>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Project;

const projects = {
	lumitless: {
		link: 'http://ec2-54-187-78-4.us-west-2.compute.amazonaws.com:8999/#/',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1539234248/lumitlessblue_lmpcqk.png',
		description: '',
	},
	edwrd: {
		link: 'http://edwrd.co',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1536897624/main_background_3_w1o3sp.jpg',
		description: '',
	},
	doodly: {
		link: 'https://luuufan.github.io/doodly/',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1538206104/doodlyname_f7dcav.png',
		description: 'Kids canvas',
	},
	celp: {
		link: 'https://celp.herokuapp.com/#/',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671485/1500759_10202453164706123_223987173_o_ac1x8t.jpg',
		description: 'A Full Stack Web Application inspired by Yelp, developed in Ruby on Rails, React, etc.	 '
	},
	homeco: {
		link: 'https://homeco.herokuapp.com/#/',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1520956849/IMG_0762_gqpfuc.jpg',
		description: 'An All-in-one Home Service and Schedule management Project structured by MERN Stack',
	},
	pendo: {
		link: 'https://hyouuu.github.io/PendoWeb/#/',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525917761/%E8%8D%94%E6%9E%9D%E5%B2%9B-0_rzvy6v.png',
		description: 'Web application for Pendo Note iOS app, crispy notebook for any ideas',
	},
	petta: {
		link: 'https://luuufan.github.io/petta/',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889364/1795238_10202694170131108_475398263_o_lgt47u.jpg',
		description: 'A Data Visualization project build with JavaScript, D3.JS and Webpack.',
	},
};