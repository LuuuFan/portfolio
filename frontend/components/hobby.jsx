import React from 'react';

class Hobby extends React.Component{
	constructor(){
		super();
		this.state = {
			idx: 0
		};
	}

	componentDidMount(){
		this.swapPic();
	}

	swapPic(){
		const length = this.props.imgs.length;
		setInterval(()=>{
			if (this.state.idx < length - 1) {
				this.setState({idx: this.state.idx + 1});
			} else {
				this.setState({idx: 0});
			}

		}, 10000);
	}

	render(){
		const {imgs} = this.props;
		return(
			<div className='hobby-container'>
				<img className='w3-animate-fading' src={imgs[this.state.idx]} />
			</div>
		);
	}
}



export default Hobby;