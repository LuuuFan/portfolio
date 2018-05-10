import React from 'react';

class Footer extends React.Component {
	constructor(){
		super();
		this.year = new Date().getFullYear();
	}


	render(){
		return(
			<div className='footer'>
				<div>
					<a href='https://www.linkedin.com/in/lu-fan-a4a94812/'  target='_blank'>
						<i className="fab fa-linkedin"></i>
					</a>
					<a href='https://github.com/LuuuFan'  target='_blank'>
						<i className="fab fa-github-square"></i>
					</a>
					<a href='https://www.facebook.com/angelia.fan.3'  target='_blank'>
						<i className="fab fa-facebook-square"></i>
					</a>
					<a href='https://www.instagram.com/sssbb19/' target='_blank'>
						<i className="fab fa-instagram"></i>
					</a>
					<a href='https://weibo.com/sssbb19'  target='_blank'>
						<i className="fab fa-weibo"></i>
					</a>
				</div>
				<p>Copyright © {this.year} Lu Fan</p>
			</div>
		);
	}
}

export default Footer;