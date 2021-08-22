import React from 'react';
import '../assets/less/public.less';

export default class Loading extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	
	componentDidMount(){
		console.log('组件挂载完毕');
	}
	
	render(){
		return(
			<div>
				<div className="loading"></div>
				<i className="icon-loading iconfont"></i>
			</div>
		)
	}
}