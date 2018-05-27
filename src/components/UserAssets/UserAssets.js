
import React, { PropTypes } from 'react';
import UserAssetsHeader from './UserAssetsHeader';
import UserAssetsSearch from './UserAssetsSearch';
import UserAssetsTable from './UserAssetsTable';
import PageNav from '../../common/PageNav';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as styles from '../../assets/stylesheets/Common.css';
import * as UserAssetsAction from '../../actions/UserAssetsAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
// @amumu.decorators.Loading('pc')
class UserAssets extends React.Component {
  componentWillMount() {
    this.props.dispatch(UserAssetsAction.getUserAssets(this.props.searchData.toJS()));
  }
  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.UserInfo()));
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(UserAssetsAction.getRechargeRecordByCoin(localParams));
    this.props.changeAction('UserAssetsReducer/searchData/pageNum', current);
  };
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    // dispatch(UserAction.deleteUserInfo(localParams));
    this.props.changeAction('UserAssetsReducer/searchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '90px' }}>
        <View className={ styles.contentListHeader }>
          <UserAssetsHeader />
        </View>
        <View className={ styles.contentListContent } >
          <View className={ styles.contentListSearch } >
            <UserAssetsSearch
              searchAction={this._searchAction(this.props.dispatch)}
              searchData={this.props.searchData}
            />
          </View>
          <View className={ styles.contentListTable } >
             <UserAssetsTable
               isFetching={this.props.isFetching}
               dataSource={this.props.assetsList.get('list')}
               searchData={this.props.searchData}
               total={this.props.assetsList.get('total')}
               dispatch={this.props.dispatch}
               deleteUserAction={this._deleteAction(this.props.dispatch)}
             />
          </View>
          <View className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.assetsList.get('total')}
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

export default UserAssets;
