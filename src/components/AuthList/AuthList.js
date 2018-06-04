import React, { PropTypes } from 'react';
import AuthListHeader from './AuthListHeader';
import AuthListSearch from './AuthListSearch';
import AuthListTable from './AuthListTable';
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
class AuthList extends React.Component {
  componentWillMount() {
    this.props.dispatch(UserAction.getRoleList(
      { pageNum: this.props.searchData.get('pageNum'), pageSize: this.props.searchData.get('pageSize') }
    ));
  }
  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.AuthInfo()));
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(UserAction.getRoleList(localParams));
    this.props.changeAction('UserReducer/roleSearchData/pageNum', current);
  };
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(UserAction.deleteUserInfo(localParams));
    this.props.changeAction('ArticleReducer/roleSearchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '90px' }}>
        <View className={ styles.contentListHeader }>
          <AuthListHeader
            goCreateAction={this._goCreateAction(this.props.dispatch)}
          />
        </View>
        <View className={ styles.contentListContent } >
          {/*<View className={ styles.contentListSearch } >
            <AuthListSearch
              searchAction={this._searchAction(this.props.dispatch)}
              searchData={this.props.searchData}
            />
          </View>*/}
          <View className={ styles.contentListTable } >
             <AuthListTable
               dataSource={this.props.roleList.get('list')}
               total={this.props.roleList.get('total')}
               dispatch={this.props.dispatch}
               deleteUserAction={this._deleteAction(this.props.dispatch)}
             />
          </View>
          <View className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.roleList.get('total')}
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

export default AuthList;
