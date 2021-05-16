import React from 'react';

export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '头部'
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