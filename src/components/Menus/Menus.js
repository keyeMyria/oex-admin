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
    }
    // else if(e.key === '用户管理') {
    //   this.props.dispatch(push(RoutingURL.PeopleList()));
    // } else if (e.key === '西医综合') {
    //   this.props.dispatch(push(RoutingURL.ExperienceList()));
    // } else if (e.key === '执业医师') {
    //   this.props.dispatch(push(RoutingURL.ExperienceListDoctor()));
    // } else if (e.key === '执业药师') {
    //   this.props.dispatch(push(RoutingURL.ExperienceListMedicine()));
    // } else if (e.key === '配置管理') {
    //   this.props.dispatch(push('/config'));
    // } else if (e.key === '用户反馈') {
    //   this.props.dispatch(push(RoutingURL.AdviceList()));
    // }
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
              <Item
                key="币种管理"
              >
                币种管理
              </Item>
              <Item
                key="交易管理"
              >
                交易管理
              </Item>
              <SubMenu
                key="财务"
                title={<div className={styles.subTitle}>
                财务</div>}
              >
                <Item
                  key="提币审核"
                >
                  • 提币审核
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
              <Item
                key="后台用户管理"
              >
                后台用户管理
              </Item>
              {/* {Number(role) === 1 ?
                <Item
                  key="配置管理"
                >
                  配置管理
                </Item> : ''
              } */}

              {/* <Item
                key="用户反馈"
              >
                用户反馈
              </Item> */}
              {/* <SubMenu
                key="题目管理"
                title={<div className={styles.subTitle}>
                题目管理</div>}
              >
                <Item
                  key="题目列表"
                >
                  • 题目列表
                </Item>
              </SubMenu> */}
              {/* <SubMenu
                key="用户管理"
                title={<div className={styles.subTitle}>
                用户管理</div>}
              >
                <Item
                  key="用户列表"
                >
                  • 用户列表
                </Item>
              </SubMenu> */}
              {/* <SubMenu
                key="经验管理"
                title={<div className={styles.subTitle}>
                经验管理</div>}
              >
                <Item
                  key="经验列表"
                >
                  • 经验列表
                </Item>
              </SubMenu> */}
              {/* <SubMenu
                key="配置管理"
                title={<div className={styles.subTitle}>
                配置管理</div>}
              >
                <Item
                  key="配置管理"
                >
                  • 配置管理
                </Item>
              </SubMenu> */}
              {/* {Number(role) === 1 ?
                <Item
                  key="账号管理"
                >
                  账号管理
                </Item> : ''
              } */}
            </Menu>
        </View>
      </View>
    );
  }
}

export default Menus;
