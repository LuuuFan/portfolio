import React from 'react';

class Skill extends React.Component{
	constructor(){
		super();
		this.state = {
			mouseOver: ""
		};
	}

	revealWordmark(target){
		this.setState({mouseOver: target});
	}

	hiddenWordmark(){
		this.setState({mouseOver: ""});
	}

	render(){
		return(
			<div id='skill'>
				<div className='skill-title'><h1>SKILLS</h1></div>
				<div className='group skills'>
					<i className="devicon-ruby-plain colored"  onMouseOver={()=>this.revealWordmark('ruby')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://www.ruby-lang.org/en/' target='_blank'>
							<div className={`icon-wordmark ${this.state.mouseOver==='ruby' ? "" : "hidden"}`}>Ruby</div>
						</a>
					</i>
					<i className="devicon-rails-plain colored" onMouseOver={()=>this.revealWordmark('rails')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='http://rubyonrails.org/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='rails' ? "" : "hidden"}`}>Ruby on Rails</div>
						</a>
					</i>
					<i className="devicon-python-plain colored" onMouseOver={()=>this.revealWordmark('python')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='http://www.python.org/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='python' ? "" : "hidden"}`}>Python</div>
						</a>
					</i>
					<i className="devicon-react-original colored" onMouseOver={()=>this.revealWordmark('react')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://reactjs.org/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='react' ? "" : "hidden"}`}>React</div>
						</a>
					</i>
					<i className="devicon-javascript-plain colored" onMouseOver={()=>this.revealWordmark('js')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://www.javascript.com/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='js' ? "" : "hidden"}`}>JavaScript</div>
						</a>
					</i>
					<i className="devicon-nodejs-plain colored" onMouseOver={()=>this.revealWordmark('node')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://nodejs.org/en/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='node' ? "" : "hidden"}`}>Node.js</div>
						</a>
					</i>
					<i className="devicon-express-original colored" onMouseOver={()=>this.revealWordmark('express')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='http://expressjs.com/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='express' ? "" : "hidden"}`}>Express.js</div>
						</a>
					</i>
					<i className="devicon-jquery-plain colored" onMouseOver={()=>this.revealWordmark('jquery')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://jquery.com/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='jquery' ? "" : "hidden"}`}>jQuery</div>
						</a>
					</i>
					<i className="devicon-d3js-plain colored" onMouseOver={()=>this.revealWordmark('d3')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://d3js.org/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='d3' ? "" : "hidden"}`}>D3.js</div>
						</a>
					</i>
					<i className="devicon-postgresql-plain colored" onMouseOver={()=>this.revealWordmark('postgresql')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://www.postgresql.org/' target='_blank'>
						</a>
						<div className={`icon-wordmark  ${this.state.mouseOver==='postgresql' ? "" : "hidden"}`}>PostgreSQL</div>
					</i>
					<i className="devicon-mongodb-plain colored" onMouseOver={()=>this.revealWordmark('mongodb')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://www.mongodb.com/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='mongodb' ? "" : "hidden"}`}>MongoDB</div>
						</a>
					</i>
					<i className="devicon-html5-plain colored" onMouseOver={()=>this.revealWordmark('html5')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://www.w3schools.com/html/html5_intro.asp' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='html5' ? "" : "hidden"}`}>HTML5</div>
						</a>
					</i>
					<i className="devicon-css3-plain colored" onMouseOver={()=>this.revealWordmark('css3')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://www.w3schools.com/css/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='css3' ? "" : "hidden"}`}>CSS3</div>
						</a>
					</i>
					<i className="devicon-webpack-plain colored" onMouseOver={()=>this.revealWordmark('webpack')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://webpack.js.org/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='webpack' ? "" : "hidden"}`}>Webpack</div>
						</a>
					</i>
					<i className="devicon-github-plain colored" onMouseOver={()=>this.revealWordmark('github')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://github.com/LuuuFan' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='github' ? "" : "hidden"}`}>GitHub</div>
						</a>
					</i>
					<i className="devicon-heroku-plain colored" onMouseOver={()=>this.revealWordmark('heroku')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://www.heroku.com/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='heroku' ? "" : "hidden"}`}>Heroku</div>
						</a>
					</i>
					<i className="devicon-ubuntu-plain colored"  onMouseOver={()=>this.revealWordmark('ubuntu')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://www.ubuntu.com/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='ubuntu' ? "" : "hidden"}`}>Ubuntu</div>
						</a>
					</i>
					<i className="devicon-vuejs-plain colored"  onMouseOver={()=>this.revealWordmark('vue')} onMouseOut={()=>this.hiddenWordmark()}>
						<a href='https://vuejs.org/' target='_blank'>
							<div className={`icon-wordmark  ${this.state.mouseOver==='vue' ? "" : "hidden"}`}>Vue.js</div>
						</a>
					</i>
				</div>
			</div>
		);
	}
}

export default Skill;