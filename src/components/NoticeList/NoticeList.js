
import React, { PropTypes } from 'react';
import NoticeListHeader from './NoticeListHeader';
import NoticeListSearch from './NoticeListSearch';
import NoticeListTable from './NoticeListTable';
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
class NoticeList extends React.Component {
  componentWillMount() {
    this.props.dispatch(OperateAction.getNoticeList(this.props.searchData.toJS()));
  }
  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.NoticeInfo()));
  }
  // _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
  //   const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
  //   dispatch(OperateAction.getNoticeList(localParams));
  //   this.props.changeAction('OperateReducer/searchData/pageNum', current);
  // };
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(OperateAction.deleteNoticeInfo(localParams));
    this.props.changeAction('OperateReducer/searchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '60px' }}>
        <View className={ styles.contentListHeader }>
          <NoticeListHeader goCreateAction={this._goCreateAction(this.props.dispatch)}/>
        </View>
        <View className={ styles.contentListContent } >
          {/* <View className={ styles.contentListSearch } >
              <NoticeListSearch
                searchAction={this._searchAction(this.props.dispatch)}
                searchData={this.props.searchData}
              />
            </View> */}
          <View className={ styles.contentListTable } >
             <NoticeListTable
               dataSource={this.props.noticeList.get('list')}
               total={this.props.noticeList.get('total')}
               dispatch={this.props.dispatch}
               deleteNoticeAction={this._deleteAction(this.props.dispatch)}
             />
          </View>
          <View className={ styles.pageNav }>
            {/* <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.noticeList.get('total')}
              params={this.props.searchData.toJS()}
              current={this.props.searchData.get('pageNum')}
              searchAction={this._searchAction(this.props.dispatch)}
            /> */}
          </View>
        </View>
      </View>
    );
  }
}

export default NoticeList;
