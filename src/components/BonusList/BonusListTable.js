
import React, { PropTypes } from 'react';
import { Table, Popconfirm, Tabs } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

const TabPane = Tabs.TabPane;

@amumu.redux.ConnectStore
class BonusListTable extends React.Component {
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
    this.columns2 = [{
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 100,
    }, {
      title: '币种名',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '手续费',
      dataIndex: 'realName',
      key: 'realName',
    }, {
      title: '开始日期',
      dataIndex: 'phone',
      key: 'phone',
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
        <Tabs defaultActiveKey="1" onChange={() => this.callback()}>
          <TabPane tab="用户持有oex数量" key="1">
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
          </TabPane>
          <TabPane tab="交易对手续费+提币手续费" key="2">
            <Table
              size="middle"
              columns={this.columns2}
              dataSource={this._renderDataSource(this.props.dataSource)}
              pagination={false}
              bordered
              rowClassName={(record, index) => {
                if (index % 2 === 0) {
                  return styles.rowColor;
                }
              }}
            />
          </TabPane>
        </Tabs>

      </View>
    );
  }
}

export default BonusListTable;
