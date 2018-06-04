import React, { PropTypes } from 'react';
import shalloCompare from 'react-addons-shallow-compare';
import { View } from 'isomorphic';
import { Menu, Icon } from 'antd';
import MenusHeader from './MenusHeader';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import styles from '../../assets/stylesheets/Menus/Menus.css';
import userInfoStorage from '../../core/UserInfoStorage';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

class Menus extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  state = {
    current: '用户管理',
  };
  _handleClick(e) {
    this.setState({
      current: e.key,
    });
    if (e.key === '用户管理') {
      this.props.dispatch(push(RoutingURL.UserList()));
    } else if(e.key === '后台用户管理') {
      this.props.dispatch(push(RoutingURL.AdminList()));
    } else if(e.key === '权限管理') {
      this.props.dispatch(push(RoutingURL.AuthList()));
    } else if (e.key === '币种信息') {
      this.props.dispatch(push(RoutingURL.CurrencyInfoList()));
    } else if (e.key === '币种配置') {
      this.props.dispatch(push(RoutingURL.CurrencyConfigList()));
    } else if (e.key === '币种资料') {
      this.props.dispatch(push(RoutingURL.MSCurrencyList()));
    } else if (e.key === '交易区列表') {
      this.props.dispatch(push(RoutingURL.AreaList()));
    } else if (e.key === '交易对列表') {
      this.props.dispatch(push(RoutingURL.PairList()));
    } else if (e.key === '地址池列表') {
      this.props.dispatch(push(RoutingURL.AddressList()));
    } else if (e.key === '币种流水') {
      this.props.dispatch(push(RoutingURL.CoinFlow()));
    } else if (e.key === '用户流水') {
      this.props.dispatch(push(RoutingURL.UserFlow()));
    } else if (e.key === '用户资产') {
      this.props.dispatch(push(RoutingURL.UserAssets()));
    } else if (e.key === '持币分红') {
      this.props.dispatch(push(RoutingURL.BonusList()));
    } else if (e.key === '客服') {
      this.props.dispatch(push(RoutingURL.WorkOrders()));
    } else if (e.key === '公告') {
      this.props.dispatch(push(RoutingURL.NoticeList()));
    } else if (e.key === '公告类型') {
      this.props.dispatch(push(RoutingURL.NoticeTypeList()));
    } else if (e.key === '发放奖励') {
      this.props.dispatch(push(RoutingURL.RewardList()));
    } else if (e.key === '统计') {
      this.props.dispatch(push(RoutingURL.Statistics()));
    }
  }
  render() {
    // const role = this.props.role || userInfoStorage.getItem('role');
    return (
      <View>
        <MenusHeader />
          <View style={{ height: '85vh' }}>
            <Menu
              theme="dark"
              onClick={(e) => this._handleClick(e)}
              mode="inline"
            >
              <Item
                key="用户管理"
              >
                用户管理
              </Item>
              <SubMenu
                key="币种管理"
                title={<div className={styles.subTitle}>
                币种管理</div>}
              >
                <Item
                  key="币种信息"
                >
                  • 币种信息
                </Item>
                <Item
                  key="币种配置"
                >
                  • 币种配置
                </Item>
                <Item
                  key="币种资料"
                >
                  • 币种资料
                </Item>
                <Item
                  key="地址池列表"
                >
                  • 地址池列表
                </Item>
              </SubMenu>
              <SubMenu
                key="交易管理"
                title={<div className={styles.subTitle}>
                交易管理</div>}
              >
                <Item
                  key="交易区列表"
                >
                  • 交易区列表
                </Item>
                <Item
                  key="交易对列表"
                >
                  • 交易对列表
                </Item>
              </SubMenu>
              <SubMenu
                key="财务"
                title={<div className={styles.subTitle}>
                财务</div>}
              >
                <Item
                  key="币种流水"
                >
                  • 币种流水
                </Item>
                <Item
                  key="用户流水"
                >
                  • 用户流水
                </Item>
                <Item
                  key="用户资产"
                >
                  • 用户资产
                </Item>
                <Item
                  key="持币分红"
                >
                  • 持币分红
                </Item>
              </SubMenu>
              <Item
                key="客服"
              >
                客服
              </Item>
              <SubMenu
                key="运营"
                title={<div className={styles.subTitle}>
                运营</div>}
              >
                <Item
                  key="公告类型"
                >
                  • 公告类型
                </Item>
                <Item
                  key="公告"
                >
                  • 公告
                </Item>
                <Item
                  key="发放奖励"
                >
                  • 发放奖励
                </Item>
                <Item
                  key="统计"
                >
                  • 统计
                </Item>
              </SubMenu>
              <SubMenu
                key="账号管理"
                title={<div className={styles.subTitle}>
                账号管理</div>}
              >
                <Item
                  key="后台用户管理"
                >
                  • 后台用户管理
                </Item>
                <Item
                  key="权限管理"
                >
                  • 权限管理
                </Item>
              </SubMenu>
            </Menu>
        </View>
      </View>
    );
  }
}

export default Menus;
