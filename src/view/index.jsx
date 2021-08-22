import React from 'react';

import Loading from '../components/loading';
import { banner } from '../js/request/api';
import { shareLink } from '../js/public';
import mineImg from '../assets/img/mine.png';
import '../assets/less/index.less';

import ReactSwiper from 'reactjs-swiper';

export default class Index extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			swiper: [
				{
					image: require('../assets/img/banner01.png').default
				},
				{
					image: require('../assets/img/banner02.png').default
				},
				{
					image: require('../assets/img/banner03.png').default
				},
				{
					image: require('../assets/img/banner04.png').default
				}
			],
		};

		this.goLogin = this.goLogin.bind(this);
	};
	
	componentDidMount(){
		  
		let that = this;
			//shareLink();
			// banner();
	}
	
	banner(){
		let that = this;
		banner({
			showIndex:16
		}).then(res=>{
			console.log(res.data);
			
			that.setState({
				carousel : res.data
			})
		}).catch(error=>{
			console.log(error);
		})
	};

	goLogin(){
		let that = this;
			that.props.history.push('/login');
	};
	
	render(){
		const swiperOptions = {
		    preloadImages: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false
		  };
		return(
			<div className="main">
				<div className="login-top">
					<header className="title">
						<ul>
							<li></li>
							<li>柒星社区</li>
							<li>
								<img src={mineImg} onClick={this.goLogin}/>
							</li>
						</ul>
					</header>
				</div>
				<ReactSwiper swiperOptions={swiperOptions} showPagination items={this.state.swiper} className="swiperImg"/>
				<Loading/>
			</div>
		)
	}
}