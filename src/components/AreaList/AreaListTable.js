
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
      title: 'uid',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '可用',
      dataIndex: 'realName',
      key: 'realName',
    }, {
      title: '冻结',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: '总计',
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

export default AreaListTable;
