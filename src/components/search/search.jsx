import React, {Component} from 'react';
import PubSub from 'pubsub-js';


class Search extends Component {
    userPhoto = React.createRef();

    search = async ()=>{
        PubSub.publish("atguigu",{name: 'tom',age:18});
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${this.userPhoto.current.value}`)
            const data = await response.json();
            console.log(data.items);
        }catch (error){
            console.log(error);
        }
    }


    render() {
        return (
            <div>
                <input type="text" placeholder="请输入搜索名" ref={this.userPhoto}/>
                <button onClick={this.search}>搜索</button>
            </div>
        );
    }
}

export default Search;
