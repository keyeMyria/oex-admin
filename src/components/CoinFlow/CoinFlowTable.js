import React, { PropTypes } from 'react';
import { Table, Popconfirm, Tabs } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import moment from 'moment';
import * as FlowAction from '../../actions/FlowAction';

const TabPane = Tabs.TabPane;

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class CoinFlowTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'uid',
      dataIndex: 'userId',
      key: 'userId',
    }, {
      title: '数量',
      dataIndex: 'amount',
      key: 'amount',
    }, {
      title: 'txHash',
      dataIndex: 'txHash',
      key: 'txHash',
    }, {
      title: '确认数',
      dataIndex: 'confirmation',
      key: 'confirmation',
    }, {
      title: '确认状态',
      dataIndex: 'state',
      key: 'state',
    }, {
      title: '时间',
      dataIndex: 'createTime',
      key: 'createTime',
    }];
  }
  static propTypes = {
    changeAction: PropTypes.func.isRequired,
    searchData: PropTypes.instanceOf(Immutable.Map).isRequired,
  };
  _renderDataSource(datas) {
    const dataSource = [];
    if(datas) {
    datas.forEach((data, index) => {
      const stateType = { 0: '未确认', 1: '已确认' };
      dataSource.push({
        key: index,
        id: data.get('id'),
        userId: data.get('userId'),
        amount: data.get('amount'),
        txHash: data.get('txHash'),
        confirmation: data.get('confirmation'),
        createTime: moment(data.get('createTime')).format('YYYY-MM-DD HH:mm:ss'),
        state: stateType[data.get('state')],
      });
    });
    }
    return dataSource;
  }
  callback(key) {
    this.props.changeAction('FlowReducer/coinSearchData/type', key);
    if(this.props.searchData.get('type') === '1') {
      this.props.dispatch(FlowAction.getRechargeRecordByCoin(this.props.searchData.toJS()));
    }
    if(this.props.searchData.get('type') === '2') {
      this.props.dispatch(FlowAction.getWithdrawRecordByCoin(this.props.searchData.toJS()));
    }
  }
  render() {
    return (
      <View>
        <Tabs defaultActiveKey="1" onChange={(e) => this.callback(e)}>
          <TabPane tab="充币" key="1">
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
          <TabPane tab="提币" key="2">
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
        </Tabs>
      </View>
    );
  }
}

export default CoinFlowTable;
