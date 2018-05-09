import React from 'react';

class Outdoor extends React.Component{
	constructor(){
		super();
		this.state = {
			img: [],
			url: ''
		};
	}

	componentDidMount(){

	}

	swapPic(){

	}
	
	render(){
		return(
			<div>
				<div className='hobby-container'>
					<img src={this.state.url} />
				</div>
			</div>
		);
	}
}

export default Outdoor;