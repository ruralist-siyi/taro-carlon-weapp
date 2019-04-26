import Taro, {Component} from '@tarojs/taro';
import {View, Button, Text} from '@tarojs/components';
import {observer, inject} from '@tarojs/mobx';
import {AtGrid, AtButton, AtMessage} from "taro-ui";
import styles from './index.module.less';
import iconApplication from './../../assets/images/icon-application.png';
import iconHomeVisit from './../../assets/images/icon-homeVisit.png';
import iconFinancing from './../../assets/images/icon-finacing.png';
import iconFaceSign from './../../assets/images/icon-faceSign.png';
import iconCreditApply from './../../assets/images/icon-creditApply.png';
import iconApplicationAddtion from './../../assets/images/icon-applicationAddtion.png';
import iconApplyDeal from './../../assets/images/icon-applyDeal.png';
import iconCollection from './../../assets/images/icon-collection.png';
import iconElectrionSign from './../../assets/images/icon-electrionSign.png';
import iconGpsInstall from './../../assets/images/icon-gpsInstall.png';
import iconRecordManage from './../../assets/images/icon-recordManage.png';
import iconReportCenter from './../../assets/images/icon-reportCenter.png';
import iconSmallTool from '../../assets/images/icon-smallTool.png';


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '车贷助手'
  };
  // 坑：小程序端的话，componentDidMount是不会在每一次进入都执行的。
  componentDidShow() {
    const token = Taro.getStorageSync('token');
    if(!token) {
      Taro.navigateTo({
        url: '/pages/login/index'
      });
    }
  }

  render() {
    const {counterStore: {counter}} = this.props;
    return (
      <View>
        <AtGrid className={styles['home-top-grid']} columnNum={4} hasBorder={false} data={
          [
            {
              image: iconApplication,
              value: '进件录入'
            },
            {
              image: iconHomeVisit,
              value: '家访登记'
            },
            {
              image: iconFinancing,
              value: '融资确认'
            },
            {
              image: iconFaceSign,
              value: '面签合同'
            },
          ]
        }/>
        <AtGrid hasBorder={false} data={
          [
            {
              image: iconCreditApply,
              value: '征信申请'
            },
            {
              image: iconApplicationAddtion,
              value: '进件补录'
            },
            {
              image: iconApplyDeal,
              value: '审批处理'
            },
            {
              image: iconCollection,
              value: '催收登记'
            },
            {
              image: iconElectrionSign,
              value: '电子签名'
            },
            {
              image: iconGpsInstall,
              value: 'GPS安装'
            },
            {
              image: iconRecordManage,
              value: '档案管理'
            },
            {
              image: iconReportCenter,
              value: '报表中心'
            },
            {
              image: iconSmallTool,
              value: '小工具'
            },
          ]
        } />
        <AtButton className={styles['customer-btn']} type='primary'>客户管理</AtButton>
        <AtMessage />
      </View>
    )
  }
}

export default Index;
