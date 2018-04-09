
import React, { PropTypes } from 'react';
import ArticleListHeader from './ArticleListHeader';
import ArticleListSearch from './ArticleListSearch';
import ArticleListTable from './ArticleListTable';
import PageNav from '../../common/PageNav';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as styles from '../../assets/stylesheets/Common.css';
import * as ArticleAction from '../../actions/ArticleAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class ArticleList extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    errMsg: PropTypes.string.isRequired,
    articleList: PropTypes.instanceOf(Immutable.Map).isRequired,
    searchData: PropTypes.instanceOf(Immutable.Map).isRequired,
    dispatch: PropTypes.func,
  };
  componentWillMount() {
    this.props.dispatch(ArticleAction.getArticleList(this.props.searchData.toJS()));
  }
  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.Article()));
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(ArticleAction.getArticleList(localParams));
    this.props.changeAction('ArticleReducer/searchData/pageNum', current);
  };
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(ArticleAction.deleteArticleInfo(localParams));
    this.props.changeAction('ArticleReducer/searchData/pageNum', current);
  };
  render() {
    return (
      <View className={ styles.contentList } style={{ top: '90px' }}>
        <View className={ styles.contentListHeader } >
          <ArticleListHeader
            goCreateAction={this._goCreateAction(this.props.dispatch)}
          />
        </View>
        <View className={ styles.contentListContent } >
           <View className={ styles.contentListSearch } >
              <ArticleListSearch
                searchAction={this._searchAction(this.props.dispatch)}
                searchData={this.props.searchData}
              />
            </View>
          <View className={ styles.contentListTable } >
             <ArticleListTable
               dataSource={this.props.articleList.get('list')}
               total={this.props.articleList.get('total')}
               dispatch={this.props.dispatch}
               deleteAction={this._deleteAction(this.props.dispatch)}
             />
          </View>
          <View className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.articleList.get('total')}
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
