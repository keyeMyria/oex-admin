
import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import * as UserAction from '../../actions/UserAction';

const propTypes = {
  dataSource: PropTypes.instanceOf(Immutable.List).isRequired,
  dispatch: PropTypes.func,
  changeAction: PropTypes.func,
};
@amumu.redux.ConnectStore
class AuthListTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 100,
    }, {
      title: '角色ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '角色名称',
      dataIndex: 'rolename',
      key: 'rolename',
    }, {
      title: '权限',
      dataIndex: 'privileges',
      key: 'privileges',
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
        rolename: data.get('role_name'),
        privileges: data.get('privileges'),
        operation: (
          <View>
            <a
              style={{color: '#0080FF'}}
              onClick={(e) => {
                e.preventDefault();
                this.props.dispatch(UserAction.getRoleInfo(data.toJS()));
                this.props.dispatch(push(RoutingURL.AuthInfo(data.get('id'), true)));
              }}
            >
              修改
            </a> |
            <a
              style={{color: '#f60'}}
              onClick={(e) => {
                e.preventDefault();
                this.props.deleteRoleAction({ id: data.get('id') });
              }}
            >
              删除
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
AuthListTable.propTypes = propTypes;

export default AuthListTable;
