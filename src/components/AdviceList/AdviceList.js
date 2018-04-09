
import React, { PropTypes } from 'react';
import AdviceListHeader from './AdviceListHeader';
import AdviceListSearch from './AdviceListSearch';
import AdviceListTable from './AdviceListTable';
import PageNav from '../../common/PageNav';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as styles from '../../assets/stylesheets/Common.css';
import * as AdviceListAction from '../../actions/AdviceListAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class ArticleList extends React.Component {
  componentWillMount() {
    this.props.dispatch(AdviceListAction.getAdviceList(this.props.searchData.toJS()));
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(AdviceListAction.getAdviceList(localParams));
    this.props.changeAction('AdviceReducer/searchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '90px' }}>
        <View className={ styles.contentListHeader } >
          <AdviceListHeader />
        </View>
        <View className={ styles.contentListContent } >
           <View className={ styles.contentListSearch } >
              <AdviceListSearch
                searchAction={this._searchAction(this.props.dispatch)}
                searchData={this.props.searchData}
              />
            </View>
          <View className={ styles.contentListTable } >
             <AdviceListTable
               dataSource={this.props.adviceList.get('list')}
               total={this.props.adviceList.get('total')}
               dispatch={this.props.dispatch}
             />
          </View>
          <View className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.adviceList.get('total')}
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

export default ArticleList;
