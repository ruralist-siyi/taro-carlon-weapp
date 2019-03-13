#### taro-carlon-weapp：taro + mobx框架实践，车贷系统。
###### 1. 效果截图
1. 登录页面
![image](https://github.com/ruralist-siyi/taro-carlon-weapp/blob/master/src/assets/images/WechatIMG3.jpeg)
2. 首页
![image](https://github.com/ruralist-siyi/taro-carlon-weapp/blob/master/src/assets/images/WechatIMG2.jpeg)
###### 2. 部分代码截图
1. 请求
```
// utils request.js
export function createApiRequest(url, data = {}, method = 'POST', checkToken = true) {
   return Taro.request({
      url: baseUrl + url,
      method: method,
      data: {
        tenantId: '0001',
        terminalType: '1',
        serialId: getRandomStr(),
        ...data
      },
      header: {
        'Content-Type': 'application/json;charset=UTF-8',
      }
    })
      .then(res => {
        const {data} = res;
        if (data.code !== '000000') {
          Taro.atMessage({
            'message': data.message || '请求错误',
            'type': 'error',
          })
        } else {
          return data.data;
        }
      });
}
// store user.js
async login(payload) {
    const {body, callback} = payload;
    const data = await createApiRequest('/auth/user/login',body);
    if(data) {
      this.userInfo = data;
      Taro.setStorageSync('token', data.token);
      Taro.switchTab({
        url: '/pages/home/index'
      });
      callback && callback(data);
    }
  }
```

###### 3. 总结
1. taro中的 componentDidMount 在小程序端只会在第一次加载过这个页面时触发，重复进入页面时并不会触发，小程序端应该使用componentDidShow。
2. 很多操作不建议也不可以在app.js中操作，比如说路由跳转navigateTo等。
3. 遇到了体验很差的坑：my issue: https://github.com/NervJS/taro-ui/issues/465
  
