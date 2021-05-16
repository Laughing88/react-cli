/*
*   公共方法
*/ 

import axios from 'axios';
import Qs from 'qs';
import wx from 'jweixin-npm';

let api = 'http://mall.fhzhny.com/api';

// 分享
function shareLink(){
    axios.post(api+'/api/sys/sendUrlWeChat',Qs.stringify({
        url: location.href
    }))
    .then(function (res) {
        if(res.status == 200){

            let data = res.data.data;

            wx.config({
                debug : false,
                appId : data.appId,
                timestamp : data.timestamp,
                nonceStr : data.nonceStr,
                signature : data.signature,
                jsApiList : ['updateAppMessageShareData','updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage']
            });

            let url = 'http://mall.fhzhny.com/move-web/index.html';

            let shareData = {
                    title: '柒星社区', 
                    desc: '柒星社区  免费扫码注册，送100拼购金。',
                    link: url, 
                    imgUrl: 'http://8.135.113.46/resource/upload/img/adv/1619418620323.jpg', 
                    success: function (res) {
                        console.log(res);
                    },
                    cancel:function(error){
                        console.log(error);
                    }
            }

            wx.updateAppMessageShareData(shareData);
            wx.updateTimelineShareData(shareData);
            
            wx.ready(()=>{
                wx.onMenuShareTimeline(shareData);
                wx.onMenuShareAppMessage(shareData);
            })

            wx.error((res)=>{
                console.log(res);
            });
        }
    })
    .catch(function (error) {
        console.log(error);
    });    
};


// 金额格式化.00  
function getFloatStr(num){
    num += '';
    num = num.replace(/[^0-9|\.]/g, ''); //清除字符串中的非数字非.字符
    if (/^0+/) //清除字符串开头的0
        num = num.replace(/^0+/, '');
    if (!/\./.test(num)) //为整数字符串在末尾添加.00
        num += '.00';
    if (/^\./.test(num)) //字符以.开头时,在开头添加0
        num = '0' + num;
    num += '00';        //在字符串末尾补零
    num = num.match(/\d+\.\d{2}/)[0];
    return num;
};


// 时间戳转换时间
function getYMDHMS (timestamp) {
    let time = new Date(timestamp);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    let hours = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    if (month < 10) { month = '0' + month }
    if (date < 10) { date = '0' + date }
    if (hours < 10) { hours = '0' + hours }
    if (minute < 10) { minute = '0' + minute }
    if (second < 10) { second = '0' + second }
    return year + '-' + month + '-' + date + ' ' + hours + ':' + minute + ':' + second
};

// 截取url中的code方法
function getUrlCode() {
    let url = location.search;
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1)
        let strs = str.split("&")
        for(let i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1])
        }
    }
    return theRequest
};



export {
    shareLink, 
    getFloatStr,
    getYMDHMS,
}