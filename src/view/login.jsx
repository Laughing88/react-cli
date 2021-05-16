import React from 'react';

export default class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '登录'
		}
	}
	
	componentDidMount(){
		console.log('组件挂载完毕');
	}
	
	render(){
		return(
			<div>{this.state.name}</div>
		)
	}
}