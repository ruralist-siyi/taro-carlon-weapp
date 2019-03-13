import Taro, { Component } from '@tarojs/taro';
import { AtForm, AtInput, AtButton, AtMessage } from 'taro-ui';
import { View, Button, Text, Form, Radio, Label, Image } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import styles from './index.module.less';
import logo from './../../assets/images/logo-login.png';


@inject('userStore')
@observer
class Login extends Component {
  constructor () {
    super(...arguments);
    this.state = {
      loginAccount: null,
      password: null
    }
  }

  config = {
    navigationBarTitleText: '登录'
  };

  login = () => {
    const {loginAccount, password} = this.state;
    console.log(loginAccount, password);
    this.props.userStore.login({
      body: {
        loginAccount,
        password
      }
    });
  };

  handleAccountChange = (value) => {
    console.log(value);
    this.setState({
      loginAccount: value
    })
  };

  handlePasswordChange = (value) => {
    console.log(value);
    this.setState({
      password: value
    })
  };

  render () {
    return (
      <View className={styles['login-wrapper']}>
        <View>
          <Image
            className={styles['login-logo']}
            src={logo}
          />
          <AtForm
            onSubmit={this.login}
            onReset={this.onReset}
            className={styles['login-form']}
          >
            <AtInput
              clear
              name='loginAccount'
              title='账号'
              type='text'
              placeholder='请输入账号'
              adjustPosition={true}
              onChange={this.handleAccountChange}
            />
            <AtInput
              clear
              name='password'
              title='密码'
              type='password'
              placeholder='请输入密码'
              adjustPosition={true}
              onChange={this.handlePasswordChange}
            />
            <AtButton className={styles['submit-button']} type='primary' formType='submit'>提交</AtButton>
          </AtForm>
        </View>
        <AtMessage />
      </View>
    )
  }
}

export default Login;
