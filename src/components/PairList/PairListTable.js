
import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';


@amumu.redux.ConnectStore
class PairListTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 100,
    }, {
      title: '交易对ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '交易区ID',
      dataIndex: 'zoneId',
      key: 'zoneId',
    }, {
      title: '单次下单，最大数量限制',
      dataIndex: 'maxAmountLimit',
      key: 'maxAmountLimit',
    }, {
      title: '单次下单，最小数量限制',
      dataIndex: 'minAmountLimit',
      key: 'minAmountLimit',
    }, {
      title: '交易币种ID',
      dataIndex: 'tradeCoinId',
      key: 'tradeCoinId',
    }, {
      title: '交易币种名称',
      dataIndex: 'tradeCoinName',
      key: 'tradeCoinName',
    }, {
      title: '交易币短名称',
      dataIndex: 'tradeCoinNameShort',
      key: 'tradeCoinNameShort',
    }, {
      title: '单价币种id',
      dataIndex: 'unitCoinId',
      key: 'unitCoinId',
    }, {
      title: '单价币种名称',
      dataIndex: 'unitCoinName',
      key: 'unitCoinName',
    }, {
      title: '单价币种短名称',
      dataIndex: 'unitCoinNameShort',
      key: 'unitCoinNameShort',
    }];
  }
  _renderDataSource(datas) {
    const dataSource = [];
    if(datas) {
    datas.forEach((data, index) => {
      dataSource.push({
        key: index,
        id: data.get('id'),
        zoneId: data.get('zoneId'),
        maxAmountLimit: data.get('maxAmountLimit'),
        minAmountLimit: data.get('minAmountLimit'),
        tradeCoinId: data.get('tradeCoinId'),
        tradeCoinName: data.get('tradeCoinName'),
        tradeCoinNameShort: data.get('tradeCoinNameShort'),
        unitCoinId: data.get('unitCoinId'),
        unitCoinName: data.get('unitCoinName'),
        unitCoinNameShort: data.get('unitCoinNameShort'),
        operation: (
          <View>
              <a
                style={{color: '#0080FF'}}
                onClick={(e) => {
                  e.preventDefault();
                  this.props.dispatch(push(RoutingURL.PairInfo(data.get('id'), true)));
                }}
              >
                修改
              </a> |
              <a
                style={{color: '#f60'}}
                onClick={(e) => {
                  e.preventDefault();
                  this.props.deleteAction({id: data.get('id')});
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

export default PairListTable;
