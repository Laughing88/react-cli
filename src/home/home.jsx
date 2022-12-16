import "./home.less";
import React from "react";

class Home extends React.Component{

    clickValue = React.createRef();
    userName = React.createRef();
    password = React.createRef();

    state = {
        isHot: false,
        username: '',
        password: '',
    }

    render() {
        const {name, age, sex} = this.props;
        const {isHot  } = this.state;
        return(
            <div>
                <h1 onClick={this.changeWeather}>今天天气很{isHot?'炎热':'凉爽'}</h1>

                {/*props实现*/}
                <ul>
                    <li>姓名：{name}</li>
                    <li>年龄：{age}</li>
                    <li>性别：{sex}</li>
                </ul>

                {/*refs推荐一种方式实现*/}
                <input type="text" placeholder="点击提示数据" ref={this.clickValue}/>&nbsp;
                <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
                <input type="text" placeholder="失去焦点提示数据" onBlur={this.showDataBlur}/>

                {/*非受控组件*/}
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" name="username" ref={this.userName}/>
                    <input type="password" name="password" ref={this.password}/>
                    <button>登录</button>
                </form>

                {/*受控组件 推荐使用*/}
                <form action="" onSubmit={this.handleControlledSubmit}>
                    <input type="text" name="username" onChange={this.saveFromData('username')}/>
                    <input type="password" name="password" onChange={this.saveFromData('password')}/>
                    <button>登录</button>
                </form>
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
    showDataBlur = (event)=>{
        alert(event.target.value);
    }

    //非受控组件提交事件
    handleSubmit = (event)=>{
        //阻止页面刷新
        event.preventDefault();
        alert(`你输入的用户名是：${this.userName.current.value},你输入的密码是：${this.password.current.value}`)
    }

    //保存表单数据到状态
    saveFromData = (dataType)=>{
        return (event)=>{
            this.setState({
                [dataType]: event.target.value,
            })
        }
    }

    //受控组件提交事件 推荐使用
    handleControlledSubmit = (event)=>{
        //阻止页面刷新
        event.preventDefault();
        alert(`你输入的用户名是：${this.state.username},你输入的密码是：${this.state.password}`)
    }
}

export default Home;
