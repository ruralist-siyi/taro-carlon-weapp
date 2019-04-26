import Taro from '@tarojs/taro';
import {getRandomStr} from './index';

const baseUrl = 'http://116.62.152.199:8035';

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
