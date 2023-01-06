import React, {Component} from 'react';
import PubSub from 'pubsub-js';

class List extends Component {
    state = {
        obj:{
            name: '张三',
            age: 20,
            sex: '男'
        }
    }
    componentDidMount() {
        PubSub.subscribe("atguigu",(_,data)=>{
            console.log(data);
        })
    }

    handleClick= ()=>{
        this.props.click(this.state.obj);
    }


    render() {
        return (
            <div>
                <div onClick={this.handleClick()}>list组件</div>
            </div>
        );
    }
}

export default List;
