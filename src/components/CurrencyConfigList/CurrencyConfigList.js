
import React, { PropTypes } from 'react';
import CurrencyConfigListHeader from './CurrencyConfigListHeader';
import CurrencyConfigListSearch from './CurrencyConfigListSearch';
import CurrencyConfigListTable from './CurrencyConfigListTable';
import PageNav from '../../common/PageNav';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as styles from '../../assets/stylesheets/Common.css';
import * as CurrencyAction from '../../actions/CurrencyAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class CurrencyConfigList extends React.Component {
  componentWillMount() {
    const params = this.props.searchData.toJS();
    this.props.dispatch(CurrencyAction.getCoinConfigList(params));
  }
  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.ExperienceDoctor()));
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = Object.assign(params, { style: 2, pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(CurrencyAction.getCoinConfigList(localParams));
    this.props.changeAction('CurrencyReducer/coinConfigSearchData/pageNum', current);
  };
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    const localParams = Object.assign(params, { style: 2, pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(CurrencyAction.deleteCoinConfig(localParams));
    this.props.changeAction('CurrencyReducer/coinConfigSearchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '60px' }}>
        <View className={ styles.contentListHeader } >
          <CurrencyConfigListHeader
            goCreateAction={this._goCreateAction(this.props.dispatch)}
          />
        </View>
        <View className={ styles.contentListContent } >
           {/* <View className={ styles.contentListSearch } >
              <CurrencyConfigListSearch
                searchAction={this._searchAction(this.props.dispatch)}
                searchData={this.props.searchData}
              />
            </View> */}
          <View className={ styles.contentListTable } >
             <CurrencyConfigListTable
               dataSource={this.props.coinConfigList.get('list')}
               total={this.props.coinConfigList.get('total')}
               dispatch={this.props.dispatch}
               deleteAction={this._deleteAction(this.props.dispatch)}
             />
          </View>
          <View className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.coinConfigList.get('total')}
              params={{ ...this.props.searchData.toJS(), style: 2}}
              current={this.props.searchData.get('pageNum')}
              searchAction={this._searchAction(this.props.dispatch)}
            />
          </View>
        </View>
      </View>
    );
  }
  componentWillUnmount() {
    this.props.changeAction('ExperienceReducer/searchData/id', '');
    this.props.changeAction('ExperienceReducer/searchData/pageNum', 1);
    this.props.changeAction('ExperienceReducer/searchData/type', '');
  }
}

export default CurrencyConfigList;
