
import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';


class AdviceListTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '反馈ID',
      dataIndex: 'id',
      key: 'id',
      width: 70,
    }, {
      title: '用户意见',
      dataIndex: 'content',
      key: 'content',
    }, {
      title: '微信号',
      dataIndex: 'wxAccount',
      key: 'wxAccount',
      width: 100,
    }, {
      title: '邮箱地址',
      dataIndex: 'email',
      key: 'email',
      width: 100,
    }, {
      title: '反馈时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 150,
    }];
  }
  _renderDataSource(datas) {
    const dataSource = [];
    if(datas) {
    datas.forEach((data, index) => {
      dataSource.push({
        key: data.get('id'),
        id: data.get('id'),
        content: data.get('content'),
        createTime: data.get('createTime'),
        email: data.get('email'),
        wxAccount: data.get('wxAccount'),
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

export default AdviceListTable;
