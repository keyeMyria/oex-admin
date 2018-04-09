
import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';

const propTypes = {
  dataSource: PropTypes.instanceOf(Immutable.List).isRequired,
  dispatch: PropTypes.func,
  deleteAction: PropTypes.func,
};

class ArticleListTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 100,
    }, {
      title: '题目ID',
      dataIndex: 'id',
      key: 'id',
      width: 70,
    }, {
      title: '题号',
      dataIndex: 'subjectId',
      key: 'subjectId',
      width: 100,
    }, {
      title: '真题/教材同步',
      dataIndex: 'type',
      key: 'type',
      width: 100,
    }, {
      title: '题干',
      dataIndex: 'content',
      key: 'content',
    }, {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      width: 150,
    }];
  }
  _renderDataSource(datas) {
    const dataSource = [];
    if(datas) {
    const typeText = { 1: '真题', 2: '教材同步'};
    datas.forEach((data, index) => {
      const sex = data.get('sex');
      dataSource.push({
        key: index,
        id: data.get('id'),
        subjectId: data.get('subjectId'),
        type: typeText[data.get('type')],
        content: data.get('content'),
        updateTime: data.get('updateTime'),
        operation: (
          <View>
            <a
              onClick={(e) => {
                e.preventDefault();
                this.props.dispatch(push(RoutingURL.Article(data.get('id'), true)));
              }}
            >
              编辑
            </a>&nbsp;&nbsp;&nbsp;
            <a
              style={{color: '#f60'}}
              onClick={(e) => {
                e.preventDefault();
                this.props.deleteAction({deleteId: data.get('id')});
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
  showImg(img) {
    const views = [];
    if(img) {
      views.push(
        <img src={img} style={{ height: '40px', width: '40px' }} />
      );
    }
    return views;
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
ArticleListTable.propTypes = propTypes;

export default ArticleListTable;
