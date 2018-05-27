
import React, { PropTypes } from 'react';
import CoinFlowHeader from './CoinFlowHeader';
import CoinFlowSearch from './CoinFlowSearch';
import CoinFlowTable from './CoinFlowTable';
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
class CoinFlow extends React.Component {
  componentWillMount() {
    this.props.dispatch(FlowAction.getRechargeRecordByCoin(this.props.searchData.toJS()));
  }
  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.UserInfo()));
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(FlowAction.getRechargeRecordByCoin(localParams));
    this.props.changeAction('FlowReducer/coinSearchData/pageNum', current);
  };
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    // dispatch(UserAction.deleteUserInfo(localParams));
    this.props.changeAction('FlowReducer/coinSearchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '90px' }}>
        <View className={ styles.contentListHeader }>
          <CoinFlowHeader />
        </View>
        <View className={ styles.contentListContent } >
          <View className={ styles.contentListSearch } >
            <CoinFlowSearch
              searchAction={this._searchAction(this.props.dispatch)}
              searchData={this.props.searchData}
            />
          </View>
          <View className={ styles.contentListTable } >
             <CoinFlowTable
               isFetching={this.props.isFetching}
               dataSource={this.props.coinFlow.get('list')}
               searchData={this.props.searchData}
               total={this.props.coinFlow.get('total')}
               dispatch={this.props.dispatch}
               deleteUserAction={this._deleteAction(this.props.dispatch)}
             />
          </View>
          <View className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.coinFlow.get('total')}
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

export default CoinFlow;
