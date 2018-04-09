
import { connect } from 'react-redux';
import Article from './Article';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.ArticleReducer.get('errMsg'),
  isFetching: state.ArticleReducer.get('isFetching'),
  articleInfo: state.ArticleReducer.get('articleInfo'),
  partList: state.ArticleReducer.get('partList'),
  courseList: state.ArticleReducer.get('courseList'),
  yearList: state.ArticleReducer.get('yearList'),
});

export default connect(mapStateToProps)(Article);
