
import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

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
  _renderDataSource(datas) {
    const dataSource = [];
    if(datas) {
    datas.forEach((data, index) => {
      const roleType = { 1: '超级用户', 2: '普通用户' };
      dataSource.push({
        key: index,
        id: data.get('id'),
        withdrawCoin: data.get('withdraw_coin'),
        lockingTrade: data.get('locking_trade'),
        lockingLogin: data.get('locking_login'),
        userEmail: data.get('user_email'),
        lastLogin: data.get('last_login'),
        signupLogin: data.get('signup_login'),
        documentId: data.get('document_id'),
        userRealName: data.get('user_real_name'),
        role: roleType[data.get('role')],
        operation: (
          <View>
            {data.get('role') === 2 ?
              <a
                style={{color: '#f60'}}
                onClick={(e) => {
                  e.preventDefault();
                  this.props.deleteUserAction({deleteId: data.get('id')});
                }}
              >
                删除
              </a> : ''
            }
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
