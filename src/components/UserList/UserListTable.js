
import React, { PropTypes } from 'react';
import { Table, Popconfirm, Switch } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import moment from 'moment';
import * as UserAction from '../../actions/UserAction';

const propTypes = {
  dataSource: PropTypes.instanceOf(Immutable.List).isRequired,
  dispatch: PropTypes.func,
  changeAction: PropTypes.func,
};
@amumu.redux.ConnectStore
class UserListTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 100,
    }, {
      title: 'uid',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '邮箱',
      dataIndex: 'userEmail',
      key: 'userEmail',
    }, {
      title: '是否禁止登陆',
      dataIndex: 'lockingLogin',
      key: 'lockingLogin',
    }, {
      title: '是否禁止提币',
      dataIndex: 'withdrawCoin',
      key: 'withdrawCoin',
    }, {
      title: '是否禁止交易',
      dataIndex: 'lockingTrade',
      key: 'lockingTrade',
    }, {
      title: '是否禁止提现',
      dataIndex: 'withdrawCash',
      key: 'withdrawCash',
    }, {
      title: '真实姓名',
      dataIndex: 'userRealName',
      key: 'userRealName',
    }, {
      title: '证件号码',
      dataIndex: 'documentId',
      key: 'documentId',
    }, {
      title: '推荐人uid',
      dataIndex: 'role',
      key: 'role',
    }, {
      title: '注册时间',
      dataIndex: 'signupLogin',
      key: 'signupLogin',
    }, {
      title: '登陆时间',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
    }];
  }
  onChange(params) {
    console.log(params)
    this.props.dispatch(UserAction.updateLocking(params));
  }

  _renderDataSource(datas) {
    const dataSource = [];
    if(datas) {
    datas.forEach((data, index) => {
      const roleType = { 1: '超级用户', 2: '普通用户' };
      dataSource.push({
        key: index,
        id: data.get('id'),
        withdrawCoin: (
          <Switch defaultChecked={data.get('withdraw_coin')} onChange={(e) => this.onChange({ userId:data.get('id'), withdraw_coin: e })} />
        ),
        lockingTrade: (
          <Switch defaultChecked={data.get('locking_trade')} onChange={(e) => this.onChange({ userId:data.get('id'), locking_trade: e })} />
        ),
        lockingLogin: (
          <Switch defaultChecked={data.get('locking_login')} onChange={(e) => this.onChange({ userId:data.get('id'), locking_login: e })} />
        ),
        withdrawCash: (
          <Switch defaultChecked={data.get('withdraw_cash')} onChange={(e) => this.onChange({ userId:data.get('id'), withdraw_cash: e })} />
        ),
        userEmail: data.get('user_email'),
        lastLogin: data.get('last_login') ? moment(data.get('last_login')).format('YYYY-MM-DD HH:mm:ss') : '',
        signupLogin: data.get('signup_login') ? moment(data.get('signup_login')).format('YYYY-MM-DD HH:mm:ss') : '',
        documentId: data.get('document_id'),
        userRealName: data.get('user_real_name'),
        role: roleType[data.get('role')],
        operation: (
          <View>
            <a
              onClick={(e) => {
                e.preventDefault();
                // this.props.deleteUserAction({deleteId: data.get('id')});
              }}
            >
              编辑
            </a> |
            <a
              onClick={(e) => {
                e.preventDefault();
                // this.props.deleteUserAction({deleteId: data.get('id')});
              }}
            >
              重置交易密码
            </a>
          </View>
        ),
      });
    });
    }
    return dataSource;
  }
  render() {
    return (
      <View>
        <Table
          size="middle"
          columns={this.columns}
          dataSource={this._renderDataSource(this.props.dataSource)}
          pagination={false}
          bordered
          rowClassName={(record, index) => {
            if (index % 2 === 0) {
              return styles.rowColor;
            }
          }}
        />
      </View>
    );
  }
}
UserListTable.propTypes = propTypes;

export default UserListTable;
