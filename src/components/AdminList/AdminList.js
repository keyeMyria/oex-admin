import React, { PropTypes } from 'react';
import AdminListHeader from './AdminListHeader';
import AdminListSearch from './AdminListSearch';
import AdminListTable from './AdminListTable';
import PageNav from '../../common/PageNav';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as styles from '../../assets/stylesheets/Common.css';
import * as UserAction from '../../actions/UserAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class AdminList extends React.Component {
  componentWillMount() {
    this.props.dispatch(UserAction.getUserList(
      { pageNum: this.props.searchData.get('pageNum'), pageSize: this.props.searchData.get('pageSize') }
    ));
  }
  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.AdminInfo()));
  }
  _goUpdateAction = (dispatch: Function) => (params) => {
    console.log('params:', JSON.stringify(params))
    dispatch(UserAction.getUserInfo(params));
    dispatch(push(RoutingURL.AdminInfo(params.get('id'), true)));
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(UserAction.getUserList(localParams));
    this.props.changeAction('AdminReducer/searchData/pageNum', current);
  };
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(UserAction.deleteUserInfo(localParams));
    this.props.changeAction('AdminReducer/searchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '90px' }}>
        <View className={ styles.contentListHeader }>
          <AdminListHeader
            goCreateAction={this._goCreateAction(this.props.dispatch)}
          />
        </View>
        <View className={ styles.contentListContent } >
          <View className={ styles.contentListSearch } >
            <AdminListSearch
              searchAction={this._searchAction(this.props.dispatch)}
              searchData={this.props.searchData}
            />
          </View>
          <View className={ styles.contentListTable } >
             <AdminListTable
               dataSource={this.props.userList.get('list')}
               total={this.props.userList.get('total')}
               dispatch={this.props.dispatch}
               deleteUserAction={this._deleteAction(this.props.dispatch)}
               goUpdateAction={this._goUpdateAction(this.props.dispatch)}
             />
          </View>
          <View className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.userList.get('total')}
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

export default AdminList;
