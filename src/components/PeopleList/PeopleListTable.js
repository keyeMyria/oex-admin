
import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
class PeopleListTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 100,
    }, {
      title: '账号ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '昵称',
      dataIndex: 'realName',
      key: 'realName',
    }, {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: '用户身份',
      dataIndex: 'style',
      key: 'style',
    }];
  }
  _renderDataSource(datas) {
    const dataSource = [];
    if(datas) {
    datas.forEach((data, index) => {
      const roleType = { 1: '西医综合', 2: '执业医师', 3: '执业药师' };
      dataSource.push({
        key: index,
        id: data.get('id'),
        realName: data.get('realName'),
        phone: data.get('phone'),
        style: roleType[data.get('style')],
        operation: (
          <View>
              <a
                style={{color: '#0080FF'}}
                onClick={(e) => {
                  e.preventDefault();
                  // this.props.deleteUserAction({deleteId: data.get('id')});
                  this.props.dispatch(push(RoutingURL.People(data.get('id'))));
                }}
              >
                查看
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

export default PeopleListTable;
