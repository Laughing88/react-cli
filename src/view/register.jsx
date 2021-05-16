import React from 'react';

export default class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '注册'
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