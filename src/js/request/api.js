import { get, post } from './http';

let api = '';
if(process.env.NODE_ENV !== 'production'){
    api = 'http://mall.fhzhny.com/api'; //开发环境
}else{
    if(process.env.type == 'test'){
        api = 'http://mall.fhzhny.com/api'; //测试环境
    }else{
        api = 'http://mall.fhzhny.com/api'; //生产环境
    }
}

// 轮播
export const banner = showIndex=>get(api+'/api/banner',showIndex);

// 拼团商品类型
export const control = ()=>post(api+'/api/corps/goodsTypeList');

// 商品列表
export const goodsList = data=>post(api+'/api/corps/goodsList',data);

// 商品详情接口
export const goodsInfo = data=>post(api+'/api/corps/goodsInfo',data);

// 开团
export const addteam = data=>post(api+'/api/corps/addteam',data);

// 我的团统计
export const myTeamData = data=>get(api+'/api/corps/myTeamDataList',data);

// 我的团参加记录
export const myTeamDataList = data=>get(api+'/api/corps/myTeamDataList',data);

// 获取银行卡列表
export const bankCardList = data=>get(api+'/api/bank/getBankList',data);

// 获取我的银行卡列表
export const myBankCardList = data=>get(api+'/api/bank/getBankCardList',data);

// 银行卡签约短信
export const bankCardCode = data=>post(api+'/api/bank/sendSignSms',data);

// 银行卡添加签约
export const addBankCard = data=>post(api+'/api/bank/smsSign',data);

// 添加收货地址
export const addShoppingAddress = data=>post(api+'/api/mall/addShoppingAddress',data);

// 获取收货地址列表
export const shoppingAddressList = data=>get(api+'/api/mall/shoppingAddressList',data);

// 分享名片
export const getWeCartShare = data=>post(api+'/share/getWeCartShare',data);

// 得到我的收益
export const getMyIncome = data=>get(api+'/api/mywallet/getMyIncome',data);

// 注册
export const register = data=>post(api+'/user/register',data);

// 登录
export const login = data=>post(api+'/user/login',data);

// 验证码登录
export const codeLogin = data=>post(api+'/user/vCodeLogin',data);

// 登录 || 修改登录密码的验证码
export const loginCode = data=>post(api+'/user/sendLoginSmsCode',data);

// 注册验证码
export const registerCode = data=>post(api+'/user/sendRegisterSmsCode',data);

// 修改登录密码
export const forgetPassword = data=>post(api+'/user/forgetPwd',data);

// 我的等级
export const myLevel = data=>get(api+'/api/my/getMyShareGender',data);

// 我的积分
export const myIntegral = data=>post(api+'/api/user/getMyWalletInteger',data);

// 我的余额
export const myBalance = data=>post(api+'/api/user/getMyWalletInfo',data);

// 生成订单接口
export const addOrder = data=>post(api+'/api/corps/addOrder',data);

// 订单列表
export const orderList = data=>post(api+'/api/corps/orderList',data);

// 银行卡支付
export const bankCardPayment = data=>post(api+'/api/pay/agreementRechargePay',data);

// 微信支付宝支付
export const rechargePayment = data=>post(api+'/api/mywallet/rechargePay',data);

// 余额支付
export const balancePayment =data=>post(api+'/api/pay/balanceOrderPay',data);

// 获取公众号用户信息
export const getInfoByCode = data=>get(api+'/api/user/getInfoByCode',data);

// 设置支付密码
export const setPaymentPassword = data=>post(api+'/api/user/setPayPwd',data);