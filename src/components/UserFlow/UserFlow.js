
import React, { PropTypes } from 'react';
import UserFlowHeader from './UserFlowHeader';
import UserFlowSearch from './UserFlowSearch';
import UserFlowTable from './UserFlowTable';
import PageNav from '../../common/PageNav';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as styles from '../../assets/stylesheets/Common.css';
import * as FlowAction from '../../actions/FlowAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
// @amumu.decorators.Loading('pc')
class UserFlow extends React.Component {
  componentWillMount() {
    this.props.dispatch(FlowAction.getRechargeRecordByUser(this.props.searchData.toJS()));
  }
  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.UserInfo()));
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(FlowAction.getRechargeRecordByUser(localParams));
    this.props.changeAction('FlowReducer/userSearchData/pageNum', current);
  };
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    // dispatch(UserAction.deleteUserInfo(localParams));
    this.props.changeAction('FlowReducer/userSearchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '90px' }}>
        <View className={ styles.contentListHeader }>
          <UserFlowHeader />
        </View>
        <View className={ styles.contentListContent } >
          <View className={ styles.contentListSearch } >
            <UserFlowSearch
              searchAction={this._searchAction(this.props.dispatch)}
              searchData={this.props.searchData}
            />
          </View>
          <View className={ styles.contentListTable } >
             <UserFlowTable
               isFetching={this.props.isFetching}
               dataSource={this.props.userFlow.get('list')}
               searchData={this.props.searchData}
               total={this.props.userFlow.get('total')}
               dispatch={this.props.dispatch}
               deleteUserAction={this._deleteAction(this.props.dispatch)}
             />
          </View>
          <View className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.userFlow.get('total')}
              params={this.props.searchData.toJS()}
              current={this.props.searchData.get('pageNum')}
              searchAction={this._searchAction(this.props.dispatch)}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default UserFlow;
