import "./home.less";
import React from "react";
import ReactDOM from "react-dom";

import List from "../components/list/list";
import Search from "../components/search/search";

class Home extends React.Component{

    clickValue = React.createRef();
    userName = React.createRef();
    password = React.createRef();
    list = React.createRef();

    state = {
        isHot: false,
        username: '',
        password: '',
        opacity: 1,
        newsArr:[],
    }

    //若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps
    // static getDerivedStateFromProps(state,props){
    //     console.log('getDerivedStateFromProps',props,state);
    //     return null;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return this.list.current.scrollHeight;
    }

    //组件挂载页面之后
    /*componentDidMount() {
        this.timer = setInterval(()=>{
            let {opacity} = this.state;
            opacity -= 0.1;
            if(opacity<=0) opacity = 1
            this.setState({
                opacity
            })
        },200)

        setInterval(()=>{
            const {newsArr} = this.state;
            const news = '新闻'+(newsArr.length+1);
            this.setState({
                newsArr: [news,...newsArr]
            })
        },1000)
    }*/

    //组件更新完成
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.list.current.scrollTop += this.list.current.scrollHeight - snapshot;
    }

    //组件将要卸载时调用9***
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const {name, age, sex} = this.props;
        const {isHot} = this.state;
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

                {/*受控组件柯里化 推荐使用*/}
                {/*<form action="" onSubmit={this.handleControlledSubmit}>*/}
                {/*    <input type="text" name="username" onChange={this.saveFromData('username')}/>*/}
                {/*    <input type="password" name="password" onChange={this.saveFromData('password')}/>*/}
                {/*    <button>登录</button>*/}
                {/*</form>*/}

                {/*受控组件非柯里化 推荐使用*/}
                <form action="" onSubmit={this.handleControlledSubmit}>
                    <input type="text" name="username" onChange={event =>this.saveFromData('username',event)}/>
                    <input type="password" name="password" onChange={event =>  this.saveFromData('password',event)}/>
                    <button>登录</button>
                </form>

                <div>
                    <h1 style={{opacity: this.state.opacity}}>学不会React怎么办？</h1>
                    <button onClick={this.death}>不活了</button>
                </div>
                <div className="list" ref={this.list}>
                    {
                        this.state.newsArr.map((item,index)=>{
                            return  <div className="news" key={index}>{item}</div>
                        })
                    }
                </div>

                <List  click = {this.onClick}/>
                <Search click = {this.handelSearch}/>

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

    //保存表单数据到状态（柯里化）
    // saveFromData = (dataType)=>{
    //     return(event)=>{
    //         this.setState({
    //             [dataType]: event.target.value,
    //         })
    //     }
    // }

    //保存表单数据到状态（非柯里化）
    saveFromData = (dataType,event)=>{
        this.setState({
            [dataType]: event.target.value,
        })
    }

    //受控组件提交事件 推荐使用
    handleControlledSubmit = (event)=>{
        //阻止页面刷新
        event.preventDefault();
        alert(`你输入的用户名是：${this.state.username},你输入的密码是：${this.state.password}`);
    }

    death = ()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    onClick = (value) => {
        console.log(value);
    }

    // 父子组件传值
    handelSearch = (value)=>{
        console.log(value);
    }
}

export default Home;
