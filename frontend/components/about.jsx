import React from 'react';
import Pet from './pet';
import Outdoor from './outdoor';

class About extends React.Component{

	scroll(e, target){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 800);	
	}

	render(){
		return(
			<div id='about'>
				<div className='about-content'>
					<h1>ABOUT ME</h1>
					<div className='about-content-main'>
						<p>Hi there, this is <strong>Lu Fan</strong> - a <strong>Software Engineer</strong> based in the bay area.</p>
						<hr/>
						<p>For <strong>10+</strong> years, I worked in the <strong>Quality Assurance</strong> field, preventing and mending mistakes for the products. Not until recently, did I realize that creation is the true core for human flourishing, I believe it stands to reason that everyone should have a change to participate in it. Then I jump on my second train, coding.</p>
						<hr/>
						<p>I'd call myself experienced. <strong>Javascript</strong>, <strong>Ruby on Rails</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>React</strong>, <strong>Redux</strong>, you name it. See below for some of my recent <a onClick={(e)=>this.scroll(e, '#project')}>projects</a>.</p>
					</div>

					<div className='about-content-second'>
						<h2>I'm also a ...</h2>
						<div>
							<Outdoor/>
							<Pet/>
						</div>
					</div>
				</div>
			</div>
		)
;	}
}

export default About;


// <img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1525644432/249358_4588511106521_218840310_n_hlkybj.jpg' />