
import React, { PropTypes } from 'react';
import AreaListHeader from './AreaListHeader';
import AreaListSearch from './AreaListSearch';
import AreaListTable from './AreaListTable';
import PageNav from '../../common/PageNav';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as styles from '../../assets/stylesheets/Common.css';
import * as TradeAction from '../../actions/TradeAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class AreaList extends React.Component {
  componentWillMount() {
    this.props.dispatch(TradeAction.getAreaList());
  }
  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.UserInfo()));
  }
  // _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
  //   const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
  //   dispatch(TradeAction.getAreaList(localParams));
  //   this.props.changeAction('TradeReducer/areaSearchData/pageNum', current);
  // };
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    // dispatch(UserAction.deleteUserInfo(localParams));
    this.props.changeAction('TradeReducer/areaSearchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '60px' }}>
        <View className={ styles.contentListHeader }>
          <AreaListHeader />
        </View>
        <View className={ styles.contentListContent } >
          {/* <View className={ styles.contentListSearch } >
              <AreaListSearch
                searchAction={this._searchAction(this.props.dispatch)}
                searchData={this.props.searchData}
              />
            </View> */}
          <View className={ styles.contentListTable } >
             <AreaListTable
               dataSource={this.props.areaList.get('list')}
               total={this.props.areaList.get('total')}
               dispatch={this.props.dispatch}
               deleteUserAction={this._deleteAction(this.props.dispatch)}
             />
          </View>
          {/* <View className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.areaList.get('total')}
              params={this.props.searchData.toJS()}
              current={this.props.searchData.get('pageNum')}
              searchAction={this._searchAction(this.props.dispatch)}
            />
          </View> */}
        </View>
      </View>
    );
  }
}

export default AreaList;
