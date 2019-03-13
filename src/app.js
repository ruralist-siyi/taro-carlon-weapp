import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/home'
import '@tarojs/async-await'
import storeMap from './store'
import 'taro-ui/dist/style/index.scss'
import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = storeMap;

class App extends Component {

  config = {
    pages: [
      'pages/home/index',
      'pages/login/index',
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#1E72DA',
      navigationBarTitleText: '车贷助手',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: "#666",
      selectedColor: "#1E72DA",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [
        {
          pagePath: "pages/home/index",
          iconPath: "./assets/images/bar-home.png",
          selectedIconPath: "./assets/images/bar-home-active.png",
          text: "首页"
        },
        {
          pagePath: "pages/index/index",
          iconPath: "./assets/images/bar-order.png",
          selectedIconPath: "./assets/images/bar-order-active.png",
          text: "订单"
        },
        {
          pagePath: "pages/home/index",
          iconPath: "./assets/images/bar-message.png",
          selectedIconPath: "./assets/images/bar-message-active.png",
          text: "消息"
        },
        {
          pagePath: "pages/home/index",
          iconPath: "./assets/images/bar-mine.png",
          selectedIconPath: "./assets/images/bar-mine-active.png",
          text: "我的"
        }
    ]
    }
  };

  componentDidMount () {
  }

  componentDidShow () {
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
