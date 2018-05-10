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
		const {imgs, content} = this.props;
		return(
			<div className='hobby-container'>
				<img className='' src={imgs[this.state.idx]} />
				<div className='hobby-content'>
					<div>
						{content}
					</div>
				</div>
			</div>
		);
	}
}



export default Hobby;