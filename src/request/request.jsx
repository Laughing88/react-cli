import React, {Component} from 'react';
import axios from "axios";

class Request extends Component {

    getStudentData = ()=>{
        axios.get('').then((res,err)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
            </div>
        );
    }
}

export default Request;
