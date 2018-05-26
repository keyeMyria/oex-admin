
import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';

class AddressListTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '反馈ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '币种名+币种简称',
      dataIndex: 'content',
      key: 'content',
    }, {
      title: '已分配地址数量',
      dataIndex: 'wxAccount',
      key: 'wxAccount',
    }, {
      title: '剩余未分配地址数量',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
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
                生成地址
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

export default AddressListTable;
