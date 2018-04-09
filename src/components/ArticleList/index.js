
import { connect } from 'react-redux';
import ArticleList from './ArticleList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.UserReducer.get('errMsg'),
  isFetching: state.ArticleReducer.get('isFetching'),
  articleList: state.ArticleReducer.get('articleList'),
  searchData: state.ArticleReducer.get('searchData'),
});

export default connect(mapStateToProps)(ArticleList);
