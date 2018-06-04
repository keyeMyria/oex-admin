
import React, { PropTypes } from 'react';
import NoticeTypeListHeader from './NoticeTypeListHeader';
import NoticeTypeListSearch from './NoticeTypeListSearch';
import NoticeTypeListTable from './NoticeTypeListTable';
import PageNav from '../../common/PageNav';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as styles from '../../assets/stylesheets/Common.css';
import * as OperateAction from '../../actions/OperateAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class NoticeTypeList extends React.Component {
  componentWillMount() {
    this.props.dispatch(OperateAction.getNoticeTypeList(this.props.noticeTypeSearchData.toJS()));
  }
  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.NoticeTypeInfo()));
  }
  // _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
  //   const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.noticeTypeSearchData.get('pageSize') });
  //   dispatch(OperateAction.getNoticeTypeList(localParams));
  //   this.props.changeAction('OperateReducer/noticeTypeSearchData/pageNum', current);
  // };
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    console.log('params', params)
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.noticeTypeSearchData.get('pageSize') });
    dispatch(OperateAction.deleteNoticeTypeInfo(localParams));
    this.props.changeAction('OperateReducer/noticeTypeSearchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '60px' }}>
        <View className={ styles.contentListHeader }>
          <NoticeTypeListHeader goCreateAction={this._goCreateAction(this.props.dispatch)} />
        </View>
        <View className={ styles.contentListContent } >
           {/*<View className={ styles.contentListSearch } >
              <NoticeTypeListSearch
                searchAction={this._searchAction(this.props.dispatch)}
                searchData={this.props.noticeTypeSearchData}
              />
            </View>*/}
          <View className={ styles.contentListTable } >
             <NoticeTypeListTable
               dataSource={this.props.noticeTypeList.get('list')}
               total={this.props.noticeTypeList.get('total')}
               dispatch={this.props.dispatch}
               deleteTypeAction={this._deleteAction(this.props.dispatch)}
             />
          </View>
          <View className={ styles.pageNav }>
            {/*<PageNav
              pageSize={this.props.noticeTypeSearchData.get('pageSize')}
              total={this.props.noticeTypeList.get('total')}
              params={this.props.noticeTypeSearchData.toJS()}
              current={this.props.noticeTypeSearchData.get('pageNum')}
              searchAction={this._searchAction(this.props.dispatch)}
            />*/}
          </View>
        </View>
      </View>
    );
  }
}

export default NoticeTypeList;
