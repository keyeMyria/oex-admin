
import React, { PropTypes } from 'react';
import BonusListHeader from './BonusListHeader';
import BonusListSearch from './BonusListSearch';
import BonusListTable from './BonusListTable';
import PageNav from '../../common/PageNav';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as styles from '../../assets/stylesheets/Common.css';
import * as BonusAction from '../../actions/BonusAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class BonusList extends React.Component {
  componentWillMount() {
    // this.props.dispatch(BonusAction.getBonusList(
    //   {
    //     pageNum: this.props.searchData.get('pageNum'),
    //     pageSize: this.props.searchData.get('pageSize'),
    //     style: this.props.searchData.get('style'),
    //   }
    // ));
  }
  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.UserInfo()));
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(BonusAction.getBonusList(localParams));
    this.props.changeAction('BonusReducer/searchData/pageNum', current);
  };
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    // dispatch(UserAction.deleteUserInfo(localParams));
    this.props.changeAction('ArticleReducer/searchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '90px' }}>
        <View className={ styles.contentListHeader }>
          <BonusListHeader />
        </View>
        <View className={ styles.contentListContent } >
        <View className={ styles.contentListSearch } >
              <BonusListSearch
                searchAction={this._searchAction(this.props.dispatch)}
                searchData={this.props.searchData}
              />
            </View>
          <View className={ styles.contentListTable } >
             <BonusListTable
               dataSource={this.props.bonusList.get('list')}
               total={this.props.bonusList.get('total')}
               dispatch={this.props.dispatch}
               deleteUserAction={this._deleteAction(this.props.dispatch)}
             />
          </View>
          <View className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.bonusList.get('total')}
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

export default BonusList;
