import "./home.less";
import React from "react";

class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        isHot: false,
    }
    render() {
        const {isHot} = this.state;
        return(
            <div>
                <h1 onClick={this.changeWeather}>今天天气很{isHot?'炎热':'凉爽'}</h1>
            </div>
        )
    }

    changeWeather = ()=>{
        const weather = this.state.isHot;
        this.setState({
            isHot: !weather
        })
    }
}

export default Home;
