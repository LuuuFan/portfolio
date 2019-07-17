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
						<div className='single-project' key={idx}>
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
	Playcan: {
		link: 'http://playcan.video',
		img: 'https://res.cloudinary.com/dq132990i/image/upload/v1556741188/playcan/i_logo_ff0mzd.png',
		description: 'Platform for the Video Module software',
	},
	joinLA: {
		link: 'http://events.joinla.net',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1548875868/joinLA/logo_1024_transparent.png',
		description: 'joinLA Club events website for outdoor enthusiast in California',
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
	commap: {
		link: 'http://ec2-3-14-136-230.us-east-2.compute.amazonaws.com/#/',
		img: 'https://res.cloudinary.com/dq132990i/image/upload/v1563404403/commap/myswcdvqklvcasrvmlvc.jpg',
		description: "",
	},
	lumitless: {
		link: 'http://ec2-18-144-18-33.us-west-1.compute.amazonaws.com:8999/#/',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1539234248/lumitlessblue_lmpcqk.png',
		description: 'A canvas based collaboration platform, integrated fabric.js, Tabulator, etc.',
	},
	doodly: {
		link: 'http://ec2-18-144-18-33.us-west-1.compute.amazonaws.com:8888/#/',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1538206104/doodlyname_f7dcav.png',
		description: 'Kids canvas',
	},
	styleboard: {
		link: 'http://ec2-18-144-18-33.us-west-1.compute.amazonaws.com:5555/#/',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1540960533/Screenshot_from_2018-10-30_21-35-10_tejvpl.png',
		description: 'Fasion collaction platform.',
	},
	edwrd: {
		link: 'https://luuufan.github.io/edwrd-homepage/',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1536897624/main_background_3_w1o3sp.jpg',
		description: '',
	},
	petta: {
		link: 'https://luuufan.github.io/petta/',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889364/1795238_10202694170131108_475398263_o_lgt47u.jpg',
		description: 'A Data Visualization project build with JavaScript, D3.JS and Webpack.',
	},
	'Believe Her': {
		link: 'http://ec2-34-229-111-210.compute-1.amazonaws.com/#/',
		img: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1546976013/believe_her_zrzeb5.jpg',
		description: '',
	},


};