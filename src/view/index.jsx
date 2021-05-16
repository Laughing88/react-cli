import React from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

import { banner } from '../js/request/api';
import { shareLink } from '../js/public.js';
import mineImg from '../assets/img/mine.png';
import '../assets/less/index.less';

export default class Index extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			swiper: {},
			carousel: []
		};

		this.goLogin = this.goLogin.bind(this);
	};
	
	componentDidMount(){
		setTimeout(()=>{
			new Swiper ('.swiper-container', {
					direction: 'horizontal', // 垂直切换选项
					// 如果需要分页器
					//pagination: {
					//el: '.swiper-pagination',
					//clickable: true //允许分页点击跳转
				//},
				//自动轮播
				autoplay: {
					disableOnInteraction: false,
					delay: 1000,
				},
			})
		},1000)
		  
		let that = this;
			shareLink();
			that.banner();
	};

	banner(){
		let that = this;
		banner({
			showIndex:16
		}).then(res=>{
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
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{
							this.state.carousel.map((item,index)=>{
								return <div className="swiper-slide" key={index}>
											<img src={item.icon} className="swiperImg"/>
									   </div>
							})
						}
						{/* <div className="swiper-pagination"></div> */}
					</div>
				</div>
			</div>
		)
	}
}