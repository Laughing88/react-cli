import "./home.less";
import React from "react";

class Home extends React.Component{

    clickValue = React.createRef();
    DataBlur = React.createRef();

    state = {
        isHot: false,
    }

    render() {
        const {name, age, sex} = this.props;
        const {isHot} = this.state;
        return(
            <div>
                <h1 onClick={this.changeWeather}>今天天气很{isHot?'炎热':'凉爽'}</h1>
                <ul>
                    <li>姓名：{name}</li>
                    <li>年龄：{age}</li>
                    <li>性别：{sex}</li>
                </ul>
                    <input type="text" placeholder="点击提示数据" ref={this.clickValue}/>&nbsp;
                <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
                <input type="text" placeholder="失去焦点提示数据" onBlur={this.showDataBlur} ref={this.DataBlur}/>
            </div>
        )
    }

    changeWeather = ()=>{
        const weather = this.state.isHot;
        this.setState({
            isHot: !weather
        })
    }

    //点击弹窗显示
    showData = ()=>{
        alert(this.clickValue.current.value);
    }

    //失去焦点弹窗显示
    showDataBlur = ()=>{
        alert(this.DataBlur.current.value);
    }
}

export default Home;
