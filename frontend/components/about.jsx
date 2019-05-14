import React from 'react';
import Hobby from './hobby';
import {initCanvas, initLineParticles} from '../util/particles';

class About extends React.Component{

	scroll(e, target){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 800);	
	}

	componentDidMount(){
		initLineParticles();
	}

	render(){
		return(
			<div id='about'>
				<div id="canvasbg"></div>
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
							<Hobby imgs={pet.imgs} content={pet.content}/>
							<Hobby imgs={outdoor.imgs} content={outdoor.content}/>
							<Hobby imgs={chef.imgs} content={chef.content}/>
						</div>
					</div>
				</div>
			</div>
		);	
	}
}

const pet = {
	imgs:   [
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889411/1559388_10202453124505118_1778348994_o_uw4ahs.jpg',
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889292/IMG_3261_clrsva.jpg',
				'http://res.cloudinary.com/ddwejrtgh/image/upload/v1525889379/1149704_10202694169251086_786668984_o_kwbw31.jpg',
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889364/1795238_10202694170131108_475398263_o_lgt47u.jpg',
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889438/1486068_10202453118584970_1166411670_o_cbzfzg.jpg',				
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889291/IMG_7576_zlfqhn.jpg'
			],
	content: 'Pet Lover'
};

const outdoor = {
	imgs: [
		'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889295/IMG_8643_akpuey.jpg',
		'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889294/IMG_7912_w7rfuy.jpg',
		'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889293/IMG_7732_zy54p0.jpg',
		'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889293/IMG_9390_mfxkpx.jpg',
		'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889291/IMG_7104_yaweaa.jpg',
		'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889292/FullSizeRender_dwbzlt.jpg'		
	],
	content: 'Outdoor Enthusiast'
};

const chef = {
	imgs: [
		'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671889/1932594_10202694158330813_956381266_o_ktct9w.jpg',
		'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671548/10257499_10203058700124130_4604953966735714631_o_yf4ulc.jpg',
		'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671534/1781138_10203058700044128_2477849618289538833_o_xtk2zl.jpg',
		'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671515/1559264_10202644420367395_1712400262_o_xt2tls.jpg',
		'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671415/1522874_10202453141665547_272813371_o_ytcz92.jpg',
		'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671403/1501349_10202453168466217_804954821_o_qldcae.jpg'
	],
	content: 'Chef'
};

export default About;


