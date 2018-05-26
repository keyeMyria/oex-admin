
import React, { PropTypes } from 'react';
import CurrencyInfoListHeader from './CurrencyInfoListHeader';
import CurrencyInfoListSearch from './CurrencyInfoListSearch';
import CurrencyInfoListTable from './CurrencyInfoListTable';
import PageNav from '../../common/PageNav';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as styles from '../../assets/stylesheets/Common.css';
import * as ExperienceAction from '../../actions/ExperienceAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class CurrencyInfoList extends React.Component {
  componentWillMount() {
    const params = this.props.searchData.toJS();
    params.style = 1;
    // this.props.dispatch(ExperienceAction.getExperienceList(params));
  }
  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.Experience()));
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = Object.assign(params, { style: 1, pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(ExperienceAction.getExperienceList(localParams));
    this.props.changeAction('ExperienceReducer/searchData/pageNum', current);
  };
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    const localParams = Object.assign(params, { style: 1, pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(ExperienceAction.deleteExperienceInfo(localParams));
    this.props.changeAction('ExperienceReducer/searchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '60px' }}>
        <View className={ styles.contentListHeader } >
          <CurrencyInfoListHeader
            goCreateAction={this._goCreateAction(this.props.dispatch)}
          />
        </View>
        <View className={ styles.contentListContent } >
           {/* <View className={ styles.contentListSearch } >
              <CurrencyInfoListSearch
                searchAction={this._searchAction(this.props.dispatch)}
                searchData={this.props.searchData}
              />
            </View> */}
          <View className={ styles.contentListTable } >
             <CurrencyInfoListTable
               dataSource={this.props.experienceList.get('list')}
               total={this.props.experienceList.get('total')}
               dispatch={this.props.dispatch}
               deleteAction={this._deleteAction(this.props.dispatch)}
             />
          </View>
          <View className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.experienceList.get('total')}
              params={this.props.searchData.toJS()}
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

export default CurrencyInfoList;
