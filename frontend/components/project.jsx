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
					<div className='project-col'>
						<div className='single-project'>
							<div className='project-screenshoot'  onMouseOver={()=>this.revealCover('edwrd')} onMouseOut={()=>this.hideCover()}>
								<a href='http://edwrd.co/' target='_blank'>
									<img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1536897624/main_background_3_w1o3sp.jpg' />
									<div className='project-cover black'>
										<h2>Edwrd</h2>
									</div>
									<div className={this.state.hidden==='edwrd' ? "link" : 'hidden'}>
										<div><i className="fas fa-link"></i></div>
										<p></p>
									</div>
								</a>
							</div>
						</div>
						<div className='single-project'>
							<div className='project-screenshoot'  onMouseOver={()=>this.revealCover('celp')} onMouseOut={()=>this.hideCover()}>
								<a href='https://celp.herokuapp.com/#/' target='_blank'>
									<img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671485/1500759_10202453164706123_223987173_o_ac1x8t.jpg' />
									<div className='project-cover black'>
										<h2>Celp</h2>
									</div>
									<div className={this.state.hidden==='celp' ? "link" : 'hidden'}>
										<div><i className="fas fa-link"></i></div>
										<p>A Full Stack Web Application inspired by Yelp, developed in Ruby on Rails, React, etc.	 </p>
									</div>
								</a>
							</div>
						</div>
						<div className='single-project'>
							<div className='project-screenshoot' onMouseOver={()=>this.revealCover('petta')} onMouseOut={()=>this.hideCover()}>
								<a href='https://luuufan.github.io/petta/' target='_blank'>
									<img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889364/1795238_10202694170131108_475398263_o_lgt47u.jpg' />
									<div className='project-cover white'>
										<h2>Petta</h2>
									</div>
									<div className={this.state.hidden==='petta' ? "link" : 'hidden'}>
										<div><i className="fas fa-link"></i></div>
										<p>A Data Visualization project build with JavaScript, D3.JS and Webpack.</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className='project-col'>
						<div className='single-project'>
							<div className='project-screenshoot'  onMouseOver={()=>this.revealCover('snapedit')} onMouseOut={()=>this.hideCover()}>
								<a href='http://ec2-54-187-78-4.us-west-2.compute.amazonaws.com:8999/#/' target='_blank'>
									<img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1538205694/snapeditlogo1_preqqt.png' />
									<div className='project-cover black'>
										<h2>SnapEdit</h2>
									</div>
									<div className={this.state.hidden==='snapedit' ? "link" : 'hidden'}>
										<div><i className="fas fa-link"></i></div>
										<p></p>
									</div>
								</a>
							</div>
						</div>
						<div className='single-project'>
							<div className='project-screenshoot'  onMouseOver={()=>this.revealCover('pendo')} onMouseOut={()=>this.hideCover()}>
								<a href='https://hyouuu.github.io/PendoWeb/#/' target='_blank'>
									<img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1525917761/%E8%8D%94%E6%9E%9D%E5%B2%9B-0_rzvy6v.png' />
									<div className='project-cover white'>
										<h2>Pendo</h2>
									</div>
									<div className={this.state.hidden==='pendo' ? "link" : 'hidden'}>
										<div><i className="fas fa-link"></i></div>
										<p>Web application for Pendo Note iOS app, crispy notebook for any ideas</p>
									</div>
								</a>
							</div>
						</div>
						<div className='single-project'>
							<div className='project-screenshoot'  onMouseOver={()=>this.revealCover('homeco')} onMouseOut={()=>this.hideCover()}>
								<a href='https://homeco.herokuapp.com/#/' target='_blank'>
									<img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1520956849/IMG_0762_gqpfuc.jpg' />
									<div className='project-cover black'>
										<h2>Homeco</h2>
									</div>
									<div className={this.state.hidden==='homeco' ? "link" : 'hidden'}>
										<div><i className="fas fa-link"></i></div>
										<p>An All-in-one Home Service and Schedule management Project structured by MERN Stack</p>
									</div>
								</a>

							</div>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}

export default Project;