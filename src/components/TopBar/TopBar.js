/**
 * Created by leiyouwho on 11/4/2016.
 */

import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { View } from 'isomorphic';
import { Icon, Menu, Dropdown } from 'antd';
import styles from '../../assets/stylesheets/TopBar/TopBar.css';
import styleJS from '../../assets/stylesheets/TopBar/TopBar';
import { push } from 'react-router-redux';
import userInfoStorage from '../../core/UserInfoStorage';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import * as LoginAction from '../../actions/LoginAction';

class TopBar extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    // userName: PropTypes.string.isRequired,
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  _logoutAction = () => {
    this.props.dispatch(LoginAction.getLOGOUT());
  }
  render() {
    const _handleClick = ({ key }) => {
      if (key === '1') {
        this._logoutAction();
      }
    };
    const menu = (
      <Menu onClick={({ key }) => _handleClick({ key })}>
        <Menu.Item key="1">退出登录</Menu.Item>
      </Menu>
    );
    return (
      <View className={styles.TopBarContainer}>
        <Dropdown overlay={menu}>
          <div className={styles.user}>
            <Icon type="user" className={styles.icon} />
            {/* <View className={styles.userName}>{this.props.userName ? this.props.userName : userInfoStorage.getItem('userName')}</View> */}
            <Icon type="down" style={styleJS.icon} />
          </div>
        </Dropdown>
      </View>
    );
  }
}

TopBar.defaultProps = {};

export default TopBar;
