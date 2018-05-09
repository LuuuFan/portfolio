import React from 'react';

class Pet extends React.Component{
	constructor(){
		super();
		this.state = {
			img: [
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889411/1559388_10202453124505118_1778348994_o_uw4ahs.jpg',
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889292/IMG_3261_clrsva.jpg',
				'http://res.cloudinary.com/ddwejrtgh/image/upload/v1525889379/1149704_10202694169251086_786668984_o_kwbw31.jpg',
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889364/1795238_10202694170131108_475398263_o_lgt47u.jpg',
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889438/1486068_10202453118584970_1166411670_o_cbzfzg.jpg',				
				'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525889291/IMG_7576_zlfqhn.jpg'
			],
			idx: 0
		};
	}

	componentDidMount(){
		this.swapPic();
	}

	swapPic(){
		const length = this.state.img.length;
		setInterval(()=>{
			if (this.state.idx < length - 1) {
				this.setState({idx: this.state.idx + 1});
			} else {
				this.setState({idx: 0});
			}

		}, 2000);
	}

	render(){
		return(
			<div className='hobby-container'>
				<img src={this.state.img[this.state.url]} />
			</div>
		);
	}
}

export default Pet;