
import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import moment from 'moment';


@amumu.redux.ConnectStore
class WorkOrdersTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 100,
    }, {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'uid',
      dataIndex: 'userId',
      key: 'userId',
    }, {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '电话号码',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: '反馈状态',
      dataIndex: 'status',
      key: 'status',
    }, {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
    }];
  }
  _renderDataSource(datas) {
    const dataSource = [];
    if(datas) {
    datas.forEach((data, index) => {
      const statusType = { 0: '已撤销', 1: '未反馈', 2: '已反馈', 3: '已关闭' };
      dataSource.push({
        key: index,
        id: data.get('id'),
        userId: data.get('user_id'),
        phone: data.get('phone'),
        title: data.get('title'),
        updateTime: moment(data.get('update_time')).format('YYYY-MM-DD HH:mm:ss'),
        status: data.get('status')!== null && statusType[data.get('status')+1],
        operation: (
          <View>
              <a
                style={{color: '#0080FF'}}
                onClick={(e) => {
                  e.preventDefault();
                  this.props.dispatch(push(RoutingURL.WorkOrder(data.get('id'))));
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
  callback(key) {
    console.log(key);
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

export default WorkOrdersTable;
