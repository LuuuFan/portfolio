import React from 'react';
import Hobby from './hobby';

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
						<div className='about-content-second-list'>
							<Hobby imgs={pet} />
							<Hobby imgs={outdoor} />
							<Hobby imgs={chef} />
						</div>
					</div>
				</div>
			</div>
		);	
	}
}

const pet = [
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889411/1559388_10202453124505118_1778348994_o_uw4ahs.jpg',
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889292/IMG_3261_clrsva.jpg',
				'http://res.cloudinary.com/ddwejrtgh/image/upload/v1525889379/1149704_10202694169251086_786668984_o_kwbw31.jpg',
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889364/1795238_10202694170131108_475398263_o_lgt47u.jpg',
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889438/1486068_10202453118584970_1166411670_o_cbzfzg.jpg',				
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889291/IMG_7576_zlfqhn.jpg'
			];

const outdoor = [];
const chef = [];

export default About;


// <img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1525644432/249358_4588511106521_218840310_n_hlkybj.jpg' />