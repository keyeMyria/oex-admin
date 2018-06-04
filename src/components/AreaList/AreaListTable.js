
import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';


@amumu.redux.ConnectStore
class AreaListTable extends React.Component {
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
      title: '交易区名称',
      dataIndex: 'zoneName',
      key: 'zoneName',
    }, {
      title: '交易区顺序',
      dataIndex: 'zoneSort',
      key: 'zoneSort',
    }, {
      title: '交易区展示开关',
      dataIndex: 'zoneSwitch',
      key: 'zoneSwitch',
    }];
  }
  _renderDataSource(datas) {
    const dataSource = [];
    if(datas) {
    datas.forEach((data, index) => {
      const switchType = { 0: '关闭', 1: '展开' };
      dataSource.push({
        key: index,
        id: data.get('id'),
        zoneName: data.get('zoneName'),
        zoneSort: data.get('zoneSort'),
        zoneSwitch: switchType[data.get('zoneSwitch')],
        operation: (
          <View>
              <a
                style={{color: '#0080FF'}}
                onClick={(e) => {
                  e.preventDefault();
                  this.props.dispatch(push(RoutingURL.AreaInfo(data.get('id'), true)));
                }}
              >
                修改
              </a> | <a
                style={{color: '#f60'}}
                onClick={(e) => {
                  e.preventDefault();
                  this.props.deleteUserAction({ id: data.get('id')})
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

export default AreaListTable;
