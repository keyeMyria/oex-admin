
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
class NoticeListTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 100,
    }, {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '标题',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    }];
  }
  _renderDataSource(datas) {
    const dataSource = [];
    if(datas) {
    datas.forEach((data, index) => {
      dataSource.push({
        key: index,
        id: data.get('id'),
        name: data.get('name'),
        updateTime: moment(data.get('update_time')).format('YYYY-MM-DD HH:mm:ss'),
        createTime: moment(data.get('create_time')).format('YYYY-MM-DD HH:mm:ss'),
        operation: (
          <View>
              <a
                style={{color: '#0080FF'}}
                onClick={(e) => {
                  e.preventDefault();
                  // this.props.deleteUserAction({deleteId: data.get('id')});
                  this.props.dispatch(push(RoutingURL.Bonus(data.get('id'))));
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

export default NoticeListTable;
