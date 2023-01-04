import React, {Component} from 'react';
import PubSub from 'pubsub-js';

class List extends Component {

    componentDidMount() {
        PubSub.subscribe("atguigu",(_,data)=>{
            console.log(data);
        })
    }




    render() {
        return (
            <div>
                <div>list组件</div>
            </div>
        );
    }
}

export default List;
