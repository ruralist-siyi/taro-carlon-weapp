import { observable } from 'mobx'
import {createApiRequest} from '../utils/request';
import Taro from '@tarojs/taro'

const userStore = observable({
  userInfo: null,

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
});

export default userStore;
